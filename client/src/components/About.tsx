export default function About() {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-sm overflow-hidden shadow-xl">
            <img
              src="/images/1001068355.jpg"
              alt="Kamaleón Restaurante"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-primary  font-bold text-sm tracking-widest uppercase mb-4">
                Acerca de Nosotros
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Transformación Gastronómica
              </h3>
              <div className="divider-gold w-24 mb-6" />
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              En Kamaleón, creemos que la comida es transformación. Cada plato es una experiencia que evoluciona en tu paladar, 
              combinando técnicas culinarias modernas con ingredientes de la más alta calidad.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Ubicados en el corazón de Techo, nuestro restaurante es el lugar perfecto para eventos empresariales, 
              celebraciones familiares y momentos especiales. Contamos con un ambiente sofisticado y un equipo dedicado 
              a hacer de cada visita una experiencia inolvidable.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-serif font-bold text-2xl text-primary mb-2">100+</h4>
                <p className="text-foreground/70">Platos en nuestro menú</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-serif font-bold text-2xl text-primary mb-2">5★</h4>
                <p className="text-foreground/70">Calidad garantizada</p>
              </div>
            </div>

            <a
              href="https://wa.me/573023458015"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-elegant inline-block mt-6"
            >
              Hacer una Reserva
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
