export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/1001068379.jpg)',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-lg">
            Kamaleón
          </h1>
          <p className="text-xl md:text-2xl text-white/90  drop-shadow-md">
            Experiencia Gastronómica Transformadora
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto drop-shadow-md">
            Carnes premium, tapas artesanales y cócteles únicos en un ambiente de lujo
          </p>

          <div className="pt-8">
            <button
              onClick={scrollToMenu}
              className="px-10 py-4 bg-primary text-primary-foreground  font-bold text-lg rounded-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 drop-shadow-lg"
            >
              Explorar Menú
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white/60 text-sm ">Desplázate</div>
          <div className="text-white/60 text-2xl">↓</div>
        </div>
      </div>
    </section>
  );
}
