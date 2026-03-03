import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';

interface Article {
    id: string;
    title: string;
    cover_image_url: string | null;
    created_at: string;
}

const DynamicArticlesList: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            const { data, error } = await supabase
                .from('articles')
                .select('id, title, cover_image_url, created_at')
                .eq('published', true)
                .order('created_at', { ascending: false })
                .limit(3);

            if (!error && data) {
                setArticles(data);
            }
            setLoading(false);
        };

        fetchArticles();
    }, []);

    if (loading) return null;
    if (articles.length === 0) return null; // Não mostra nada se não tiver artigos

    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="flex items-center justify-center gap-2 text-primary font-semibold tracking-wider uppercase mb-4 text-sm">
                        <FileText size={18} />
                        Blog & Artigos
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 dark:text-gray-100">
                        Últimas Publicações
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            to={`/artigo/${article.id}`}
                            className="group flex flex-col bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-700 transition-all hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                                {article.cover_image_url ? (
                                    <img
                                        src={article.cover_image_url}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <FileText size={48} opacity={0.5} />
                                    </div>
                                )}
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <time className="text-sm text-primary-dark dark:text-primary-light font-medium mb-3">
                                    {new Date(article.created_at).toLocaleDateString('pt-BR', {
                                        day: 'numeric', month: 'short', year: 'numeric'
                                    })}
                                </time>
                                <h3 className="text-xl font-bold font-display text-gray-900 dark:text-gray-100 leading-snug mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h3>
                                <div className="mt-auto pt-4 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                                    Ler mais <ArrowRight size={18} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DynamicArticlesList;
