import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactIcons = () => {
  const callNumber = (number) => {
    // Replace with your actual call functionality
    alert('Calling ' + number);
  };

  const openWhatsApp = (number) => {
    // Replace with your actual WhatsApp functionality
    alert('Opening WhatsApp with number: ' + number);
  };

  const openLocation = (location) => {
    // Replace with your actual location functionality
    const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(location)}`;
    window.open(googleMapsUrl, '_blank');
  };

  const openMail = (mailTo) => {
    // Replace with your actual mail functionality
    window.location.href = mailTo;
  };

  return (
    <div className="flex flex-wrap items-center justify-center bg-gray-100 rounded-full p-4 space-x-4 sm:justify-start sm:ml-9 lg:ml-[300px] mb-2">
      {/* Call icon */}
      <div className="text-blue-500 cursor-pointer hover:text-blue-700 text-center">
        <FontAwesomeIcon icon={faPhoneAlt} className="text-3xl" onClick={() => callNumber('+9893785834')} />
        <p className="text-xs">Call</p>
      </div>

      {/* WhatsApp icon */}
      <div className="text-green-500 cursor-pointer hover:text-green-700 text-center">
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" onClick={() => openWhatsApp('+9893785834')} />
        <p className="text-xs">WhatsApp</p>
      </div>

      {/* Location icon */}
      <div className="text-red-500 cursor-pointer hover:text-red-700 text-center">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl" onClick={() => openLocation('Your Location')} />
        <p className="text-xs">Location</p>
      </div>

      {/* Mail icon */}
      <div className="text-purple-500 cursor-pointer hover:text-purple-700 text-center">
        <FontAwesomeIcon icon={faEnvelope} className="text-3xl" onClick={() => openMail('mailto:komalprajapat267@mail.com')} />
        <p className="text-xs">Mail</p>
      </div>
    </div>
  );
};

export default ContactIcons;
