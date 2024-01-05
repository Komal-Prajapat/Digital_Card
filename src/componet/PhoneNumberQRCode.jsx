import React from 'react';
import QRCode from 'qrcode.react';

const PhoneNumberQRCode = ({ phoneNumber }) => {
  const phoneNumberText = `tel:${phoneNumber}`;

  return (  
    <div className="phone-number-qr-code">
      <QRCode value={phoneNumberText} />
      <p>{phoneNumber}</p>
    </div>
  );
};

export default PhoneNumberQRCode;
