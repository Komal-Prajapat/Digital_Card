import React from 'react';
import PhoneNumberQRCode from './PhoneNumberQRCode'; // Adjust the import path based on your project structure
import QRCode from 'qrcode.react'; // Import the QRCode component
import './payment.css';

const PaymentOnline = () => {
  const phoneNumber = '+91 9893785834';
  const paytmNumber = '+91 74156-64456';
  const phonePeNumber = '+91 74156-64456';
  const googlePayNumber = '+91 74156-64456';

  // Bank information
  const bankName = 'ICICI BANK';
  const ifscCode = 'ICIC000094';
  const accountHolderName = 'Mr. Pranay Gupta';
  const accountNumber = '09450500070';
  const accountType = 'Current Account';

  return (
    <div className="payment_container">
      <h1 className=" hover:text-2xl text-3xl text-center font-bold mb-3">PAYMENT ONLINE</h1>
      
              <hr className='mb-3 bg-black h-1 font-bold w-[210px] m-auto 
              hover:w-[200px]'></hr>

      <div className="whitebox bg-gray-100 w-[96%] m-auto text-black rounded p-6">
        <div className="payment-numbers-container">
          <div className="payment-number flex mb-4">
            <h3 className='font-bold'>Paytm Number:</h3>
            <p className='ml-4'>{paytmNumber}</p>
          </div>
          <div className="payment-number flex mb-4">
            <h3 className='font-bold'>Phone Pe Number:</h3>
            <p className='ml-4'>{phonePeNumber}</p>
          </div>
          <div className="payment-number flex mb-4">
            <h3 className='font-bold'>Google Pay Number:</h3>
            <p className='ml-4'>{googlePayNumber}</p>
          </div>
        </div>

        <div className="bank-account-info-container mt-6">
          <h2 className='font-bold text-xl mb-3'>Bank Account Information</h2>
          <ul>
            <li><strong>Bank Name:</strong> {bankName}</li>
            <li><strong>IFSC code:</strong> {ifscCode}</li>
            <li><strong>Account Holder Name:</strong> {accountHolderName}</li>
            <li><strong>Account Number:</strong> {accountNumber}</li>
            <li><strong>Account Type:</strong> {accountType}</li>
          </ul>
        </div>

        <div className='mt-8'>
          <PhoneNumberQRCode phoneNumber={phoneNumber}/>
        </div>
      </div>
    </div>
  );
};

export default PaymentOnline;
