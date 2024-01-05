import React from 'react';
import './enquiry.css'
const Enquiry = () => {
  return (
    <>
      <div className="enquirycontainer">
            <div className="innerenquirycontainer" style={
                {
                   
                    width:"95%",
                    margin:"auto"
                }
            }>
            <form className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full mb-4 p-2 border rounded"
          /><br />
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full mb-4 p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Enter Message"
            className="w-full mb-4 p-2 border rounded"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full p-2 enquiryfrom color4 "
          >
          <span className='text-white'>  Send</span>
          </button>
        </form>
            </div>


      </div>
    </>
  );
};

export default Enquiry;
