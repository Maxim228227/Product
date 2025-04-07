import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => (
  <div className="p-10 text-center bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-6xl font-extrabold drop-shadow-lg">JumpFit - Фитнес на батутах</h1>
    <p className="mt-6 text-xl max-w-xl">Зарядись энергией и прокачай выносливость с нашими динамичными тренировками!</p>
    <p className="mt-4 text-lg max-w-lg">Наши тренировки подходят для всех возрастов и уровней подготовки. Присоединяйтесь и ощутите лёгкость в движении!</p>
    <Button className="mt-6 bg-gray-700 text-white px-6 py-3 rounded-full shadow-xl hover:bg-gray-600 transition-all">Записаться</Button>
  </div>
);

const About = () => (
  <div className="p-10 text-center bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-6xl font-extrabold drop-shadow-lg">О нас</h1>
    <p className="mt-6 text-xl max-w-lg">JumpFit – это место, где фитнес становится настоящим удовольствием! Наши тренировки сочетают кардио, силу и баланс в одном динамичном формате.</p>
    <p className="mt-6 text-lg max-w-lg">Мы создали JumpFit для тех, кто хочет тренироваться эффективно и весело. Прыжки на мини-батутах улучшают координацию, сжигают калории и дарят заряд позитива!</p>
    <p className="mt-6 text-lg max-w-lg">Наши профессиональные тренеры помогут вам достичь любых целей – будь то укрепление здоровья, похудение или просто хорошее настроение.</p>
  </div>
);

const Subscriptions = () => (
  <div className="p-10 text-center bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold">Абонементы</h1>
    <p className="mt-4 text-lg max-w-lg">Выберите подходящий абонемент и начните тренироваться уже сегодня!</p>
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {[{ sessions: 4, price: 40 }, { sessions: 8, price: 75 }, { sessions: 12, price: 110 }, { sessions: 16, price: 145 }].map((plan, index) => (
        <div key={index} className="bg-gray-700 text-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer">
          <h2 className="text-2xl font-bold">{plan.sessions} занятий</h2>
          <p className="mt-2 text-lg">Стоимость: {plan.price} BYN</p>
        </div>
      ))}
    </div>
  </div>
);

const Staff = () => (
  <div className="p-10 text-center bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold">Наши сотрудники</h1>
    <p className="mt-4 text-lg max-w-lg">Познакомьтесь с нашей командой профессионалов, которые помогут вам достичь ваших фитнес-целей!</p>
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
        <img src="/path/to/director-photo.jpg" alt="Директор" className="w-32 h-32 rounded-full mx-auto" />
        <h2 className="text-2xl font-bold mt-4">Директор</h2>
        <p className="mt-2">Опытный руководитель, который создал идеальную атмосферу для занятий фитнесом.</p>
      </div>
      <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
        <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto"></div>
        <h2 className="text-2xl font-bold mt-4">Фитнес-тренер</h2>
        <p className="mt-2">Профессионал, который поможет вам достичь желаемых результатов.</p>
      </div>
      <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
        <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto"></div>
        <h2 className="text-2xl font-bold mt-4">Фитнес-тренер</h2>
        <p className="mt-2">Опытный инструктор, мотивирующий на новые достижения.</p>
      </div>
      <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
        <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto"></div>
        <h2 className="text-2xl font-bold mt-4">Менеджер по продвижению</h2>
        <p className="mt-2">Отвечает за развитие бренда и привлечение новых клиентов.</p>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="p-10 text-center bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold">Контакты</h1>
    <p className="mt-4 text-lg max-w-lg">Свяжитесь с нами для записи и консультации – мы всегда рады новым клиентам!</p>
    <p className="mt-4 text-lg max-w-lg">📍 Наш адрес: Жолтовского пр, 51, Пинск</p>
    <p className="mt-2 text-lg max-w-lg">📞 Телефон: +375 (44) 245-73-21</p>
    <p className="mt-2 text-lg max-w-lg">📧 Email: Maxim_and_Nikita_gmail.com</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <nav className="flex justify-center space-x-6 p-4 bg-gray-800 shadow-lg fixed top-0 w-full z-10 backdrop-blur-md">
          <Link to="/" className="text-white font-semibold hover:text-gray-400 transition-all">Главная</Link>
          <Link to="/about" className="text-white font-semibold hover:text-gray-400 transition-all">О нас</Link>
          <Link to="/subscriptions" className="text-white font-semibold hover:text-gray-400 transition-all">Абонементы</Link>
          <Link to="/staff" className="text-white font-semibold hover:text-gray-400 transition-all">Наши сотрудники</Link>
          <Link to="/contact" className="text-white font-semibold hover:text-gray-400 transition-all">Контакты</Link>
        </nav>
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
