import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {


  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col flex-wrap items-center justify-between py-7 mx-auto md:flex-row max-w-7xl">
          
          <div className="relative flex flex-col md:flex-row">
            <Link to="/" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-2xl font-black leading-none text-gray-500 select-none">DebtPaid</span>
            </Link>
           
          </div>

          <div className="inline-flex items-center ml-5 text-lg space-x-6 lg:justify-end">
            <Link to="/login" className="text-base font-medium leading-6 text-gray-400 hover:text-gray-300 whitespace-no-wrap transition duration-150 ease-in-out">Login</Link> 
            <Link to="/signup" className="inline-flex items-center justify-center px-4 py-2 font-medium leading-6 text-gray-200 hover:text-white whitespace-no-wrap bg-gray-800 border border-transparent rounded shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">Signup</Link>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col pt-20 md:pt-40 lg:pt-20">
          <div className="w-full lg:w-1/2 flex lg:px-0 px-5 flex-col md:items-center lg:items-start justify-center -mt-12">
            <h1 className="text-black text-3xl sm:text-5xl lg:max-w-none max-w-4xl lg:text-left text-left md:text-center xl:text-7xl font-black">Pay Your Bills with <span className="bg-clip-text text-transparent bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-700 mt-1 lg:block">DebtPaid</span></h1>
            <p className="text-gray-500 sm:text-lg md:text-xl xl:text-2xl lg:max-w-none max-w-2xl md:text-center lg:text-left lg:pr-32 mt-6">DebtPaid makes it simple to manage and pay your bills online. Sign up now and streamline your bill-paying process.</p>
            <Link to="/signup" className="bg-black text-white px-12 lg:px-16 py-4 text-center lg:py-5 font-bold rounded text-lg md:text-xl lg:text-2xl mt-8 inline-block w-auto">Signup</Link>
          </div>
          <div className="w-full lg:w-1/2 relative lg:mt-0 mt-20 flex items-center justify-center">
            <img src="https://cdn.devdojo.com/images/march2022/mesh-gradient1.png" className="absolute lg:max-w-none max-w-3xl mx-auto mt-32 w-full h-full inset-0" alt="mesh-gradient"/>
            <img src="https://img.freepik.com/fotos-premium/fotografia-hombre-feliz-pagando-facturas-linea-computadora-portatil-sala-estar-compras-linea_46383-6493.jpg" className="w-full md:w-auto w-72 max-w-md max-w-sm ml-4 md:ml-20 lg:ml-0 xl:max-w-lg relative" alt="hero-person"/>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default HomePage;

