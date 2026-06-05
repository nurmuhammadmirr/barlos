import { BookOpen, Award, Users, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 bg-[#FBFBFA] text-zinc-800 relative overflow-hidden">
      
      {/* Благородные мягкие свечения (эффект легкого шелка/матового золота на фоне) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-200/20 via-yellow-100/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8 mb-24">
          
          {/* Иконка книги в утонченном обрамлении цвета шампань */}
          <div className="inline-flex items-center gap-3 mb-2">
            <div className="w-20 h-20 bg-gradient-to-b from-amber-300/30 to-transparent p-[1px] rounded-full">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center border border-amber-200/30 shadow-[0_8px_30px_rgba(245,158,11,0.06)]">
                <BookOpen className="w-9 h-9 text-amber-600/80" strokeWidth={1.2} />
              </div>
            </div>
          </div>

          {/* Заголовок с легким благородным напылением */}
          <h1 className="text-5xl md:text-7xl font-light tracking-tight max-w-4xl mx-auto text-zinc-900 leading-[1.15]">
            Полиграфия для <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-amber-600 via-amber-700 to-stone-800 bg-clip-text text-transparent font-normal">
              образования и бизнеса
            </span>
          </h1>

          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-light">
            Современная типография с полным циклом услуг — от дизайна до финальной обработки.
            Работаем со школами, университетами и ведущими компаниями.
          </p>

          {/* Кнопки в аристократичном стиле */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
            <a
              href="#contact"
              className="w-full sm:w-auto px-9 py-3.5 bg-[#1C1B19] text-white text-sm font-medium tracking-wider uppercase hover:bg-amber-700 transition-all duration-300 rounded-none shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-center"
            >
              Получить консультацию
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-9 py-3.5 border border-stone-300 text-stone-700 text-sm font-medium tracking-wider uppercase hover:bg-stone-50 hover:border-stone-400 transition-all duration-300 rounded-none text-center"
            >
              Наши проекты
            </a>
          </div>
        </div>

        {/* Минималистичные светлые карточки с тонкой огранкой */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Качество */}
          <div className="group text-center space-y-4 p-8 bg-white border border-stone-200/60 rounded-none hover:border-amber-600/30 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.02)] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-amber-600/40 group-hover:h-full transition-all duration-500" />
            <Award className="w-8 h-8 mx-auto text-amber-600/70 group-hover:text-amber-600 transition-colors duration-300" strokeWidth={1.2} />
            <h3 className="text-base font-medium text-zinc-900 tracking-wide uppercase text-xs">Качество</h3>
            <p className="text-stone-500 text-sm font-light leading-relaxed">Современное оборудование и материалы премиум-класса</p>
          </div>

          {/* Скорость */}
          <div className="group text-center space-y-4 p-8 bg-white border border-stone-200/60 rounded-none hover:border-amber-600/30 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.02)] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-amber-600/40 group-hover:h-full transition-all duration-500" />
            <Zap className="w-8 h-8 mx-auto text-amber-600/70 group-hover:text-amber-600 transition-colors duration-300" strokeWidth={1.2} />
            <h3 className="text-base font-medium text-zinc-900 tracking-wide uppercase text-xs">Скорость</h3>
            <p className="text-stone-500 text-sm font-light leading-relaxed">Оперативное выполнение и четкое соблюдение дедлайнов</p>
          </div>

          {/* Опыт */}
          <div className="group text-center space-y-4 p-8 bg-white border border-stone-200/60 rounded-none hover:border-amber-600/30 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.02)] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-amber-600/40 group-hover:h-full transition-all duration-500" />
            <Users className="w-8 h-8 mx-auto text-amber-600/70 group-hover:text-amber-600 transition-colors duration-300" strokeWidth={1.2} />
            <h3 className="text-base font-medium text-zinc-900 tracking-wide uppercase text-xs">Опыт</h3>
            <p className="text-stone-500 text-sm font-light leading-relaxed">Доверие более 50 крупных постоянных партнёров</p>
          </div>

        </div>
      </div>
    </section>
  );
}
