import React from 'react';
import 'tailwindcss/tailwind.css';

function Test() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-3xl font-bold">FAST REACT PIZZA CO.</h1>
        <p className="mb-4 text-xl">23 PIZZAS</p>
        <p className="mb-4 text-xl">$23.45</p>
        <input
          type="text"
          placeholder="Search Order #"
          className="mb-4 w-full rounded-md border-2 border-gray-300 p-2"
        />
        <h2 className="mb-4 text-2xl">The best pizza.</h2>
        <p className="mb-4 text-lg">
          Straight out of the oven, straight to you.
        </p>
        <h3 className="mb-4 text-xl">
          Welcome! Please start by telling us your name:
        </h3>
        <input
          type="text"
          placeholder="Your full name"
          className="mb-4 w-full rounded-md border-2 border-gray-300 p-2"
        />
        <button className="mt-4 rounded-md bg-blue-500 p-2 text-white">
          OPEN CART →
        </button>
      </div>
    </div>
  );
}

export default Test;
