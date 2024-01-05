import React, { useState } from 'react';
import './feedback.css'
const Feedback = () => {
  const [fullName, setFullName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the submission logic here (e.g., send feedback to a server).

    // Clear the form after submission
    setFullName('');
    setFeedback('');
    setRating(5);
  };

  return (
    <div className="max-w-md mx-auto p-6 fdform rounded-md shadow-md">
            <h1 className="hover:text-2xl text-3xl text-center font-bold mb-3">
            Give Feedback
          </h1>
          <hr className='mb-3 bg-black h-1 font-bold w-[210px] m-auto hover:w-[200px]'></hr>

      <div  className="bg-gray-100 w-full p-1 h-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptates maiores veniam incidunt quae ducimus. Aut ullam delectus amet quis error. Praesentium, optio!


      </div>


      
       {/* feedback form  */}
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-gray-600">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="feedback" className="block text-sm font-semibold text-gray-600">
            Feedback:
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-semibold text-gray-600">
            Select a Rating:
          </label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select> 
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 feedbackbutton  color4 " 
                  > 
        <span className='text-white'>  Submit Feedback</span>
        </button>
      </form>
    </div>
  );
};

export default Feedback;
