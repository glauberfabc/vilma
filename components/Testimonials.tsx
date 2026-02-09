
import React, { useState } from 'react';
import eduardaImg from '../images/eduarda-vasques.jpg';
import solangeImg from '../images/solange-vasques.jpg';


const TESTIMONIALS = [

  {
    quote: "Durante muito tempo, carreguei marcas emocionais da infância que se manifestavam em inseguranças, medos e uma constante sensação de não ser suficiente. Por fora, eu seguia normalmente, mas por dentro vivia em estado de alerta, reagindo muitas vezes a dores antigas que nunca haviam sido acolhidas.\n\nO Reiki e os florais foram um ponto de virada no meu processo de cura. Eles não apagaram o meu passado, mas me ajudaram a compreendê-lo com mais amor e consciência. Aprendi a escutar minhas emoções, respeitar meus limites e me acolher com mais gentileza.\n\nHoje me sinto mais segura, leve e conectada comigo mesma. As inseguranças ainda existem, mas já não me dominam. A maior transformação aconteceu dentro de mim: reconectei-me com minha essência e aprendi que é possível transformar a dor em aprendizado e o passado em crescimento.",
    author: "Eduarda Vasques",
    duration: "Cliente",
    image: eduardaImg,
  },
  {
    quote: "Meu relato de tratamento com florais com a radiestesia.\n\nEstá sendo super positivo pra mim...me ajuda demais a me encontrar e cuidar das coisas internas que nem sabia que trazia a tanto tempo em minha vida e que atrapalhava minha evolução.\n\nJá me sinto mais tranquila e liberta e sei que posso melhorar ainda mais.\n\nEsta sendo uma experiência maravilhosa e me fazendo muito bem.\n\nFoi muito bom ter conhecido e aceitado o tratamento.\n\nVou seguir em frente pq sei que vou ser bem melhor a cada dia.\n🙏🏻",
    author: "Solange Vasques",
    duration: "Cliente",
    image: solangeImg,
  },
];

const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="material-icons-outlined text-6xl opacity-40 mb-10">format_quote</span>

        <div className="relative min-h-[300px] flex items-center justify-center">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 flex flex-col items-center justify-center w-full ${activeIdx === idx ? 'opacity-100 relative translate-x-0' : 'opacity-0 absolute top-0 left-0 translate-x-8 pointer-events-none'
                }`}
            >
              {t.image && (
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-white/20 shadow-lg"
                />
              )}
              <blockquote className="text-xl md:text-2xl font-display italic leading-relaxed mb-8 whitespace-pre-line">
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
