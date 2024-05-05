import React from 'react';
import background from '../assets/B3.jpg';

export const Home = () => {
    return (
        <div className="relative h-screen w-screen">
            <img src={background} className="absolute inset-0 w-full h-full object-cover" alt="Background" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white" style={{ marginTop: '-15%' }}>
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Tomas Tortosa</h1>
                    <p className="text-sm md:text-base lg:text-lg">FRONTEND DEVELOPER</p>
                </div>
            </div>
        </div>
    );
}
