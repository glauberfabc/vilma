import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

interface Article {
    id: string;
    title: string;
    published: boolean;
    created_at: string;
}

const Dashboard: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchArticles = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('articles')
            .select('id, title, published, created_at')
            .order('created_at', { ascending: false });

        if (error) {
            toast.error('Erro ao buscar artigos: ' + error.message);
        } else {
            setArticles(data || []);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const handleDelete = async (id: string, title: string) => {
        if (!window.confirm(`Tem certeza que deseja excluir o artigo "${title}"?`)) return;

        const { error } = await supabase.from('articles').delete().eq('id', id);

        if (error) {
            toast.error('Erro ao excluir: ' + error.message);
        } else {
            toast.success('Artigo excluído!');
            fetchArticles();
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
                <h1 className="text-2xl font-display font-bold text-gray-800 dark:text-gray-100">Artigos</h1>
                <Link
                    to="/admin/artigo/novo"
                    className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                    <Plus size={18} />
                    <span>Novo Artigo</span>
                </Link>
            </div>

            <div className="p-0">
                {loading ? (
                    <div className="p-8 text-center text-gray-500">Carregando artigos...</div>
                ) : articles.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">Nenhum artigo encontrado. Crie o seu primeiro!</div>
                ) : (
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 text-sm uppercase tracking-wider">
                                <th className="p-4 font-medium">Título</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium">Data</th>
                                <th className="p-4 font-medium text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                            {articles.map((article) => (
                                <tr key={article.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="p-4 text-gray-800 dark:text-gray-200 font-medium">
                                        {article.title}
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${article.published
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                            }`}>
                                            {article.published ? 'Público' : 'Rascunho'}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-gray-500 dark:text-gray-400">
                                        {new Date(article.created_at).toLocaleDateString('pt-BR')}
                                    </td>
                                    <td className="p-4 flex justify-end gap-2">
                                        <Link
                                            to={`/admin/artigo/${article.id}`}
                                            className="p-2 text-primary hover:bg-primary-light/20 rounded-lg transition-colors"
                                            title="Editar"
                                        >
                                            <Edit size={18} />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(article.id, article.title)}
                                            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                            title="Excluir"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
