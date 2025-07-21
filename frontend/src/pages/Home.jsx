import React from 'react'
import Hero from '../component/layout/Hero'
import GenderCollection from '../component/products/GenderCollection'
import NewArrivals from '../component/products/NewArrivals'

const Home = () => {
    return (
        <div>
            <Hero />
            <GenderCollection />
            <NewArrivals />
        </div>
    )
}

export default Home