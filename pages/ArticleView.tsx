import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { ArrowLeft, Calendar } from 'lucide-react';

interface Article {
    title: string;
    content: string;
    cover_image_url: string | null;
    created_at: string;
}

const ArticleView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            const { data, error } = await supabase
                .from('articles')
                .select('title, content, cover_image_url, created_at')
                .eq('id', id)
                .single();

            if (!error && data) {
                setArticle(data);
            }
            setLoading(false);
        };

        fetchArticle();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white">Carregando...</div>;
    }

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900 dark:text-white gap-4">
                <h1 className="text-2xl font-bold">Artigo não encontrado</h1>
                <Link to="/" className="text-primary hover:underline flex items-center gap-2">
                    <ArrowLeft size={18} /> Voltar para o início
                </Link>
            </div>
        );
    }

    // Limpar o HTML recebido do banco de dados (sanitize para segurança)
    const cleanHTML = DOMPurify.sanitize(article.content);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col">
            <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-6 h-20 flex items-center">
                    <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 font-medium">
                        <ArrowLeft size={20} />
                        Voltar
                    </Link>
                </div>
            </header>

            <article className="flex-1 w-full max-w-3xl mx-auto px-6 py-12 md:py-20">
                {article.cover_image_url && (
                    <div className="w-full h-[300px] md:h-[450px] mb-12 rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src={article.cover_image_url}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                <header className="mb-12 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400 font-medium mb-6">
                        <Calendar size={18} />
                        <time>
                            {new Date(article.created_at).toLocaleDateString('pt-BR', {
                                day: 'numeric', month: 'long', year: 'numeric'
                            })}
                        </time>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-gray-100 leading-tight">
                        {article.title}
                    </h1>
                </header>

                <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 prose-img:rounded-2xl prose-img:shadow-lg prose-a:text-primary hover:prose-a:text-primary-dark prose-headings:font-display prose-headings:font-bold">
                    {parse(cleanHTML)}
                </div>
            </article>
        </div>
    );
};

export default ArticleView;
