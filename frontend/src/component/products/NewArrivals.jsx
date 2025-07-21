import React, { useState, useEffect, useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NewArrivals = () => {
    const scrollRef = useRef(null)
    const scrollAmount = 320

    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    const updateScrollButtons = () => {
        const container = scrollRef.current
        if (!container) return

        const { scrollLeft, scrollWidth, clientWidth } = container
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1)
    }

    const scroll = (direction) => {
        const container = scrollRef.current
        if (!container) return

        container.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const container = scrollRef.current
        if (!container) return

        updateScrollButtons()

        container.addEventListener('scroll', updateScrollButtons)

        return () => container.removeEventListener('scroll', updateScrollButtons)

    }, [])

    const products = [
        {
            _id: "1",
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }]
        },
        {
            _id: "2",
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Stylish Jacket" }]
        },
        {
            _id: "3",
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Stylish Jacket" }]
        },
        {
            _id: "4",
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Stylish Jacket" }]
        },
        {
            _id: "5",
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Stylish Jacket" }]
        },
        {
            _id: "6",
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Stylish Jacket" }]
        },
        {
            _id: "7",
            name: "Stylish Jacket",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Stylish Jacket" }]
        },
    ]

    return (
        <section className="py-16 px-4 lg:px-8">
            <div className="container mx-auto text-center mb-6">
                <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
                </p>
            </div>

            {/* Buttons and Carousel */}
            <div className="container mx-auto">
                {/* Buttons for desktop */}
                <div className="hidden md:flex items-center space-x-4 mb-4">
                    <button
                        className={`p-2 rounded-full border bg-white text-black shadow ${!canScrollLeft ? 'bg-gray-300 cursor-not-allowed' : 'bg-white'}`} onClick={() => canScrollLeft && scroll('left')}
                        disabled={!canScrollLeft}

                    >
                        <FiChevronLeft className="text-2xl" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="overflow-x-auto overflow-y-hidden flex space-x-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
                    >
                        {products.map((product) => (
                            <div
                                key={product._id}
                                className="flex-shrink-0 w-[75vw] sm:w-64 md:w-72 lg:w-80 relative cursor-pointer hover:scale-105 transition-transform duration-300"
                            >

                                <img
                                    src={product.images[0].url}
                                    alt={product.images[0].altText}
                                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
                                />

                                <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
                                    <Link to={`/product/${product._id}`} className="block">
                                        <h4 className="font-medium">{product.name}</h4>
                                        <p className="mt-1">₵{product.price}</p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className={`p-2 rounded-full border text-black shadow ${!canScrollRight ? 'bg-gray-300 cursor-not-allowed' : 'bg-white'}`}
                        onClick={() => canScrollRight && scroll('right')}
                        disabled={!canScrollRight}
                    >
                        <FiChevronRight className="text-2xl" />
                    </button>
                </div>

                {/* Mobile-only carousel without buttons */}
                <div className="md:hidden overflow-x-auto flex space-x-4">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="flex-shrink-0 w-[85vw] relative cursor-pointer"
                        >
                            <img
                                src={product.images[0].url}
                                alt={product.images[0].altText}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-3 rounded-b-lg">
                                <Link to={`/product/${product._id}`} className="block">
                                    <h4 className="font-medium text-sm">{product.name}</h4>
                                    <p className="mt-1 text-sm">₵{product.price}</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewArrivals
