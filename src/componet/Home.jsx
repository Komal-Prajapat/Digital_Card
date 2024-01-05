import React from 'react';
import './home.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <>
      <div className="container1 h-[298px] sm:h-48 md:h-50 lg:h-[200px] xl:h-66 flex items-center justify-center sm:justify-start -mt-4">
        <div className="innercontainer flex flex-col sm:flex-row h-[260px] sm:h-41 md:h-47 lg:h-[180px] xl:h-64 ">
          <img
            src="https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg"
            alt=""
            className="w-20 h-20 ml-[120px] sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20"
          />
          <div className="data">
            <h1 className="text-4xl hcolor ml-16 sm:ml-11 md:ml-12 lg:ml-16 xl:ml-20">
              <span>i - </span> SOFTZONE
            </h1>
            <h3 className="text-2xl text-white ml-16 sm:ml-12 mt-2 sm:mt-0">
               Mr. Pranay Gupta
            </h3>

            {/* social media link */}
            <div className="socialmedia_icon flex justify-center items-center space-x-4 mt-3">
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon text-2xl transition transform hover:scale-110 active:scale-125 text-[#405DE6] hover:text-[#FF1493] active:text-[#FF1493]"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="icon text-2xl transition transform hover:scale-110 active:scale-125 text-[#1877F2] hover:text-[#0000FF] active:text-[#0000FF]"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon text-2xl transition transform hover:scale-110 active:scale-125 text-[#0A66C2] hover:text-[#0000FF] active:text-[#0000FF]"
              />
            </div>
          </div>
        </div>
      </div>



{/* Address phonenumer email website */}
      <div className="address bgcolor text-white w-[80%] m-auto">
        <div className="innerbgcolor ">
          <div className="address-info ">
            <p className='flex'>
              <FaMapMarkerAlt className='mr-2 text-red-400 hover:{}'/> 454, Apollo Tower, 5th Floor, 2, M.G. Road,
              Indore, Madhya Pradesh 452001
            </p>
          </div>
          <div className="email-info">
            <p className='flex mt-2 '>
              <FaEnvelope className='mr-2 text-red-400 hover:{}'/> info@isoftzone.com
            </p>
          </div>
          <div className="website-info">
            <p className='flex mt-2 '>
              <FaEnvelope className='mr-2 text-red-400 hover:{}'/>{" "}
              <a
                href="http://isoftzone.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://isoftZone.com
              </a>
            </p>
          </div>
          <div className="phone-info">
            <p className='flex mt-2 '>
              <FaPhone className='mr-2 text-red-400 hover:{}'/>:- +91 74156-64456
            </p>
          </div>
      </div>
        
      </div>
      
    </>
  );
};

export default Home;
