import { useState, useRef, useEffect, useContext } from 'react';
import { LanguageContext } from '../language-config/LanguageContext';
import Transition from '../utils/Transition';
import features from '../assets/featuresBg.png';
import featuresEl from '../assets/features-element.png';
import cybersecurity from '../assets/cybersecurity.jpeg';
import react from '../assets/react.png';


function Features() {
  const { language } = useContext(LanguageContext);
  const [tab, setTab] = useState(1);

  const tabs = useRef(false);
  const translations = {
    en:{      
      features: 'Explore new opportunities',
      features1: 'IT is a world where your ideas turn into technologies that shape the future. Join us and create something that will not only change your life but the lives of millions.',
      features2: 'Powerful suite of tools',
      features3: 'With us, you will learn to work with: Docker containerization and with Kubernetes, cloud storage with AWS, version control systems like GIT, and many other essential tools.',
      features4: 'Protection against cyberattacks',
      features5: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information.',
      features6: 'Creation of standalone websites',
      features7: 'Create your full-scale project in React.',
      features8: 'Building the Simple ecosystem',
      features9: 'Take collaboration to the next level with security and administrative features built for teams.',},
    ru:{
      features: 'Откройте для себя новые возможности',
      features1: 'IT — это мир, где ваши идеи превращаются в технологии, которые формируют будущее. Присоединяйтесь к нам и создайте что-то, что изменит не только вашу жизнь, но и жизнь миллионов людей.',
      features2: 'Мощный набор инструментов',
      features3: 'С нами вы научитесь работать с: контейнеризацией Docker и Kubernetes, облачными хранилищами, такими как AWS, системами контроля версий, например, GIT, и многими другими важными инструментами.',
      features4: 'Защита от кибератак',
      features5: 'Кибербезопасность — это практика защиты систем, сетей и программ от цифровых атак. Эти атаки обычно направлены на доступ, изменение или уничтожение конфиденциальной информации.',
      features6: 'Создание автономных веб-сайтов',
      features7: 'Создайте свой полноценный проект на React.',
      features8: 'Построение экосистемы Simple',
      features9: 'Выведите сотрудничество на новый уровень с функциями безопасности и администрирования, созданными для команд.',},
  }
  
  useEffect(() => {
    const heightFix = () => {
      if (tabs.current.children[tab]) {
        tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
      }
    }
    heightFix()
    
  })

  return (
    <section className="relative">


      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">


          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4"> {translations[language].features}</h1>
            <p className="text-xl text-gray-600">{translations[language].features1}</p>
          </div>

          <div className="md:grid md:grid-cols-12 md:gap-6">

            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">{translations[language].features2}</h3>
                <p className="text-xl text-gray-600">{translations[language].features3}</p>
              </div>

              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">{translations[language].features4}</div>
                    <div className="text-gray-600">{translations[language].features5}</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">{translations[language].features6}</div>
                    <div className="text-gray-600">{translations[language].features7} </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">{translations[language].features8}</div>
                    <div className="text-gray-600">{translations[language].features9}</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative ">
                    <img className='w-full' src={cybersecurity} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative ">
                    <img className='w-full' src={react} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src={features} width="500" height="462" alt="Features bg" />
                    <img className="md:max-w-none absolute w-full left-0 transform animate-float" src={featuresEl} width="500" height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
