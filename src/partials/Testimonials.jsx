import {useState, useContext} from 'react';
import translations from '../language-config/translations';
import { LanguageContext } from '../language-config/LanguageContext';
import bulgassIcon from '../assets/bulgassNew.png';



const icons = [
  { 
    id: 1, 
    name: 'HTML5', 
    className: 'fab fa-html5', 
    color: 'text-orange-500', 
    description: {
      en: 'HTML5 allows you to create modern, semantic, and cross-platform content.',
      ru: 'HTML5 позволяет создавать современный, семантический и кроссплатформенный контент.',
    },
  },
  { 
    id: 2, 
    name: 'CSS3', 
    className: 'fab fa-css3-alt', 
    color: 'text-blue-500', 
    description: {
      en: 'CSS3 provides powerful tools for creating attractive user interfaces.',
      ru: 'CSS3 предоставляет мощные инструменты для создания привлекательных пользовательских интерфейсов.',
    },
  },
  { 
    id: 3, 
    name: 'JavaScript', 
    className: 'fab fa-js-square', 
    color: 'text-yellow-500', 
    description: {
      en: 'JavaScript is the key language for creating interactive and dynamic web pages.',
      ru: 'JavaScript — ключевой язык для создания интерактивных и динамичных веб-страниц.',
    },
  },
  { 
    id: 4, 
    name: 'React', 
    className: 'fab fa-react', 
    color: 'text-blue-600', 
    description: {
      en: 'React is a powerful tool for building responsive and scalable user interfaces.',
      ru: 'React — мощный инструмент для создания отзывчивых и масштабируемых пользовательских интерфейсов.',
    },
  },
  { 
    id: 5, 
    name: 'Node.js', 
    className: 'fab fa-node', 
    color: 'text-green-600', 
    description: {
      en: 'Node.js allows you to develop server applications using JavaScript.',
      ru: 'Node.js позволяет разрабатывать серверные приложения на JavaScript.',
    },
  },
  { 
    id: 6, 
    name: 'Git', 
    className: 'fab fa-git-square', 
    color: 'text-red-600', 
    description: {
      en: 'Git is an indispensable tool for version control in team development.',
      ru: 'Git — незаменимый инструмент для контроля версий в командной разработке.',
    },
  },
  { 
    id: 7, 
    name: 'Docker', 
    className: 'fab fa-docker', 
    color: 'text-orange-600', 
    description: {
      en: 'Docker helps create containerized applications, simplifying deployment and scaling.',
      ru: 'Docker помогает создавать контейнеризированные приложения, упрощая их развёртывание и масштабирование.',
    },
  },
  { 
    id: 8, 
    name: 'Cybersecurity', 
    className: 'fas fa-shield-alt', 
    color: 'text-indigo-600', 
    description: {
      en: 'Cybersecurity basics will help you protect your applications and data.',
      ru: 'Основы кибербезопасности помогут защитить ваши приложения и данные.',
    },
  },
  { 
    id: 9, 
    name: 'Python', 
    className: 'fab fa-python', 
    color: 'text-green-600', 
    description: {
      en: 'Python is a versatile language, ideal for data analysis, development, and automation.',
      ru: 'Python — универсальный язык, идеально подходящий для анализа данных, разработки и автоматизации.',
    },
  },
  { 
    id: 10, 
    name: 'Linux', 
    className: 'fab fa-linux', 
    color: 'text-black', 
    description: {
      en: 'Linux is the foundation for servers, clouds, and embedded systems.',
      ru: 'Linux является основой для серверов, облаков и встроенных систем.',
    },
  },
  { 
    id: 11, 
    name: 'C++', 
    className: 'devicon-cplusplus-plain', 
    color: 'text-blue-600', 
    description: {
      en: 'C++ is used to create high-performance applications.',
      ru: 'C++ используется для создания высокопроизводительных приложений.',
    },
  },
  { 
    id: 12, 
    name: 'PHP', 
    className: 'fab fa-php', 
    color: 'text-blue-500', 
    description: {
      en: 'PHP is one of the most popular languages for developing server-side logic of websites.',
      ru: 'PHP — один из самых популярных языков для разработки серверной логики веб-сайтов.',
    },
  },
  { 
    id: 13, 
    name: 'Bootstrap', 
    className: 'fab fa-bootstrap', 
    color: 'text-purple-600', 
    description: {
      en: 'Bootstrap speeds up the creation of responsive web designs.',
      ru: 'Bootstrap ускоряет создание адаптивных веб-дизайнов.',
    },
  },
  { 
    id: 14, 
    name: 'Laravel', 
    className: 'fab fa-laravel', 
    color: 'text-green-500', 
    description: {
      en: 'Laravel is a powerful PHP framework for developing modern applications.',
      ru: 'Laravel — мощный PHP-фреймворк для разработки современных приложений.',
    },
  },
  { 
    id: 15, 
    name: 'VSCode', 
    className: 'devicon-vscode-plain', 
    color: 'text-blue-500', 
    description: {
      en: 'Visual Studio Code is a popular code editor with powerful extensions for web development.',
      ru: 'Visual Studio Code — популярный редактор кода с мощными расширениями для веб-разработки.',
    },
  },
  { 
    id: 16, 
    name: 'AWS', 
    className: 'fab fa-aws', 
    color: 'text-orange-500', 
    description: {
      en: 'Amazon Web Services (AWS) is the world’s most widely used cloud, offering over 200 fully featured services for data centers worldwide.',
      ru: 'Amazon Web Services (AWS) — самая широко используемая облачная платформа, предлагающая более 200 полнофункциональных сервисов для дата-центров по всему миру.',
    },
  },
  { 
    id: 17, 
    name: 'DBMS', 
    className: 'fas fa-database', 
    color: 'text-black', 
    description: {
      en: 'Databases based on relational model of data.',
      ru: 'Базы данных, основанные на реляционной модели данных.',
    },
  },
  { 
    id: 18, 
    name: 'D&A', 
    className: 'fas fa-sitemap', 
    color: 'text-green-900', 
    description: {
      en: 'Data Structures is about how data can be stored in different structures. Algorithms is about how to solve different problems, often by searching through and manipulating data structures.',
      ru: 'Структуры данных описывают способы хранения данных. Алгоритмы решают задачи, часто связанные с обработкой и поиском в этих структурах.',
    },
  },
  { 
    id: 19, 
    name: 'Terraform', 
    className: 'devicon-terraform-plain', 
    color: 'text-purple-600', 
    description: {
      en: 'Terraform is an IAC tool, used primarily by DevOps teams to automate various infrastructure tasks.',
      ru: 'Terraform — инструмент IAC, используемый командами DevOps для автоматизации задач инфраструктуры.',
    },
  },
  { 
    id: 20, 
    name: 'Kubernetes', 
    className: 'devicon-kubernetes-plain', 
    color: 'text-blue-600', 
    description: {
      en: 'Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation.',
      ru: 'Kubernetes — это переносимая, расширяемая платформа с открытым исходным кодом для управления контейнеризированными рабочими нагрузками и сервисами, поддерживающая декларативную настройку и автоматизацию.',
    },
  },
];



function Testimonials() {
  const [activeModal, setActiveModal] = useState(false);
  const { language } = useContext(LanguageContext);

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(false);

  return (
    <section className="relative">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">{translations[language].testimonials}</h2>
          </div>

          
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-4 grid-cols-3 md:grid-cols-5">
            {icons.map((icon) => (
              <div
                key={icon.id}
                className="flex items-center justify-center py-4 cursor-pointer"
                onClick={() => openModal(icon.id)}
              >
                <i
                  className={`${icon.className} text-5xl text-gray-600 hover:${icon.color} transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4`}
                ></i>
              </div>
            ))}
          </div>

          
          {icons.map((icon) => (
            activeModal === icon.id && (
              <div
                key={icon.id}
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                onClick={closeModal}
              >
                <div
                  className="bg-white p-6 rounded shadow-lg w-96 text-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-xl font-bold mb-4">{icon.name}</h3>
                  <p className="text-gray-600 mb-6">{icon.description[language]}</p>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            )
          ))}

          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <img className="relative rounded-full" src={bulgassIcon} width="110" height="110" alt="Testimonial" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  {translations[language].testimonials1}
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Bulgass IT Academy</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
