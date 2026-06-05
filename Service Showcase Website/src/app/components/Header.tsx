import { BookOpen } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/50 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <BookOpen className="w-6 h-6" strokeWidth={1.5} />
          <span className="text-xl">𝘉𝘈𝘙𝘓𝘖𝘚 </span>
        </a>

        <div className="flex items-center gap-8">
          <a href="#services" className="opacity-70 hover:opacity-100 transition-opacity">
            Услуги
          </a>
          <a href="#portfolio" className="opacity-70 hover:opacity-100 transition-opacity">
            Портфолио
          </a>
          <a href="#about" className="opacity-70 hover:opacity-100 transition-opacity">
            О нас
          </a>
          <a
            href="#contact"
            className="px-5 py-2 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Связаться
          </a>
        </div>
      </nav>
    </header>
  );
}
