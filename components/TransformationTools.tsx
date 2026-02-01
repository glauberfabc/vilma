
import React from 'react';

const TransformationTools: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900" id="tools">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">Terapia Integrativa</h2>
                    <h3 className="text-4xl md:text-5xl font-display mb-6">Ferramentas de Transformação</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Para complementar o olhar sistêmico e aprofundar o processo de cura, utilizo ferramentas que atuam na identificação e harmonização das energias sutis.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-primary/10 p-4 rounded-2xl mb-6">
                            <span className="material-icons-outlined text-4xl text-primary">sensors</span>
                        </div>
                        <h4 className="text-2xl font-display font-bold mb-4">Radiestesia</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Uma técnica milenar que permite mensurar e detectar desequilíbrios energéticos em pessoas ou ambientes, trazendo clareza sobre o que está bloqueando o fluxo da vida.
                        </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col items-start hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-primary/10 p-4 rounded-2xl mb-6">
                            <span className="material-icons-outlined text-4xl text-primary">all_inclusive</span>
                        </div>
                        <h4 className="text-2xl font-display font-bold mb-4">Mesa Radiônica Quântica</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Um instrumento de cura vibracional que atua na limpeza de padrões limitantes, harmonização de chakras e liberação de bloqueios que impedem o seu crescimento pessoal, profissional e afetivo.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransformationTools;
