import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Add your backend integration here (MongoDB, Supabase, etc.)
        // 1. Сначала собираем полный URL, используя вашу переменную окружения из Vite
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      // 2. Делаем сам запрос к бэкенду
      const response = await fetch(`${backendUrl}/api/user/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // 3. Проверяем, что ответил бэкенд. Если ошибка — прерываем выполнение
      if (!data.success) {
        alert(`Ошибка: ${data.message}`);
        return; 
      }


    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', company: '', phone: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 opacity-90">Свяжитесь с нами</h2>
          <p className="opacity-60">
            Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-background border border-border p-12 text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 mx-auto text-green-600 opacity-80" strokeWidth={1.5} />
            <h3 className="opacity-90">Спасибо за обращение!</h3>
            <p className="opacity-60">Мы свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-background border border-border p-10 space-y-6">
            

            <div className="space-y-2">
              <label htmlFor="company" className="block opacity-70">
                Название компании *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="ООО «Ваша компания»"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block opacity-70">
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="+998-71-555-55-55"
              />
            </div>


            <div className="space-y-2">
              <label htmlFor="name" className="block opacity-70">
                Комментарий *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Срочно нужны книги в большом объеме!"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 px-6 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-8"
            >
              <Send className="w-5 h-5" strokeWidth={1.5} />
              Отправить заявку
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
