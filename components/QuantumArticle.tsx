import React from 'react';
import quantumImage from '../images/WhatsApp Image 2026-02-25 at 20.13.19.jpeg';

const QuantumArticle: React.FC = () => {
    return (
        <section className="py-24 bg-primary-light/10 dark:bg-gray-950 text-gray-800 dark:text-gray-100">
            <div className="max-w-5xl mx-auto px-6">
                <div className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl overflow-hidden border border-primary/10 dark:border-gray-800 transition-all hover:shadow-primary/20">
                    {/* Imagem em Destaque primeiro */}
                    <div className="w-full relative h-[400px] md:h-[500px]">
                        <img
                            src={quantumImage}
                            alt="Física Quântica e Mesa Quântica"
                            className="w-full h-full object-cover"
                        />
                        {/* overlay na imagem para o título ficar legível */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent pointer-events-none"></div>

                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-primary-dark uppercase bg-amber-100/90 backdrop-blur-sm rounded-full shadow-sm">
                                Artigo
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight drop-shadow-lg">
                                A Influência da Física Quântica
                            </h2>
                        </div>
                    </div>

                    {/* Conteúdo do Artigo */}
                    <div className="p-8 md:p-12 lg:p-16">
                        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6 text-justify leading-relaxed">
                            <p className="text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed font-display">
                                O que precisamos aprender sobre física quântica, e que não consta em nenhuma literatura, é que, quando reunimos toda a nossa capacidade mental, emocional e sentimental de uma só vez, alimentamos destruição ou felicidade.
                            </p>

                            <div className="w-24 h-1 bg-primary/40 rounded-full my-8"></div>

                            <p>
                                Reunimos forças que muitas vezes nunca percebemos, mas que nos mantêm e nos dão forma, de modo que mudamos nosso padrão vibracional. Muitas vezes, produzimos nosso próprio “quantum”, que significa reunião e ligação. Resumindo: mente, emoção e sentimento, quando reunidos, formam o quantum que muda nossa frequência vibracional.
                            </p>
                            <p>
                                Queremos muito alguma coisa, mas vibramos errado. Promovemos um quantum ruim e desejamos as coisas de forma desalinhada, pois nossa mente, emoção e sentimentos, todos misturados e somatizados, geram um quantum negativo.
                            </p>
                            <p>
                                Somatizamos pensamentos ruins e, dessa forma, também geramos emoções ruins. Somando tudo, criamos um quantum ruim.
                            </p>

                            <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5 dark:bg-primary/10 rounded-r-2xl italic text-xl text-primary-dark dark:text-primary-light font-display">
                                No entanto, podemos modificar todo quantum negativo por um quantum de boa qualidade. Para isso, utilizamos a mesa quântica, que mudaria todo o quantum, promovendo, por meio de sintonias, o que chamamos de ligação quântica com mestres que já estiveram na Terra e possuem uma inteligência que ainda não desenvolvemos plenamente. É por isso que chamamos de física quântica.
                            </blockquote>

                            <p>
                                Como seres humanos, muitas vezes ainda não temos a capacidade de transformar sentimentos promovidos por situações ruins. Produzimos quantuns negativos e nem percebemos. Só notamos quando uma dor nos provoca sofrimento. A raiz de muitas dores está em nós mesmos; somos nós que plantamos.
                            </p>
                            <p className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
                                Sempre que algo ruim acontece, acreditamos que criamos um quantum correspondente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuantumArticle;
