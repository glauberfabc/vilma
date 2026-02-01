
import React from 'react';
import { IMAGES } from '../constants';

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 px-6 overflow-hidden" id="philosophy">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 relative">
          <img
            alt="Retrato de terapeuta com olhar reflexivo"
            className="rounded-3xl w-full max-w-md mx-auto shadow-xl transition-all duration-700 hover:grayscale-[20%]"
            src={IMAGES.PHILOSOPHY_PORTRAIT}
          />
          <div className="absolute top-10 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
        </div>

        <div className="flex-1">
          <h2 className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">Minha Filosofia</h2>
          <h3 className="text-4xl md:text-5xl font-display mb-8 leading-tight">Uma abordagem holística para o bem-estar mental</h3>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Acredito que cada indivíduo possui uma capacidade inata de crescimento e cura. Meu papel é fornecer o apoio e as ferramentas necessárias para que você redescubra essa força.
            </p>
            <p>
              Nosso trabalho juntos será colaborativo, fundamentado na empatia e adaptado à sua jornada única. Não olharemos apenas para os sintomas; olharemos para a pessoa como um todo — sua história, seu ambiente e suas aspirações.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-6">
            <div className="w-16 h-[1.5px] bg-primary/40"></div>
            <span className="font-display italic text-2xl text-slate-700 dark:text-slate-300">Vilma Pires</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
