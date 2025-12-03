import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-3xl font-serif font-bold text-primary">
              Kamaleón
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-primary transition-colors  font-semibold"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors  font-semibold"
            >
              Acerca de
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors  font-semibold"
            >
              Contacto
            </button>
            <a
              href="https://wa.me/573023458015"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-elegant"
            >
              Reservar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-primary transition-colors  font-semibold text-left"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors  font-semibold text-left"
            >
              Acerca de
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors  font-semibold text-left"
            >
              Contacto
            </button>
            <a
              href="https://wa.me/573023458015"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-elegant text-center"
            >
              Reservar
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
