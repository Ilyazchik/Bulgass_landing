import { useContext } from 'react';
import { LanguageContext } from '../../language-config/LanguageContext';
import Header from '../../partials/Header';


function StudentBenefits() {
  const { language } = useContext(LanguageContext);
  const translations = {
    en:{
      zoomDescription: 'Zoom is a video conferencing platform that allows you to connect with your team and clients from anywhere in the world. It is a powerful tool for remote collaboration and communication.',
      discordDescription: 'Discord is a communication platform that allows you to connect with your team and clients from anywhere in the world. It is a powerful tool for remote collaboration and communication.',
      meetDescription: 'Google Meet is a video conferencing platform that allows you to connect with your team and clients from anywhere in the world. It is a powerful tool for remote collaboration and communication.',
      newStudentDescription: 'For new students',
      groupDescription: 'For groups of 3 or more students',
      longTermDescription: 'For long term students',
    },
    ru:{
      zoomDescription: 'Zoom — это платформа для видеоконференций, которая позволяет вам общаться с командой и клиентами из любой точки мира. Это мощный инструмент для удаленного сотрудничества и общения.',
      discordDescription: 'Discord — это платформа для общения, которая позволяет вам общаться с командой и клиентами из любой точки мира. Это мощный инструмент для удаленного сотрудничества и общения.',
      meetDescription: 'Google Meet — это платформа для видеоконференций, которая позволяет вам общаться с командой и клиентами из любой точки мира. Это мощный инструмент для удаленного сотрудничества и общения.',
      newStudentDescription: 'Для новых студентов',
      groupDescription: 'Для групп из 3 и более студентов',
      longTermDescription: 'Для долгосрочных студентов',
    },
  }

  const platforms = [
    {
      name: 'Zoom',
      icon: 'fas fa-video',
      description: translations[language].zoomDescription
    },
    {
      name: 'Discord',
      icon: 'fab fa-discord',
      description: translations[language].discordDescription
    },
    {
      name: 'Google Meet',
      icon: ' fab fa-google',
      description: translations[language].meetDescription
    }
  ];

  const discounts = [
    {
      percentage: '15%',
      title: translations[language].newStudentDiscount,
      description: translations[language].newStudentDescription,
      color: 'blue-600'
    },
    {
      percentage: '20%',
      title: translations[language].groupDiscount,
      description: translations[language].groupDescription,
      color: 'green-600'
    },
    {
      percentage: '25%',
      title: translations[language].longTermDiscount,
      description: translations[language].longTermDescription,
      color: 'purple-600'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        {/* Секция форматов обучения */}
        <div className="max-w-7xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
            {translations[language].onlineLearningTitle}
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
            {translations[language].onlineLearningDescription}
          </p>

          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {translations[language].platformsTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-center">
                  <i className={`${platform.icon} text-6xl text-blue-600 mb-6`}></i>
                  <h3 className="text-2xl font-semibold mb-4">{platform.name}</h3>
                  <p className="text-gray-600 text-lg">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Секция системы скидок */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            {translations[language].discountSystemTitle}
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            {translations[language].discountSystemDescription}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {discounts.map((discount, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center">
                  <span className={`text-5xl font-bold text-${discount.color}`}>
                    {discount.percentage}
                  </span>
                  <h3 className="text-xl font-semibold mt-4">{discount.title}</h3>
                  <p className="mt-2 text-gray-600">{discount.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentBenefits;
