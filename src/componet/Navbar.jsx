import React from 'react';
import ScrollSpy from 'react-ui-scrollspy';
import './navbar.css';
import Home from './Home';
import About from './About';
import ProductLInks from './ProductLInks';
import PaymentOnline from './PaymentOnline';
import Last from './Last';
import Enquiry from './enquiry';
import Feedback from './Feedback';

const Navbar = () => {
  return (
    <div>
     <div>
     <div>
      <nav className="navbar h-12 pt-2 w-full sm:w-auto sm:mx-auto md:w-55% px-4 md:ml-[298px]">
        <ul className="flex space-x-4 ">
          <li>
            <a href="#home" className="transition duration-300">Home</a>
          </li>
          <li>
            <a href="#about" className="transition duration-300">About</a>
          </li>
          <li>
            <a href="#Product" className="transition duration-300">Product</a>
          </li>
          <li>
            <a href="#payment" className="transition duration-300">Payment</a>
          </li>
          <li>
            <a href="#feedback" className="transition duration-300">Feedback</a>
          </li>
          {/* <li>
            <a href="#Enquiry" className="transition duration-300">Enquiry</a>
          </li> */}
        </ul>
      </nav>
    </div>

</div>


      <ScrollSpy>
      
        <div className="container cardcontainer sm:w-[100%] md:w-[50%] lg:w-[50%] xl:w-[50%]  m-auto">
          <div id="home" className=''>
            <Home></Home>
          </div>
         
          <div id="about" className='cardcontainer'>
            <About></About>
          </div>

          <div id="Product" className='cardcontainer'>
            <ProductLInks></ProductLInks>
          </div>
         
          <div id="payment" className='cardcontainer pt-1 mb-4 mt-2'>
          
            <PaymentOnline></PaymentOnline>
          </div>
          
          <div id="Enquiry" className='pt-1'>
          <Feedback></Feedback>
        </div>

          
        <div id="Enquiry" className='pt-1'>
          <Enquiry></Enquiry>
        </div>


        <div id="payment" className='cardcontainer pt-1'>
          
          <Last></Last>
        </div>
        </div>

      </ScrollSpy>
    </div>
  );
};

export default Navbar;
