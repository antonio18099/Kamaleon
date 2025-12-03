import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary  font-bold text-sm tracking-widest uppercase">
            Contacto
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">
            Visítanos
          </h3>
          <div className="divider-gold w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg mb-2">Ubicación</h4>
                <p className="text-foreground/80">
                  Sede Techo - Carrera 78b No. 1-68<br />
                  Bogotá, Colombia
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg mb-2">Teléfono</h4>
                <p className="text-foreground/80">
                  <a href="tel:+573023458015" className="hover:text-primary transition-colors">
                    +57 302 345 8015
                  </a>
                  <br />
                  <a href="tel:+573208526636" className="hover:text-primary transition-colors">
                    +57 320 852 6636
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg mb-2">Horarios</h4>
                <p className="text-foreground/80">
                  Lunes a Domingo<br />
                  12:00 PM - 11:00 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg mb-2">Redes Sociales</h4>
                <p className="text-foreground/80">
                  <a
                    href="https://instagram.com/kamaleon.rb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @kamaleon.rb
                  </a>
                  <br />
                  <a
                    href="https://facebook.com/Kamaleon-restaurante-bar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Kamaleon restaurante bar
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-sm p-8 border border-primary/20 flex flex-col justify-center">
            <h4 className="text-2xl font-serif font-bold mb-4">
              ¿Listo para una experiencia culinaria?
            </h4>
            <p className="text-foreground/80 mb-6">
              Reserva tu mesa ahora y disfruta de nuestra selección premium de carnes, tapas y bebidas artesanales.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/573023458015"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-elegant block text-center"
              >
                Reservar por WhatsApp
              </a>
              <a
                href="tel:+573023458015"
                className="px-8 py-3 bg-secondary text-foreground  font-semibold rounded-sm hover:bg-secondary/80 transition-all duration-300 text-center block"
              >
                Llamar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
