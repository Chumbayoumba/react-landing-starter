<div align="center">

# ⚡ React Landing Starter

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Готовый шаблон современного лендинга за 5 минут**

[🇷🇺 Русский](#) | [🇬🇧 English](#english)

[Live Demo](https://react-landing-starter.vercel.app) • [Документация](#-структура)

</div>

---

## ⚡ Быстрый старт

```bash
# Клонируйте репозиторий
git clone https://github.com/Chumbayoumba/react-landing-starter.git
cd react-landing-starter

# Установите зависимости
npm install

# Запустите dev-сервер
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) 🚀

---

## ✨ Особенности

- ⚡ **Vite** — мгновенная сборка и HMR
- 🎨 **Tailwind CSS** — utility-first стилизация
- 🚀 **Framer Motion** — плавные анимации
- 📱 **Responsive** — адаптивный дизайн
- 🌙 **Dark Mode** — тёмная тема из коробки
- 🔧 **TypeScript** — полная типизация
- 📦 **Zero config** — работает сразу

---

## 📁 Структура

```
src/
├── components/
│   ├── Hero.tsx          # Главный экран
│   ├── Features.tsx      # Преимущества
│   ├── Pricing.tsx       # Тарифы
│   ├── Testimonials.tsx  # Отзывы
│   ├── FAQ.tsx           # Вопросы-ответы
│   ├── Contact.tsx       # Контакты
│   └── Footer.tsx        # Подвал
├── App.tsx
├── index.css
└── main.tsx
```

---

## 🎨 Секции

| Секция | Описание |
|--------|----------|
| **Hero** | Заголовок, подзаголовок, CTA-кнопки |
| **Features** | Карточки преимуществ с иконками |
| **Pricing** | Таблица тарифов |
| **Testimonials** | Отзывы клиентов |
| **FAQ** | Аккордеон с вопросами |
| **Contact** | Форма обратной связи |
| **Footer** | Соцсети и копирайт |

---

## 🛠 Кастомизация

### Цвета

Измените цвета в `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#A855F7',    // Основной
      secondary: '#3B82F6',  // Дополнительный
      accent: '#10B981',     // Акцент
    }
  }
}
```

### Шрифты

```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  display: ['Syne', 'sans-serif'],
}
```

---

## 📦 Скрипты

```bash
npm run dev       # Запуск dev-сервера
npm run build     # Сборка для продакшена
npm run preview   # Превью сборки
npm run lint      # Проверка кода
```

---

## 🚀 Деплой

### Vercel (рекомендуется)

```bash
npm i -g vercel
vercel
```

### Docker

```bash
docker build -t landing .
docker run -p 3000:3000 landing
```

---

## 📝 Лицензия

MIT — используйте свободно!

---

<div align="center">

**Сделано с ❤️ [Egor Terskii](https://github.com/Chumbayoumba)**

[![Telegram](https://img.shields.io/badge/Вопросы-@longfest-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/longfest)

⭐ **Понравился шаблон? Поставьте звезду!**

</div>

---

<a name="english"></a>
## 🇬🇧 English

Modern landing page template with React 18, TypeScript, Tailwind CSS, and Framer Motion.

```bash
git clone https://github.com/Chumbayoumba/react-landing-starter.git
npm install && npm run dev
```