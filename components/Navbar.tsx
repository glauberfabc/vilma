
import React from 'react';

interface NavbarProps {
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode }) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-display font-bold text-primary italic cursor-pointer">
          Vilma Pires
        </div>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <a className="hover:text-primary transition-colors" href="#">Início</a>
          <a className="hover:text-primary transition-colors" href="#about">Sobre</a>
          <a className="hover:text-primary transition-colors" href="#expertise">Especializações</a>
          <a className="hover:text-primary transition-colors" href="#philosophy">Filosofia</a>
          <a
            className="bg-primary text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            href="#"
          >
            Agendar Consulta
          </a>
          <button
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={toggleDarkMode}
          >
            <span className="material-icons-outlined text-xl">dark_mode</span>
          </button>
        </div>

        {/* Mobile Toggle Only */}
        <div className="md:hidden flex items-center gap-4">
          <button
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={toggleDarkMode}
          >
            <span className="material-icons-outlined text-xl">dark_mode</span>
          </button>
          <span className="material-icons-outlined text-2xl">menu</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
