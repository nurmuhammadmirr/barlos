import { useState, useEffect } from 'react';

// Внутри твоего компонента (например, AdminDashboard):
const [messages, setMessages] = useState([]);

// Функция для загрузки данных
const fetchMessages = async () => {
  try {
    // В админке в .env тоже укажи VITE_BACKEND_URL = "http://localhost:4000"
    const backendUrl = import.meta.env.VITE_BACKEND_URL; 
    
    // Стучимся на наш новый GET-роут
    const response = await fetch(`${backendUrl}/api/user/all-forms`);
    const data = await response.json();

    if (data.success) {
      setMessages(data.data); // Записываем массив заявок в стейт
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  }
};

// Вызываем загрузку при старте страницы
useEffect(() => {
  fetchMessages();
}, []);
