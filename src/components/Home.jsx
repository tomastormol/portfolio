import React, { useState, useEffect } from 'react';
import background from '../assets/B3.jpg';
import { BsMouse } from "react-icons/bs";

export const Home = () => {
    // Estado para almacenar la posición del desplazamiento vertical
    const [scrollPosition, setScrollPosition] = useState(0);

    // Función para actualizar la posición del desplazamiento
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    // Suscribirse al evento de desplazamiento cuando el componente se monta
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calcula la transformación CSS para el efecto de parallax
    const parallaxStyle = {
        transform: `translateY(${scrollPosition * 0.5}px)` // Ajusta el factor de parallax según sea necesario
    };

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Contenedor para el efecto de parallax */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0" style={parallaxStyle}>
                    <img src={background} className="absolute inset-0 w-full h-full object-cover" alt="Background" />
                </div>
            </div>
            {/* Contenido centrado */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Tomas Tortosa</h1>
                    <p className="text-sm md:text-base lg:text-lg">FRONTEND DEVELOPER</p>
                </div>
            </div>
            {/* Icono de flecha hacia abajo para indicar el scroll */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
                <BsMouse className="text-xl animate-bounce" />
            </div>
        </div>
    );
}