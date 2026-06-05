import { ImageWithFallback } from './ImageWithFallback';

const services = [
  {
    title: 'Печать книг',
    description: 'Тиражирование учебных материалов для школ, учебных центров и университетов любого объёма',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Брошюры и каталоги',
    description: 'Изготовление презентационных материалов, каталогов продукции и корпоративных брошюр',
    image: 'https://images.unsplash.com/photo-1656379817721-774050a70dd0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Листовки и флаеры',
    description: 'Рекламные материалы для маркетинговых кампаний и промо-акций',
    image: 'https://images.unsplash.com/photo-1695634621644-a1abcdf60bc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Дизайн и вёрстка',
    description: 'Разработка уникального дизайна и профессиональная допечатная подготовка',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
  },
  {
    title: 'Тиражная печать',
    description: 'Высококачественная офсетная и цифровая печать тиражей от 1 до 100 000 экземпляров',
    image: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
  },
  {
    title: 'Визитки',
    description: 'Изготовление персональных и корпоративных визитных карточек премиального качества',
    image: 'https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 opacity-90">Наши услуги</h2>
          <p className="opacity-60 max-w-2xl mx-auto text-lg">
            Полный спектр полиграфических услуг для образовательных учреждений и бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group relative overflow-hidden border border-border/50
                  hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out"
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/77 to-background/70" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 min-h-[320px] flex flex-col justify-end">
                  <h3 className="mb-3 opacity-95 group-hover:opacity-100 transition-opacity text-2xl">
                    {service.title}
                  </h3>
                  <p className="opacity-70 leading-relaxed text-sm group-hover:opacity-90 transition-opacity">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
