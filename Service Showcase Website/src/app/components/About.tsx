import { CheckCircle2 } from 'lucide-react';

export function About() {
  const features = [
    'Современное европейское оборудование',
    'Более 10 лет на рынке полиграфических услуг',
    'Индивидуальный подход к каждому клиенту',
    'Контроль качества на всех этапах производства',
    'Гибкая система скидок для постоянных клиентов',
    'Быстрые сроки выполнения заказов'
  ];

  return (
    <section id="about" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl mb-6 opacity-90">О компании</h2>
            <p className="opacity-70 leading-relaxed mb-6 text-lg">
              𝘉𝘈𝘙𝘓𝘖𝘚 — современная типография, специализирующаяся на полном цикле
              полиграфических услуг для образовательных учреждений и бизнеса.
            </p>
            <p className="opacity-70 leading-relaxed mb-8 text-lg">
              Мы работаем со школами, учебными центрами, университетами и коммерческими
              организациями, предоставляя качественные услуги печати книг, брошюр,
              рекламных материалов и многого другого.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 opacity-60 flex-shrink-0" strokeWidth={1.5} />
                  <span className="opacity-70">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/5 border border-border/50 p-8 text-center space-y-2">
              <div className="text-4xl opacity-90">50+</div>
              <div className="opacity-60">Постоянных клиентов</div>
            </div>
            <div className="bg-primary/5 border border-border/50 p-8 text-center space-y-2">
              <div className="text-4xl opacity-90">1000+</div>
              <div className="opacity-60">Выполненных заказов</div>
            </div>
            <div className="bg-primary/5 border border-border/50 p-8 text-center space-y-2">
              <div className="text-4xl opacity-90">10+</div>
              <div className="opacity-60">Лет на рынке</div>
            </div>
            <div className="bg-primary/5 border border-border/50 p-8 text-center space-y-2">
              <div className="text-4xl opacity-90">24/7</div>
              <div className="opacity-60">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
