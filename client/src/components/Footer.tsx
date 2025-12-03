export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-bold mb-2">Kamaleón</h3>
            <p className="text-background/80">
              Experiencia gastronómica transformadora en el corazón de Techo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#menu" className="hover:text-background transition-colors">
                  Menú
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="tel:+573023458015" className="hover:text-background transition-colors">
                  +57 302 345 8015
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573023458015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kamaleon.rb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/70 text-sm">
            © {currentYear} Kamaleón Restaurante Bar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
