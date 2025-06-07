import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="hero min-h-[60vh] bg-gradient-to-r from-blue-300 via-violet-200 to-pink-200">
            <div className="hero-content text-center">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl font-bold text-gray-800">Welcome to GadgetHeaven ✨</h1>
                    <p className="mb-5 text-lg text-gray-700">
                        Your go-to destination for the latest and greatest gadgets.
                    </p>
                    <button onClick={() => navigate('/dashboard')} className="btn btn-primary">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
