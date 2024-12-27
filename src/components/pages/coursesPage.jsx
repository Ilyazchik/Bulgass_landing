import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { LanguageContext } from '../../language-config/LanguageContext';
import Header from '../../partials/Header';
import BS50 from '../../assets/BS-50.jpeg';
import BS60 from '../../assets/BS-60.jpeg';
import BS70 from '../../assets/BS-70.jpeg';
import BS80 from '../../assets/BS-80.jpeg';
import BS90 from '../../assets/BS-90.jpeg'; 
import BS100 from '../../assets/BS-100.jpeg';

const CoursesPage = () => {
  const { language } = useContext(LanguageContext);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [filterLevel, setFilterLevel] = useState('all');

  const translations = {
    en: {
      pageTitle: 'Our Programming Courses',
      pageDescription: 'Choose the right course and start your journey into the world of programming',
      allCourses: 'All courses',
      levels: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
      enrollButton: 'Enroll in course',
      duration: 'Duration',
      level: 'Level'
    },
    ru: {
      pageTitle: 'Наши курсы программирования',
      pageDescription: 'Выберите подходящий курс и начните свой путь в мир программирования',
      allCourses: 'Все курсы',
      levels: ['Начальный', 'Средний', 'Продвинутый', 'Эксперт'],
      enrollButton: 'Записаться на курс',
      duration: 'Длительность',
      level: 'Уровень'
    }
  };

  const courses = [
    {
      title: 'BS-50',
      en: {
        description: 'Basics of computer science',
        fullDescription: 'BS-50: Course covers the basics of web development (HTML, CSS, JavaScript), programming in C++ and C#, and cybersecurity basics. Ideal for beginners and those looking to improve their skills in modern technologies.',
        duration: '3 months',
        level: 'Beginner',
        tag: 'Popular'
      },
      ru: {
        description: 'Основы компьютерных наук',
        fullDescription: 'BS-50: Курс охватывает основы веб-разработки (HTML, CSS, JavaScript), программирования на C++ и C#, а также основы кибербезопасности. Идеален для новичков и тех, кто хочет улучшить свои навыки в современных технологиях.',
        duration: '3 месяца',
        level: 'Начальный',
        tag: 'Популярный'
      },
      image: BS50
    },
    {
      title: 'BS-60',
      en: {
        description: 'Game development',
        fullDescription: 'BS-60: Course covers the basics of game development (Unity, Unreal Engine), programming in C# and C++, and game design. Ideal for beginners and those looking to improve their skills in modern technologies.',
        duration: '4 months',
        level: 'Intermediate',
        tag: 'New'
      },
      ru: {
        description: 'Разработка игр',
        fullDescription: 'BS-60: Курс по созданию игр, где студенты освоят игровые движки Unity и Unreal Engine, а также языки программирования C# и C++. Курс включает разработку 2D и 3D игр, проектирование уровней, основы геймдизайна, создание логики, анимации и искусственного интеллекта.',        
        duration: '4 месяца',
        level: 'Средний',
        tag: 'Новый'
      },
      image: BS60
    },
    {
      title: 'BS-70',
      en: {
        description: 'Web development',
        fullDescription: 'BS-70: Course covers the basics of web development (HTML, CSS, JavaScript), programming in C++ and C#, and cybersecurity basics. Ideal for beginners and those looking to improve their skills in modern technologies.',
        duration: '6-9 months',
        level: 'Advanced',
        tag: 'Bestseller'
      },
      ru: {
        description: 'Веб-разработка',
        fullDescription: 'BS-70: Курс по созданию веб-приложений научит разрабатывать динамичные сайты с использованием HTML, CSS, JavaScript, React и Git. Студенты освоят основы верстки, добавление интерактивности и создание интерфейсов с React. Курс включает теорию и практическую работу с реальными проектами, развивая навыки командной работы и подготовки веб-приложений для бизнеса.',
        duration: '6-9 месяцев',
        level: 'Продвинутый',
        tag: 'Бестселлер'
      },
      image: BS70
    },
    {
      title: 'BS-80',
      en: {
        description: 'Algorithmic & Data Structures',
        fullDescription: 'BS-80: Course covers the basics of algorithmic and data structures (arrays, lists, trees, graphs), and algorithms for processing them. Ideal for beginners and those looking to improve their skills in modern technologies.',
        duration: '9-12 months',
        level: 'Advanced',
        tag: 'Top Seller'
      },
      ru: {
        description: 'Алгоритмы и структуры данных',
        fullDescription: 'BS-80: Курс по алгоритмам и структурам данных научит основным структурам данных (массивы, списки, деревья, графы) и алгоритмам для их обработки. Вы изучите методы поиска, сортировки и оптимизации, развивая аналитическое мышление. Курс включает практические задания для закрепления теории и подготовки к собеседованиям.',
        duration: '9-12 месяцев',
        level: 'Продвинутый',
        tag: 'Топ продаж'
      },
      image: BS80
    },
    {
      title: 'BS-90',
      en: {
        description: 'AI & Machine Learning',
        fullDescription: 'BS-90: Course covers the basics of AI and machine learning (C++, C#), neural networks, and algorithms for processing them. Ideal for beginners and those looking to improve their skills in modern technologies.',
        duration: '12-18 months',
        level: 'Expert',
        tag: 'Advanced'
      },
      ru: {
        description: 'ИИ и машинное обучение',
        fullDescription: 'BS-90: Курс по искусственному интеллекту и машинному обучению научит вас разрабатывать модели с использованием C++ и C#. Вы освоите алгоритмы машинного обучения, такие как линейная регрессия, классификация, кластеризация и нейронные сети. Курс включает практические проекты по созданию интеллектуальных систем для различных отраслей.',
        duration: '12-18 месяцев',
        level: 'Эксперт',
        tag: 'Продвинутый'
      },
      image: BS90
    },
    {
      title: 'BS-100',
      en: {
        description: 'Cybersecurity',
        fullDescription: 'BS-100: Course covers the basics of cybersecurity (encryption, data protection, hacking, monitoring), and algorithms for processing them. Ideal for beginners and those looking to improve their skills in modern technologies.',
        duration: '12-18 months',
        level: 'Expert',
        tag: 'Premium'
      },
      ru: {
        description: 'Кибербезопасность',
        fullDescription: 'BS-100: Курс по кибербезопасности научит защищать системы и данные от угроз. Вы изучите криптографию, защиту данных, методы взлома и защиты, а также инструменты для мониторинга безопасности. Курс включает практические навыки защиты веб-приложений и серверов, а также создание безопасных архитектур для корпоративных систем.',
        duration: '12-18 месяцев',
        level: 'Эксперт',
        tag: 'Премиум'
      },
      image: BS100
    }
  ];

  const filteredCourses = courses.filter(course => 
    filterLevel === 'all' || course[language].level === translations[language].levels[translations[language].levels.indexOf(filterLevel)]
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
    <>
      <Header />
      <motion.div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-16">
          <motion.h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
            {translations[language].pageTitle}
          </motion.h1>
          
          <motion.p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {translations[language].pageDescription}
          </motion.p>

          <motion.div className="flex justify-center gap-4 mb-8 flex-wrap">
            <motion.button
              className={`px-4 py-2 rounded-lg shadow-md ${filterLevel === 'all' ? 'bg-primary text-white' : 'bg-white'}`}
              onClick={() => setFilterLevel('all')}
            >
              {translations[language].allCourses}
            </motion.button>
            {translations[language].levels.map(level => (
              <motion.button
                key={level}
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
              {filteredCourses.map((course) => (
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
                      {course[language].description}
                    </p>
                    
                    <AnimatePresence>
                      {selectedCourse?.title === course.title && (
                        <motion.div 
                          className="space-y-4"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <p className="text-gray-700 leading-relaxed">{course[language].fullDescription}</p>
                          <div className="flex flex-col gap-2 border-t border-gray-100 pt-4 mt-4">
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <div className="flex items-center">
                                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{translations[language].duration}: {course[language].duration}</span>
                              </div>
                              <div className="flex items-center">
                                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{translations[language].level}: {course[language].level}</span>
                              </div>
                            </div>
                            {course[language].tag && (
                              <motion.div 
                                className="flex items-center text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                              >
                                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                </svg>
                                <span className="text-primary font-medium">{course[language].tag}</span>
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
                      {translations[language].enrollButton}
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default CoursesPage;