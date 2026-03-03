import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { supabase } from '../../lib/supabase';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Save, ArrowLeft, Image as ImageIcon } from 'lucide-react';

const ArticleEditor: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const isEditing = id !== 'novo';
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [coverImage, setCoverImage] = useState<string | null>(null);
    const [published, setPublished] = useState(false);
    const [loading, setLoading] = useState(false);

    const quillRef = useRef<ReactQuill>(null);

    useEffect(() => {
        if (isEditing) {
            loadArticle();
        }
    }, [id]);

    const loadArticle = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('articles')
            .select('*')
            .eq('id', id)
            .single();

        if (error) {
            toast.error('Erro ao carregar artigo: ' + error.message);
            navigate('/admin');
        } else if (data) {
            setTitle(data.title);
            setContent(data.content);
            setCoverImage(data.cover_image_url);
            setPublished(data.published);
        }
        setLoading(false);
    };

    const handleImageUpload = async (file: File) => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
        const filePath = `public/${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('article-images')
            .upload(filePath, file);

        if (uploadError) {
            toast.error('Erro ao fazer upload da imagem');
            throw uploadError;
        }

        const { data } = supabase.storage
            .from('article-images')
            .getPublicUrl(filePath);

        return data.publicUrl;
    };

    const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        try {
            toast.loading('Fazendo upload da capa...', { id: 'cover-upload' });
            const url = await handleImageUpload(e.target.files[0]);
            setCoverImage(url);
            toast.success('Upload concluído!', { id: 'cover-upload' });
        } catch (error) {
            toast.error('Falha no upload da capa.', { id: 'cover-upload' });
        }
    };

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            if (input.files && input.files[0]) {
                const file = input.files[0];
                try {
                    toast.loading('Fazendo upload...', { id: 'image-upload' });
                    const url = await handleImageUpload(file);

                    const quill = quillRef.current?.getEditor();
                    if (quill) {
                        const range = quill.getSelection(true);
                        quill.insertEmbed(range.index, 'image', url);
                    }
                    toast.success('Imagem inserida!', { id: 'image-upload' });
                } catch (error) {
                    toast.error('Erro ao inserir imagem.', { id: 'image-upload' });
                }
            }
        };
    };

    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image'],
                ['clean']
            ],
            handlers: {
                image: imageHandler
            }
        }
    }), []);

    const handleSave = async () => {
        if (!title.trim() || !content.trim()) {
            toast.error('Título e conteúdo são obrigatórios.');
            return;
        }

        setLoading(true);
        const articleData = {
            title,
            content,
            cover_image_url: coverImage,
            published
        };

        let result;
        if (isEditing) {
            result = await supabase.from('articles').update(articleData).eq('id', id);
        } else {
            result = await supabase.from('articles').insert([articleData]);
        }

        if (result.error) {
            toast.error('Erro ao salvar artigo: ' + result.error.message);
        } else {
            toast.success('Artigo salvo com sucesso!');
            navigate('/admin');
        }
        setLoading(false);
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/admin')}
                        className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-2xl font-display font-bold text-gray-800 dark:text-gray-100">
                        {isEditing ? 'Editar Artigo' : 'Novo Artigo'}
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer select-none text-gray-600 dark:text-gray-300">
                        <input
                            type="checkbox"
                            checked={published}
                            onChange={(e) => setPublished(e.target.checked)}
                            className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                        />
                        <span>Público</span>
                    </label>
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                    >
                        <Save size={18} />
                        <span>{loading ? 'Salvando...' : 'Salvar'}</span>
                    </button>
                </div>
            </div>

            <div className="p-8 max-w-4xl mx-auto space-y-8">
                {/* Imagem de Capa */}
                <div>
                    <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Imagem de Capa (Opcional)</span>
                    {coverImage ? (
                        <div className="relative rounded-2xl overflow-hidden shadow-sm group">
                            <img src={coverImage} alt="Capa" className="w-full h-[300px] object-cover" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <label className="cursor-pointer bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                                    Trocar Imagem
                                    <input type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
                                </label>
                                <button
                                    onClick={() => setCoverImage(null)}
                                    className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
                                >
                                    Remover
                                </button>
                            </div>
                        </div>
                    ) : (
                        <label className="flex flex-col items-center justify-center w-full h-[200px] border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-gray-500 dark:text-gray-400">
                            <ImageIcon size={32} className="mb-2 opacity-50" />
                            <span>Clique para fazer upload da capa</span>
                            <input type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
                        </label>
                    )}
                </div>

                {/* Título */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Título do Artigo</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Ex: A Influência da Física Quântica"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-lg font-medium"
                    />
                </div>

                {/* Editor Quill */}
                <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-600">
                    <ReactQuill
                        ref={quillRef as any}
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        modules={modules}
                        className="h-[500px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default ArticleEditor;
