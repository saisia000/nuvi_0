import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast'; // If you're using a toast system

const SignUp = () => {
    const { signUp } = useAuth();
    const [form, setForm] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { email, password, firstName, lastName, dateOfBirth } = form;

        const { error } = await signUp(email, password, firstName, lastName, dateOfBirth);

        setLoading(false);

        if (error) {
            toast({ title: 'Sign Up Failed', description: error.message, variant: 'destructive' });
        } else {
            toast({ title: 'Sign Up Successful', description: 'Welcome to Nuvori 🎉' });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow">
            <h1 className="text-2xl font-semibold mb-4">Create your Nuvori account</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input name="firstName" value={form.firstName} onChange={handleChange} required />
                </div>
                <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input name="lastName" value={form.lastName} onChange={handleChange} required />
                </div>
                <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} required />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" name="password" value={form.password} onChange={handleChange} required />
                </div>
                <Button type="submit" disabled={loading} className="w-full">
                    {loading ? 'Creating account…' : 'Sign Up'}
                </Button>
            </form>
        </div>
    );
};

export default SignUp;
