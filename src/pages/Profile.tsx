import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const Profile = () => {
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>;
    if (!user) return <Navigate to="/" />;

    return (
        <div className="p-8 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
            <p>Email: {user.email}</p>
            {/* Add more profile data here later */}
        </div>
    );
};

export default Profile;
