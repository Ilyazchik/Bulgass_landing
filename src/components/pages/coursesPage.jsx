import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BS50 from '../../assets/BS-50.jpeg';
import BS60 from '../../assets/BS-60.jpeg';
import BS70 from '../../assets/BS-70.jpeg';
import BS80 from '../../assets/BS-80.jpeg';
import BS90 from '../../assets/BS-90.jpeg'; 
import BS100 from '../../assets/BS-100.jpeg';

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [filterLevel, setFilterLevel] = useState('all');

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
      tag: 'Бестселлер'
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
      tag: 'Продвинутый'
    },
    {
      title: 'BS-100',
      description: 'Создавайте enterprise приложения на Java',
      fullDescription: 'Специализированный курс по архитектуре корпоративных приложений на Java.',
      duration: '8 месяцев',
      level: 'Эксперт',
      image: BS100,
      tag: 'Премиум'
    }
  ];

  const filteredCourses = courses.filter(course => 
    filterLevel === 'all' || course.level === filterLevel
  );

  const handleCourseClick = (course) => {
    setSelectedCourse(selectedCourse?.title === course.title ? null : course);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Наши курсы программирования
        </motion.h1>
        
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Выберите подходящий курс и начните свой путь в мир программирования
        </motion.p>

        <motion.div 
          className="flex justify-center gap-4 mb-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-lg shadow-md ${filterLevel === 'all' ? 'bg-primary text-white' : 'bg-white'}`}
            onClick={() => setFilterLevel('all')}
          >
            Все курсы
          </motion.button>
          {['Начальный', 'Средний', 'Продвинутый', 'Эксперт'].map(level => (
            <motion.button
              key={level}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg shadow-md ${filterLevel === level ? 'bg-primary text-white' : 'bg-white'}`}
              onClick={() => setFilterLevel(level)}
            >
              {level}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.title}
                layoutId={course.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ y: -10 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300
                  ${selectedCourse?.title === course.title ? 'ring-2 ring-primary' : ''}`}
                onClick={() => handleCourseClick(course)}
                onHoverStart={() => setHoveredCourse(course.title)}
                onHoverEnd={() => setHoveredCourse(null)}
              >
                <div className="relative h-48 overflow-hidden group">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
                
                <motion.div 
                  className="p-6"
                  initial={false}
                  animate={{
                    height: selectedCourse?.title === course.title ? 'auto' : '300px'
                  }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  
                  <AnimatePresence>
                    {selectedCourse?.title === course.title && (
                      <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <p className="text-gray-700 leading-relaxed">{course.fullDescription}</p>
                        <div className="flex flex-col gap-2 border-t border-gray-100 pt-4 mt-4">
                          <div className="flex items-center justify-between text-sm text-gray-500">
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
                          {course.tag && (
                            <motion.div 
                              className="flex items-center text-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                              </svg>
                              <span className="text-primary font-medium">{course.tag}</span>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-6 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-3 px-6 rounded-xl
                      hover:from-primary hover:to-primary transform transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 shadow-lg hover:shadow-xl"
                  >
                    Записаться на курс
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CoursesPage;