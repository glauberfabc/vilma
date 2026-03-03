import React, { useEffect, useState } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { LogOut } from 'lucide-react';

const AdminLayout: React.FC = () => {
    const [session, setSession] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin/login');
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Carregando admin...</div>;

    if (!session) {
        return <Navigate to="/admin/login" replace />;
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
            <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 shrink-0 flex items-center justify-between">
                <div className="flex items-center gap-4 text-primary">
                    <span className="font-display font-bold text-xl">Vilma Pires - Painel Admin</span>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-600 dark:text-gray-300"
                >
                    <LogOut size={18} />
                    <span>Sair</span>
                </button>
            </header>
            <main className="flex-1 p-6 flex flex-col items-center">
                <div className="w-full max-w-5xl">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
