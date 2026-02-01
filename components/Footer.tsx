
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="text-2xl font-display font-bold text-primary italic mb-6">Vilma Pires</div>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-8 leading-relaxed">
              Dedicada a ajudá-lo a encontrar equilíbrio, paz e resiliência em um mundo acelerado. Terapia profissional licenciada para indivíduos e casais.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-6 tracking-wide">Links Rápidos</h5>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400">
              <li><a className="hover:text-primary transition-colors" href="#">Agendar Consulta</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Recursos</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Perguntas Frequentes</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contato</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 tracking-wide">Contato</h5>
            <ul className="space-y-6 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <span className="material-icons-outlined text-primary mt-1">email</span>
                <span className="hover:text-primary transition-colors cursor-pointer">{CONTACT_INFO.EMAIL}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons-outlined text-primary mt-1">location_on</span>
                <span className="whitespace-pre-line">{CONTACT_INFO.ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Vilma Pires Terapia. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a className="hover:text-primary transition-colors" href="#">Política de Privacidade</a>
            <a className="hover:text-primary transition-colors" href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
