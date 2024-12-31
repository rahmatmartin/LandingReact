// File: App.js
import React from "react";
import "./App.css"; 
import Navbar from './components/Navbar';
import "tailwindcss/tailwind.css"; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      {/* Hero Section */}
      <header className="bg-green-900 text-white">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-6">Be Safe Controls Environment</h1>
            <p className="text-xl mb-8">
              Professionally optimize interdependent intellectual
              interoperable connect best practices.
            </p>
            <div>
              <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-white mr-4">Let’s Talk</button>
              <button className="bg-white hover:bg-gray-100 px-6 py-3 rounded text-green-900">Read More</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="./assets/banner2.jpeg"
              alt="Plant growing"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* Navigation Section */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-center space-x-8">
          <a href="#" className="hover:underline text-green-900 font-semibold">Ocean-Recycling</a>
          <a href="#" className="hover:underline text-green-900 font-semibold">Environmental</a>
          <a href="#" className="hover:underline text-green-900 font-semibold">Renewable-Energy</a>
          <a href="#" className="hover:underline text-green-900 font-semibold">Safe Environment</a>
        </div>
      </nav>

      {/* Award Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Environmental Sustainable Forever Green Future</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="p-4">
              <p className="text-2xl font-semibold text-green-800">Economic Benefits</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-semibold text-green-800">Safe Environment</p>
            </div>
          </div>
          <button className="mt-8 px-6 py-3 bg-green-800 hover:bg-green-900 text-white rounded">More About It</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Echofy Provide Environment Best Leading Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-6">Dirty Recycling</h3>
              <p className="text-gray-700">Solutions to attract networked improvements.</p>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-6">Safe Environment</h3>
              <p className="text-gray-700">Safe surroundings for sustainable growth.</p>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-6">Cleaning Oceans</h3>
              <p className="text-gray-700">Innovative ways for a clean environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Save the Planet Section */}
      <section className="bg-green-100 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h2 className="text-4xl font-bold mb-6">Getting a Greener Future</h2>
            <p className="mb-6 text-lg text-gray-700">Conversionly embrace out-of-the-box solutions for a safer planet.</p>
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-white">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 text-center">
            <img
              src="./assets/banner.jpeg"
              alt="Hands holding a plant"
              className="w-3/4 h-auto mx-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-green-900 text-white py-6 text-center">
        <p>&copy; 2024 Echofy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
