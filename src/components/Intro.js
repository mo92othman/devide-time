import React from 'react';
import { Link } from 'react-router-dom';
import MoneyImage from '../assets/money.jpg';

function Intro() {
  return (
    <div
      className="bg-cover bg-center h-80 md:h-screen mx-auto text-white text-center flex flex-col justify-center"
      style={{ backgroundImage: `url(${MoneyImage})` }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Divide-Time!</h1>
      <p className="max-w-md mx-auto">
        Streamline your shared expenses effortlessly! Add events, invite
        friends, record payments, and let Divide-Time calculate who owes what.
        Simplify your financial dynamics and enjoy hassle-free bill splitting.
      </p>

      <Link to="/profile">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-12">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Intro;
