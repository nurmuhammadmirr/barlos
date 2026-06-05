import { useState, useEffect } from 'react';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const backendUrl =
        import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';

      const response = await fetch(
        `${backendUrl}/api/user/all-forms`
      );

      const data = await response.json();

      if (data.success) {
        setMessages(Array.isArray(data.data) ? data.data : []);
      } else {
        alert(`Ошибка: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8 md:p-10">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white rounded-3xl border border-slate-200 px-8 py-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)]">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Панель администратора
            </h1>

            <p className="text-slate-500 mt-1">
              Управление входящими заявками
            </p>
          </div>

          <div className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-sm">
            Всего заявок: {messages.length}
          </div>
        </div>

        {loading ? (
  <div className="bg-white rounded-3xl border border-slate-200 p-24 text-center shadow-sm flex flex-col items-center justify-center gap-4">
    {/* Изящный анимированный круговой лоадер */}
    <div className="w-10 h-10 border-2 border-stone-200 border-t-amber-600 rounded-full animate-spin" />
    <p className="text-stone-400 text-sm font-light tracking-widest uppercase animate-pulse mt-2">
      Синхронизация с сервером...
    </p>
    <p className="text-stone-400/60 text-[10px] font-light italic max-w-xs">
      (подождите чуть-чуть!)
    </p>
  </div>
) : messages.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center shadow-sm">
            <p className="text-slate-500 text-lg">
              Заявок пока нет
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">

            <div className="overflow-x-auto">
              <table className="w-full">

                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-8 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Компания
                    </th>

                    <th className="px-8 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Телефон
                    </th>

                    <th className="px-8 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Комментарий
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {[...messages].reverse().map((item) => (
                    <tr
                      key={item._id}
                      className="hover:bg-slate-50 transition-all duration-200"
                    >
                      <td className="px-8 py-5">
                        <div className="font-semibold text-slate-900">
                          {item.company}
                        </div>
                      </td>

                      <td className="px-8 py-5">
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                          {item.phone}
                        </span>
                      </td>

                      <td
                        className="px-8 py-5 text-slate-500 max-w-md truncate"
                        title={item.name}
                      >
                        {item.name}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
