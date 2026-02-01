
import React, { useState } from 'react';

const TESTIMONIALS = [
  {
    quote: "Trabalhar com a Vilma tem sido uma experiência transformadora. O calor humano e a visão profissional dela me ajudaram a navegar por um dos períodos mais difíceis da minha vida com graça e uma nova força.",
    author: "Sarah M.",
    duration: "Cliente há 2 anos",
  },
  {
    quote: "Ela cria um ambiente onde você se sente verdadeiramente ouvido e seguro. As ferramentas que ela compartilhou para lidar com a ansiedade mudaram minha vida diária completamente.",
    author: "James L.",
    duration: "Cliente há 1 ano",
  },
  {
    quote: "Vilma nos ajudou a encontrar o caminho de volta um para o outro. A abordagem dela para terapia de casal é direta e incrivelmente compassiva.",
    author: "Elena e Mark",
    duration: "Terapia de Casal",
  },
];

const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="material-icons-outlined text-6xl opacity-40 mb-10">format_quote</span>

        <div className="relative h-64 md:h-48 flex items-center justify-center">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${activeIdx === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
            >
              <blockquote className="text-2xl md:text-3xl font-display italic leading-snug mb-8">
                "{t.quote}"
              </blockquote>
              <cite className="block not-italic">
                <span className="font-bold text-lg">{t.author}</span>
                <span className="block opacity-70 text-sm mt-1">{t.duration}</span>
              </cite>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIdx === idx ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
