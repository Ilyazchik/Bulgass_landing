import bulgassIcon from '../assets/bulgass.png';

function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
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

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">We will teach you:</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-4 grid-cols-4 md:grid-cols-5">

          <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
            <i className="fab fa-html5 text-5xl text-gray-600 hover:text-orange-500 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
          </div>
          
          <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
            <i className="fab fa-css3-alt text-5xl text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
          </div>

          <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
              <i className="fab fa-js-square text-5xl text-gray-600 hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
          </div>
              
          <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
            <i className="fab fa-react text-5xl text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
          </div>

          <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
            <i className="fab fa-node text-5xl text-gray-600 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
          </div>
            
          
          <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
            <i className="fab fa-git-square text-5xl text-gray-600 hover:text-red-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
          </div>
          
          <div className="flex items-center justify-center py-4 col-span-2 md:col-auto col-start-2 col-end-4">
            <i className="fab fa-docker text-5xl text-gray-600 hover:text-orange-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
          </div>
          
          <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
            <i className="fas fa-shield-alt text-5xl text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
          </div>
          
          <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
            <i className="fab fa-python text-5xl text-gray-600 hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
          </div>

          <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
              <i className="fab fa-linux text-5xl text-gray-600 hover:text-black transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
          </div>

          <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
            <i className="fab fa-cuttlefish text-5xl text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
          </div>

          <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
             <i className="fab fa-php text-5xl text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
           </div>
            
           <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
             <i className="fab fa-bootstrap text-5xl text-gray-600 hover:text-purple-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
           </div>
            
           <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
             <i className="fab fa-node-js text-5xl text-gray-600 hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
           </div>
           <div className="flex items-center justify-center py-4 col-span-2 md:col-auto">
             <i className="fab fa-laravel text-5xl text-gray-600 hover:text-green-500 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg rounded-full p-4"></i>
           </div>
            



          </div>


          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">

                  <img className="relative rounded-full" src={bulgassIcon} width="96" height="96" alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ We are a team of professionals ready to help you explore the world of IT and master the in-demand skills that will transform your career. Our courses are not just theory, but a practical immersion in real projects that you can apply in your work. We teach relevant technologies such as programming, system administration, web development, full-stack development, and an introduction to cybersecurity, so you can quickly adapt to changes in the IT industry. “
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