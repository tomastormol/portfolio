import React, { useEffect, useState } from 'react';

const SiteUnderDevelopment = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to my Portfolio!</h2>
                <p className="text-lg text-gray-700 mb-6">This website is currently being developed. Check back soon for updates!</p>
            </div>
        </div>
    );
};

export default SiteUnderDevelopment;
