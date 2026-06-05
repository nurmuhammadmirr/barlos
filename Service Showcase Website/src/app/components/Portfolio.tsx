const projects = [
  {
    id: 1,
    title: 'Книги по корейскому языку',
    client: 'NextGen school',
    description: 'Печать учебных пособий премиум-качества со сложной графикой Hangul и плотными листами для заметок.'
  },
  {
    id: 2,
    title: 'Учебники по английскому',
    client: 'Osiyo bilim LC',
    description: 'Интерактивные курсы и рабочие тетради на пружине с яркой полноцветной обложкой.'
  },
  {
    id: 3,
    title: 'Книги по арабскому языку',
    client: 'Said academy',
    description: 'Издания со сложной арабской каллиграфией, идеальной четкостью печати и золотым тиснением.'
  },
  {
    id: 4,
    title: 'Книги по точным наукам',
    client: 'Zenith education',
    description: 'Профессиональная верстка и печать учебников с обилием графиков, формул и таблиц.'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-12 px-4 bg-[#FBFBFA] text-zinc-800 relative border-t border-stone-200/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Компактный заголовок */}
        <div className="text-center mb-8 space-y-1">
          <span className="text-amber-700 text-[10px] font-semibold uppercase tracking-widest block">Портфолио</span>
          <h2 className="text-2xl font-light text-zinc-900 tracking-tight">Наши проекты</h2>
          <div className="w-6 h-[1px] bg-amber-600/30 mx-auto my-1"></div>
        </div>

        {/* Компактная вертикальная сетка 4 в ряд на ПК, 2 в ряд на мобилках */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-stone-100 border border-stone-200/40 transition-all duration-500 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
            >
              {/* Фотография из твоей папки: photo1.png, photo2.png и т.д. */}
              <img 
                src={`/portfolio/photo${project.id}.png`} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103" 
              />

              {/* Номер кейса */}
              <span className="absolute top-2 left-3 text-[8px] font-mono text-zinc-500 bg-white/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
                0{project.id}
              </span>

              {/* Нижняя матовая плашка с текстом */}
              <div className="absolute bottom-0 left-0 w-full p-3 pt-8 bg-gradient-to-t from-white/95 via-white/80 to-transparent backdrop-blur-[4px]">
                
                <div className="space-y-0.5">
                  {/* Имя клиента */}
                  <div className="text-[8px] font-bold text-amber-700/80 uppercase tracking-widest">
                    {project.client}
                  </div>
                  
                  {/* Название проекта */}
                  <div className="flex items-baseline justify-between gap-1">
                    <h3 className="text-xs font-normal text-zinc-900 tracking-tight line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="text-stone-400 group-hover:text-amber-700 transition-colors text-[10px] transform group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </div>

                  {/* ИСПРАВЛЕНО ДЛЯ МОБИЛОК: */}
                  {/* На мобилках (pointer: coarse) текст ВСЕГДА виден (opacity-100, max-h-16). */}
                  {/* На компьютерах (hover:...) он прячется и вылезает только при наведении. */}
                  <p className="text-stone-500 text-[9px] sm:text-[10px] font-light leading-tight pt-0.5 
                    opacity-100 max-h-16 
                    pointer-coarse:opacity-100 pointer-coarse:max-h-16
                    hover-none:opacity-100 hover-none:max-h-16
                    md:opacity-0 md:max-h-0 md:overflow-hidden md:transition-all md:duration-500 
                    md:group-hover:opacity-100 md:group-hover:max-h-12"
                  >
                    {project.description}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Аристократичная подпись в самом низу */}
        <div className="text-center mt-8">
          <p className="text-stone-400 text-xs font-light italic tracking-widest">
            — и многое другое...
          </p>
        </div>

      </div>
    </section>
  );
}
