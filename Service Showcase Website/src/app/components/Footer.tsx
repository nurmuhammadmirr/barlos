import { BookOpen, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-8 h-8" strokeWidth={1.5} />
              <span className="text-xl">𝘉𝘈𝘙𝘓𝘖𝘚</span>
            </div>
            <p className="opacity-70">
              Профессиональные полиграфические услуги для образования и бизнеса
            </p>
          </div>

          <div>
            <h4 className="mb-4">Контакты</h4>
            <div className="space-y-3 opacity-70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                <span>+(998 90 ) 911 47 70</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                <span>info@barlos.uz</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" strokeWidth={1.5} />
                <span>проспект Амира Темура, 1, Ташкент</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Режим работы</h4>
            <div className="space-y-2 opacity-70">
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 15:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center opacity-60">
          <p>© 2026 BARLOS . Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
