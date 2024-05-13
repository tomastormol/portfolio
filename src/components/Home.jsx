import React from 'react';
import background from '../assets/B3.jpg';
import { BsMouse } from "react-icons/bs";

export const Home = () => {
    return (
        <div className="relative h-screen">
            <img src={background} className="absolute inset-0 w-full h-full object-cover" alt="Background" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Tomas Tortosa</h1>
                    <p className="text-sm md:text-base lg:text-lg">FRONTEND & AI DEVELOPER</p>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
                <BsMouse className="text-xl animate-bounce" />
            </div>
        </div>
    );
}