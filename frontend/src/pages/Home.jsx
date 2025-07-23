import React from 'react'
import Hero from '../component/layout/Hero'
import GenderCollection from '../component/products/GenderCollection'
import NewArrivals from '../component/products/NewArrivals'
import ProductDetails from '../component/products/ProductDetails'

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
        </div>
    )
}

export default Home