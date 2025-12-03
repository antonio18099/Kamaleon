import { useState } from 'react';

const menuCategories = [
  {
    id: 'tapas',
    name: 'Tapas',
    description: 'Pequeños bocados para compartir',
    items: [
      { name: 'Patatas con queso fundido y tocineta', price: '$19.500' },
      { name: 'Patatas Bravas', price: '$19.000' },
      { name: 'Queso a la parrilla', price: '$16.500' },
      { name: 'Chicharrón carnudo', price: '$18.900' },
      { name: 'Gambas al ajillo', price: '$35.700' },
      { name: 'Ceviche de longaniza', price: '$21.000' },
    ],
  },
  {
    id: 'carnes',
    name: 'Carnes Premium',
    description: 'Selección de carnes de la más alta calidad',
    items: [
      { name: 'Ojo de bife (350gr)', price: '$49.000' },
      { name: 'New York steak (400gr)', price: '$61.000' },
      { name: 'Baby beef (350gr)', price: '$73.000' },
      { name: 'Tomahawk de res flameado (650gr)', price: '$94.900' },
      { name: 'Pechuga a la plancha (350gr)', price: '$35.200' },
      { name: 'Parrillada de mariscos', price: '$89.000' },
    ],
  },
  {
    id: 'hamburguesas',
    name: 'Hamburguesas',
    description: '100% carne de res, todas con papas',
    items: [
      { name: 'Chicharronica', price: '$29.900' },
      { name: 'House Burger', price: '$29.900' },
      { name: 'Bacon cheese', price: '$27.500' },
      { name: 'Burger hoops', price: '$28.900' },
      { name: 'Mini burgers', price: '$25.000' },
      { name: 'La Dolce vita', price: '$34.400' },
    ],
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    description: 'Cócteles, vinos y bebidas artesanales',
    items: [
      { name: 'Cerveza Kamaleon', price: '$19.900' },
      { name: 'Jarra de sangría', price: '$79.900' },
      { name: 'Vino caliente', price: '$18.900' },
      { name: 'Limonada de coco', price: '$10.200' },
      { name: 'Limonada de mango', price: '$9.600' },
      { name: 'Sodas de la casa', price: '$13.900' },
    ],
  },
  {
    id: 'dulces',
    name: 'Dulces',
    description: 'Postres artesanales y crepes dulces',
    items: [
      { name: 'Crepe de Nutella, fresa y banano', price: '$19.500' },
      { name: 'Creme brule', price: '$14.900' },
      { name: 'Torta Milkyway', price: '$9.900' },
      { name: 'Reina roja', price: '$12.500' },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('tapas');

  const currentCategory = menuCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary  font-bold text-sm tracking-widest uppercase">
            Nuestro Menú
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">
            Experiencia Culinaria
          </h3>
          <div className="divider-gold w-24 mx-auto" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Descubre nuestra selección cuidada de platos que transforman ingredientes premium en experiencias memorables
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3  font-semibold rounded-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {currentCategory && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h4 className="text-3xl font-serif font-bold mb-2">
                {currentCategory.name}
              </h4>
              <p className="text-lg text-foreground/70">
                {currentCategory.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentCategory.items.map((item, index) => (
                <div
                  key={index}
                  className="pb-6 border-b border-border hover:border-primary transition-colors duration-300 group"
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h5 className="text-lg font-serif font-semibold group-hover:text-primary transition-colors">
                      {item.name}
                    </h5>
                    <span className="text-primary font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
