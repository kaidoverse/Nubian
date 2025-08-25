import React, { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../component/products/FilterSidebar';
import SortOptions from '../component/products/SortOptions';
import ProductGrid from '../component/products/ProductGrid';

const CollectionPage = () => {
    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const fetchProducts = [
                {
                    _id: 1,
                    name: "Product 1",
                    price: 100,
                    images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Product 1" }],
                },
                {
                    _id: 2,
                    name: "Product 2",
                    price: 120,
                    images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Product 2" }],
                },
                {
                    _id: 3,
                    name: "Product 3",
                    price: 130,
                    images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Product 3" }],
                },
                {
                    _id: 4,
                    name: "Product 4",
                    price: 140,
                    images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Product 4" }],
                },
                {
                    _id: 5,
                    name: "Product 5",
                    price: 150,
                    images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Product 5" }],
                },
                {
                    _id: 6,
                    name: "Product 6",
                    price: 160,
                    images: [{ url: "https://picsum.photos/500/500?random=8", altText: "Product 6" }],
                },
                {
                    _id: 7,
                    name: "Product 7",
                    price: 170,
                    images: [{ url: "https://picsum.photos/500/500?random=9", altText: "Product 7" }],
                },
                {
                    _id: 8,
                    name: "Product 8",
                    price: 180,
                    images: [{ url: "https://picsum.photos/500/500?random=10", altText: "Product 8" }],
                },
            ];
            setProducts(fetchProducts);
        }, 1000);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row">
            {/* Mobile Filter Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden border p-2 flex justify-center items-center"
            >
                <FaFilter className="mr-2" /> Filter
            </button>

            {/* Filter Sidebar */}
            <div
                ref={sidebarRef}
                className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
            >
                <FilterSidebar />
            </div>

            {/* Products Grid */}
            {/* <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white shadow rounded p-3 flex flex-col items-center"
                    >
                        <img
                            src={product.images[0].url}
                            alt={product.images[0].altText}
                            className="w-full h-48 object-cover rounded mb-2"
                        />
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-gray-500">${product.price}</p>
                    </div>
                ))}
            </div> */}
            <div className='flex-grow p-4'>
                <h2 className='text-2xl uppercase mb-4'>
                    All Collection
                </h2>

                {/*sort options*/}
                <SortOptions />

                {/*products grid*/}
                <ProductGrid products={products} />
            </div>
        </div>
    );
};

export default CollectionPage;
