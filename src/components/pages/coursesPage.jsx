import React, { useState } from 'react';
import BS50 from '../../assets/BS-50.jpeg';
import BS60 from '../../assets/BS-60.jpeg';
import BS70 from '../../assets/BS-70.jpeg';
import BS80 from '../../assets/BS-80.jpeg';
import BS90 from '../../assets/BS-90.jpeg'; 
import BS100 from '../../assets/BS-100.jpeg';

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      title: 'BS-50',
      description: 'Basics of computer science',
      fullDescription: 'Изучите основы компьютерных наук, алгоритмы и структуры данных. Идеально подходит для начинающих.',
      duration: '3 месяца',
      level: 'Начальный',
      image: BS50,
      tag: 'Популярный'
    },
    {
      title: 'BS-60',
      description: 'Game development',
      fullDescription: 'Создавайте свои собственные игры, изучите игровые движки и основы геймдизайна.',
      duration: '4 месяца',
      level: 'Средний',
      image: BS60,
      tag: 'Новый'
    },
    {
      title: 'BS-70',
      description: 'Создавайте enterprise приложения на Java',
      fullDescription: 'Углубленное изучение Java для разработки корпоративных приложений.',
      duration: '6 месяцев',
      level: 'Продвинутый',
      image: BS70,
    },
    {
      title: 'BS-80',
      description: 'Создавайте enterprise приложения на Java',
      fullDescription: 'Мастер-класс по Java Enterprise разработке с использованием современных фреймворков.',
      duration: '6 месяцев',
      level: 'Продвинутый',
      image: BS80,
      tag: 'Топ продаж'
    },
    {
      title: 'BS-90',
      description: 'Создавайте enterprise приложения на Java',
      fullDescription: 'Экспертный уровень Java разработки с углублением в микросервисы и облачные технологии.',
      duration: '8 месяцев',
      level: 'Эксперт',
      image: BS90,
    },
    {
      title: 'BS-100',
      description: 'Создавайте enterprise приложения на Java',
      fullDescription: 'Специализированный курс по архитектуре корпоративных приложений на Java.',
      duration: '8 месяцев',
      level: 'Эксперт',
      image: BS100,
    }
  ];

  const handleCourseClick = (course) => {
    setSelectedCourse(selectedCourse?.title === course.title ? null : course);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
          Наши курсы программирования
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Выберите подходящий курс и начните свой путь в мир программирования
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 
                hover:shadow-2xl cursor-pointer backdrop-blur-sm
                ${selectedCourse?.title === course.title ? 'scale-105 ring-2 ring-primary' : 'hover:scale-102'}`}
              onClick={() => handleCourseClick(course)}
            >
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {course.tag && (
                  <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {course.tag}
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  {course.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                {selectedCourse?.title === course.title && (
                  <div className="space-y-4 animate-fadeIn">
                    <p className="text-gray-700 leading-relaxed">{course.fullDescription}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4 mt-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{course.level}</span>
                      </div>
                    </div>
                  </div>
                )}

                <button className="w-full mt-6 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-3 px-6 rounded-xl
                  hover:from-primary hover:to-primary transform transition-all duration-300 hover:-translate-y-1 active:translate-y-0
                  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 shadow-lg hover:shadow-xl">
                  Записаться на курс
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;