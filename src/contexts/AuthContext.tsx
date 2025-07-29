// contexts/AuthContext.tsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface Profile {
    id: string;
    date_of_birth?: string;
    skills?: string[];
    interests?: string[];
    is_email_public?: boolean;
    is_dob_public?: boolean;
    is_resume_public?: boolean;
    is_profile_public?: boolean;
    resume_url?: string;
    created_at?: string;
    updated_at?: string;
    // Add other fields as needed
}

interface AuthContextType {
    user: User | null;
    session: Session | null;
    profile: Profile | null;
    loading: boolean;
    refreshProfile: () => Promise<void>;
    signIn: (email: string, password: string) => Promise<{ error: any }>;
    signUp: (
        email: string,
        password: string,
        dateOfBirth: string
    ) => Promise<{ error: any }>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) console.error('Error fetching session:', error);
            else {
                setSession(data.session);
                setUser(data.session?.user ?? null);
                if (data.session?.user) await loadProfile(data.session.user.id);
            }
            setLoading(false);
        };

        getSession();

        const { data: listener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                setSession(session);
                setUser(session?.user ?? null);
                if (session?.user) await loadProfile(session.user.id);
                else setProfile(null);
            }
        );

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const loadProfile = async (userId: string) => {
        const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();

        if (error) {
            console.error('Error loading profile:', error.message);
            setProfile(null);
        } else {
            setProfile(data);
        }
    };

    const refreshProfile = async () => {
        if (user) await loadProfile(user.id);
    };

    const signIn = async (email: string, password: string) => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        return { error };
    };

    const signUp = async (
        email: string,
        password: string,
        dateOfBirth: string
    ) => {
        const {
            data: { user },
            error,
        } = await supabase.auth.signUp({
            email,
            password,
        });

        if (user) {
            await supabase.from('profiles').insert([
                {
                    id: user.id,
                    date_of_birth: dateOfBirth,
                },
            ]);
        }

        return { error };
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setProfile(null);
        setSession(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                session,
                profile,
                loading,
                refreshProfile,
                signIn,
                signUp,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
