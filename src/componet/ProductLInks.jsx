import React from "react";
import "./product.css";

const ProductLInks = () => {
  return (
    <>
      <div className="container bg-red-200">
        <div className="product bg-gray-100 sm:p-6 md:p-8 lg:p-1 xl:p-5 w-[95%] m-auto">
          <h1 className="hover:text-2xl text-3xl text-center font-bold mb-3">
            PRODUCT LINKS
          </h1>
          <hr className='mb-3 bg-black h-1 font-bold w-[210px] m-auto hover:w-[200px]'></hr>

          <div className="apps-info-container info">
            <div className="app-info mt-3 p-4 border rounded mb-6">
              <h2 className="font-bold text-xl mb-2">ECO - E-COMMERCE OSIYA</h2>
              <p className="text-gray-600">ECO - E-COMMERCE OSIYA MOBILE APP</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.isoftzone.osiya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg downlod_button bg-black w-full sm:w-[300px] text-white hover:text-blue-200 py-2 rounded cursor-pointer">
                  Download E-COMMERCE OSIYA
                </div>
              </a>
            </div>

            <div className="app-info mt-3 p-4 border rounded mb-6">
              <h2 className="font-bold text-xl mb-2">BOMBAY SUPARI</h2>
              <p className="text-gray-600">BOMBAY SUPARI MOBILE APP</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.isoftzone.bombaysupari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg downlod_button bg-black w-full sm:w-[300px] text-white hover:text-blue-200 py-2 rounded cursor-pointer">
                  Download BOMBAY SUPARI
                </div>
              </a>
            </div>

            <div className="app-info mt-3 p-4 border rounded mb-6">
              <h2 className="font-bold text-xl mb-2">BHAVESH HARDWARE</h2>
              <p className="text-gray-600">BHAVESH HARDWARE MOBILE APP</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.isoftzone.bhaveshhardware"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg downlod_button bg-black w-full sm:w-[300px] text-white hover:text-blue-200 py-2 rounded cursor-pointer">
                  Download BHAVESH HARDWARE
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLInks;
