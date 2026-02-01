
import React from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-5xl md:text-7xl font-display leading-[1.1] mb-6 animate-fade-in">
            Equilíbrio Sistêmico e Energético: Recupere sua força através da visão familiar e da Mesa Radiônica Quântica.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 max-w-lg leading-relaxed">
            Oferecendo um espaço seguro e empático para que você possa explorar seu eu interior, curar feridas do passado e construir um futuro resiliente.
          </p>
          <p className="text-primary font-medium italic mb-10 max-w-lg">
            "Dê o primeiro passo para uma vida mais leve com o suporte da visão sistêmica, da física quântica e do equilíbrio natural dos florais."
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              className="bg-primary text-white px-8 py-4 rounded-xl text-center font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
              href="#"
            >
              Agendar Consulta <span className="material-icons-outlined">calendar_today</span>
            </a>
            <a
              className="border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-xl text-center font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              href="#about"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative group">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3 scale-105 -z-10 transition-transform group-hover:rotate-1"></div>
          <img
            alt="Portrait of therapist Vilma Pires"
            className="rounded-3xl w-full aspect-[4/5] object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
            src={IMAGES.HERO_PORTRAIT}
          />
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl hidden lg:block border border-slate-100 dark:border-slate-700">
            <p className="text-primary font-display italic text-2xl">"A cura começa ao ser ouvido."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
