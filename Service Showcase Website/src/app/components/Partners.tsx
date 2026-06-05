const partners = [
  { id: 1, name: 'Государственный Университет' },
  { id: 2, name: 'Академия Наук' },
  { id: 3, name: 'Премиум Лицей' },
  { id: 4, name: 'Издательский Дом' },
  { id: 5, name: 'Бизнес Корпорация' },
  { id: 6, name: 'Техно Хаб' }
];

export function Partners() {
  return (
    <section id="partners" className="py-20 px-6 bg-[#FBFBFA] text-zinc-800 relative border-t border-stone-200/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Аристократичный компактный заголовок */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-amber-700 text-[10px] font-semibold uppercase tracking-widest block">Доверие</span>
          <h2 className="text-3xl font-light text-zinc-900 tracking-tight">Наши партнёры</h2>
          <div className="w-8 h-[1px] bg-amber-600/30 mx-auto my-2"></div>
          <p className="text-stone-500 max-w-2xl mx-auto text-sm font-light">
            Нам доверяют ведущие образовательные учреждения и компании
          </p>
        </div>

        {/* Бесшовная галерея логотипов с тонкими внутренними границами */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-stone-200/60 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="aspect-[3/2] flex items-center justify-center p-6 relative group transition-colors duration-500 hover:bg-stone-50/50
                border-b border-r border-stone-200/40 last:border-b-0 md:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(3)]:border-r lg:[&:nth-child(6)]:border-r-0"
            >
              {/* Мягкий золотистый индикатор при наведении в углу */}
              <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-amber-600/0 group-hover:bg-amber-600/40 transition-colors duration-500" />

              {/* Логотипы всегда выводятся в оригинальном цвете и с полной яркостью */}
              <img 
                src={`/partners/logo${partner.id}.png`} 
                alt={partner.name} 
                className="w-full h-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-105" 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
