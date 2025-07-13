import React from 'react'
import men5 from "../../assets/men5.png"
import women5 from "../../assets/women5.png"
import { Link } from 'react-router-dom'

const GenderCollection = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 md:px-6 lg:px-8">
                {/* Women's Collection */}
                <div className="relative w-full md:flex-1 h-[400px] sm:h-[480px] lg:h-[500px] overflow-hidden">
                    <img
                        src={women5}
                        alt="Women's Collection"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-[clamp(0.75rem,2vw,1.25rem)] py-[clamp(0.5rem,1.5vw,1rem)] flex flex-col min-w-[150px]">
                        <h2 className="text-[clamp(1.125rem,2vw,1.75rem)] font-bold text-gray-900 mb-3 whitespace-nowrap">
                            Women's Collection
                        </h2>
                        <Link
                            to="/collections/all?gender=women"
                            className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-900 underline"
                        >
                            Shop Now
                        </Link>

                    </div>
                </div>

                {/* Men's Collection */}
                <div className="relative w-full md:flex-1 h-[400px] sm:h-[480px] lg:h-[500px] overflow-hidden">
                    <img
                        src={men5}
                        alt="Men's Collection"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-[clamp(0.75rem,2vw,1.25rem)] py-[clamp(0.5rem,1.5vw,1rem)] flex flex-col min-w-[150px]">
                        <h2 className="text-[clamp(1.125rem,2vw,1.75rem)] font-bold text-gray-900 mb-3 whitespace-nowrap">
                            Men's Collection
                        </h2>
                        <Link
                            to="/collections/all?gender=women"
                            className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-900 underline"
                        >
                            Shop Now
                        </Link>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default GenderCollection