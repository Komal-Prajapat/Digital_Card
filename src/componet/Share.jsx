import React, { useState } from 'react';

const Share = () => {
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [countryCode, setCountryCode] = useState('91'); // Default to India

  const shareOnWhatsApp = () => {
    const whatsappLink = `https://wa.me/${countryCode}${whatsappNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="container mx-auto mt-1 p-4">
      <div className="flex flex-col lg:flex-row lg:items-center">
        {/* Country Code Dropdown */}
        <select
  value={countryCode}
  onChange={(e) => setCountryCode(e.target.value)}
  className="mb-2 lg:mb-0 lg:mr-2 p-2 border border-gray-300 rounded w-full lg:w-10"
>
  <option value="91">+91</option>
  {/* Add more options as needed */}
</select>

        {/* Input for WhatsApp number */}
        <input
          type="tel"
          placeholder="Enter WhatsApp number"
          value={whatsappNumber}
          className="mb-2 lg:mb-0 p-2 border border-gray-300 rounded"
          onChange={(e) => setWhatsappNumber(e.target.value)}
        />

        {/* Share on WhatsApp button */}
        <button
          onClick={shareOnWhatsApp}
          className="color4 p-2 rounded lg:ml-2"
        ><span className='text-white'>
          Share on WhatsApp</span>
        </button>
        
      </div>
    </div>
  );
};

export default Share;
