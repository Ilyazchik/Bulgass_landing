import { useContext } from 'react';
import { LanguageContext } from '../../language-config/LanguageContext';
import translations from '../../language-config/translations';

function StudentBenefits() {
  const { language } = useContext(LanguageContext);

  const platforms = [
    {
      name: 'Zoom',
      icon: 'fa-video',
      description: translations[language].zoomDescription
    },
    {
      name: 'Discord',
      icon: 'fa-discord',
      description: translations[language].discordDescription
    },
    {
      name: 'Google Meet',
      icon: 'fa-google',
      description: translations[language].meetDescription
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Секция описания формата обучения */}
      <div className="max-w-7xl mx-auto mb-20">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
          {translations[language].onlineLearningTitle}
        </h1>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
          {translations[language].onlineLearningDescription}
        </p>

        {/* Секция платформ обучения */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {translations[language].platformsTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <div key={platform.name} 
                 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-center">
                <i className={`fas ${platform.icon} text-6xl text-blue-600 mb-6`}></i>
                <h3 className="text-2xl font-semibold mb-4">{platform.name}</h3>
                <p className="text-gray-600 text-lg">{platform.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Секция скидок */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          {translations[language].discountSystemTitle}
        </h2>
        <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
          {translations[language].discountSystemDescription}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <span className="text-5xl font-bold text-blue-600">15%</span>
              <h3 className="text-xl font-semibold mt-4">
                {translations[language].newStudentDiscount}
              </h3>
              <p className="mt-2 text-gray-600">
                {translations[language].newStudentDescription}
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <span className="text-5xl font-bold text-green-600">20%</span>
              <h3 className="text-xl font-semibold mt-4">
                {translations[language].groupDiscount}
              </h3>
              <p className="mt-2 text-gray-600">
                {translations[language].groupDescription}
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <span className="text-5xl font-bold text-purple-600">25%</span>
              <h3 className="text-xl font-semibold mt-4">
                {translations[language].longTermDiscount}
              </h3>
              <p className="mt-2 text-gray-600">
                {translations[language].longTermDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentBenefits;