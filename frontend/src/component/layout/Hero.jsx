import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import heroImg1 from "../../assets/heroimg1.webp";
import heroImg2 from "../../assets/heroimg2.webp";
import heroImg3 from "../../assets/heroimg3.webp";





const Hero = () => {
    const images = [
        {
            src: heroImg1,
            text: 'Discover the latest trends in fashion',
            buttonText: 'Shop Now',
            path: '/shop',
        },
        {
            src: heroImg2,
            text: 'Vacation-ready outfits, now in stock',
            buttonText: 'Explore',
            path: '/vacation',
        },
        {
            src: heroImg3,
            text: 'Bold. Confident. Nubian.',
            buttonText: 'Browse Collection',
            path: '/collection',
        },
    ];

    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const timerRef = useRef(null);

    const startAutoSlide = () => {
        timerRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length)
        }, 8000)
    }

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(timerRef.current)
    }, [])

    const handleDotClick = (index) => {
        setActiveIndex(index);
        clearInterval(timerRef.current)
        startAutoSlide()
    }


    return (
        <section className="relative w-full h-[90vh] overflow-hidden">
            {/* Background Images */}
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img.src}
                    alt={img.text}
                    className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out
            ${activeIndex === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
                />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 z-20" />

            {/* Hero Text */}
            <div className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-12 text-center px-6 transition-all duration-700">

                <h1
                    key={activeIndex}
                    className="text-white text-2xl md:text-5xl font-bold max-w-3xl mx-auto opacity-0 animate-fadeInUp"
                >
                    {images[activeIndex].text}
                </h1>
                <button
                    className="mt-6 bg-white text-gray-900 px-6 py-3 rounded hover:bg-gray-200 transition-colors duration-300"
                    onClick={() => navigate(images[activeIndex].path)}
                >
                    {images[activeIndex].buttonText}
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-40">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 
              ${activeIndex === index ? 'bg-white scale-110' : 'bg-white/40'}`}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
