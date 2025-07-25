import React from 'react'
import Hero from '../component/layout/Hero'
import GenderCollection from '../component/products/GenderCollection'
import NewArrivals from '../component/products/NewArrivals'
import ProductDetails from '../component/products/ProductDetails'
import ProductGrid from '../component/products/ProductGrid'
import FeaturedCollection from '../component/products/FeaturedCollection'
import FeaturedSection from '../component/products/FeaturedSection'

const placeholderProducts = [
    {
        _id: 1,
        name: "product 1",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Related Product 1" }],
    },
    {
        _id: 1,
        name: "product 2",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Related Product 2" }],
    },
    {
        _id: 1,
        name: "product 3",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Related Product 3" }],
    },
    {
        _id: 1,
        name: "product 4",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Related Product 4" }],
    },
    {
        _id: 1,
        name: "product 5",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Related Product 5" }],
    },
    {
        _id: 1,
        name: "product 6",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Related Product 6" }],
    },
    {
        _id: 1,
        name: "product 7",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=8", altText: "Related Product 7" }],
    },
    {
        _id: 1,
        name: "product 8",
        price: 100,
        images: [{ url: "https://picsum.photos/500/500?random=9", altText: "Related Product 8" }],
    },
]

const Home = () => {
    return (
        <div>
            <Hero />
            <GenderCollection />
            <NewArrivals />

            {/* best seller */}
            <h2 className='text-3x-l text-center font-bold mb-4'>
                Best Seller
            </h2>
            <ProductDetails />
            <div className='container mx-auto'>
                <h2 className='text-3xl text-center font-bold mb-4'>Top Wears for Women</h2>
                <ProductGrid products={placeholderProducts} />
            </div>
            <FeaturedCollection />
            <FeaturedSection />
        </div>
    )
}

export default Home