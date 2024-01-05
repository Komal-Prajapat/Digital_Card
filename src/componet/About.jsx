import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 overflow-y-auto">
     <h1 className=" hover:text-2xl text-3xl text-center font-bold mb-3">ABOUT US</h1>
      
      <hr className='mb-3 bg-black h-1 font-bold w-[150px] m-auto 
      hover:w-[140px]'></hr>


      <div className="about-data p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-gray-200">
        <div className="company-info">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
            Company Name: i-SOFTZONE
          </h2>
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6">
            Nature Of Business: Software & Development Company
          </h3>
        </div>

        <div className="specialities">
          <h3 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-4">
            Our Specialities
          </h3>
          <ul className="list-disc list-inside text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            <li>E-commerce solution development</li>
            <li>Develop UI/UX based design</li>
            <li>Web application development</li>
            <li>Software application development</li>
            <li>Mobile application development</li>
            <li>Creative design with advanced technology</li>
            <li>Highly knowledgeable & professionals team</li>
          </ul>
        </div>
      </div>

      <div className="welcome-container text-left text-justify p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-gray-100">
        <h1 className="text-2xl sm:text-2xl md:text-1xl lg:text-2xl xl:text-3xl font-bold mb-4 text-center hover:text-3xl">
          * WELCOME TO i-SOFTZONE *
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-2">
          *i-Softzone has proved its excellence in the field of web design & web
          development and today it has successfully established itself as one of
          the best and most reliable offshore ecommerce web site design &
          development, software designing company where you can outsource your
          services for affordable prices.*
        </p>

        {/* Add similar styling for other paragraphs */}
      </div>
    </div>
  );
};

export default About;
