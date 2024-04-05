import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProviderCards() {

    const navigate = useNavigate()


    return (
        <section className=" relative w-screen bg-white tails-selected-element" contentEditable="true">
            <div className=" absolute w-screen h-32 bg-gradient-to-b from-gray-100 to-white"></div>
            <div className=" relative w-screen px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
                <h1 className="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">
                    <a href="#_">Here are the providers</a>
                </h1>
                <p className="text-lg font-medium w-screen text-gray-500 sm:text-2xl">You can add as many providers as you want for DebtPaid to pay for you and to keep your payments up to date.</p>
                <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
                    <div className="grid grid-cols-12 col-span-12 gap-7">

                        <div onClick={() => navigate("/mi-luma")} className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                            <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                <img className="object-cover w-screen shadow-sm max-h-56" src="https://pbs.twimg.com/profile_images/1555260401901780992/tubkVHsv_400x400.jpg" />
                            </a>
                        </div>
                        <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                            <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                <img className="object-cover w-screen shadow-sm max-h-56" src="https://i0.wp.com/aldia.microjuris.com/wp-content/uploads/2013/05/aaa.jpg?resize=1800%2C1200&quality=89&ssl=1" />
                            </a>
                        </div>
                        <div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                            <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                                <img className="object-cover w-screen shadow-sm max-h-56" src="https://recommerce-static.recharge.com/media/cache/product_card/27/6e/f4a3b7e46be9234663ac4d86bf6f.png" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProviderCards;
