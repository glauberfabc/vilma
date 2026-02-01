
import React from 'react';

const EXPERTISE_DATA = [
  {
    icon: 'psychology',
    title: 'Ansiedade & Estresse',
    description: 'Navegando pelas complexidades do estresse crônico e da preocupação persistente através da atenção plena e estratégias cognitivas.',
  },
  {
    icon: 'favorite_border',
    title: 'Relacionamentos',
    description: 'Cultivando conexões mais profundas e resolvendo conflitos através de comunicação eficaz e estabelecimento de limites.',
  },
  {
    icon: 'self_improvement',
    title: 'Autoestima',
    description: 'Reconstruindo o amor-próprio e a confiança interior desafiando o diálogo interno negativo e abraçando o seu verdadeiro eu.',
  },
  {
    icon: 'cleaning_services',
    title: 'Limpeza Energética',
    description: 'Remoção de cargas e interferências negativas que geram cansaço e estagnação.',
  },
  {
    icon: 'tune',
    title: 'Alinhamento Quântico',
    description: 'Harmonização dos seus centros de energia para maior vitalidade e foco.',
  },
  {
    icon: 'lock_open',
    title: 'Desbloqueio de Caminhos',
    description: 'Identificação técnica de onde a energia está parada, seja no setor financeiro, amoroso ou de saúde.',
  },
];

const Expertise: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="expertise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">Especializações</h2>
          <h3 className="text-4xl md:text-5xl font-display mb-6">O que você encontrará no meu atendimento</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Uma abordagem completa para o seu desenvolvimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EXPERTISE_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-primary/40 transition-all group hover:-translate-y-2 duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-icons-outlined text-3xl">{item.icon}</span>
              </div>
              <h4 className="text-xl font-display font-bold mb-4">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Visão Sistêmica", desc: "Compreensão profunda dos padrões familiares.", icon: "group_work" },
            { title: "Ajuste Energético", desc: "Limpeza e harmonização com a Mesa Radiônica Quântica.", icon: "tune" },
            { title: "Suporte Vibracional", desc: "Radiestesia para identificação de bloqueios ocultos.", icon: "wifi_tethering" },
            { title: "Acolhimento Emocional", desc: "Indicação de Florais de Bach para equilíbrio diário.", icon: "spa" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <span className="material-icons-outlined text-4xl text-primary mb-3">{item.icon}</span>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
