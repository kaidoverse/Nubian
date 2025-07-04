import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import React from 'react'

const Topbar = () => {
    return (
        <div className="bg-black text-white">
            <div className='container mx-auto flex  justify-between items-center py-3 px-6'>

                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="hover:text-gray-300">
                        <TbBrandMeta className='h-5 w-5' />
                    </a>

                    <a href="#" className="hover:text-gray-300">
                        <IoLogoInstagram className='h-5 w-5' />
                    </a>

                    <a href="#" className="hover:text-gray-300">
                        <RiTwitterXLine className='h-4 w-4' />
                    </a>
                </div>

                <div className="text-sm text-center flex-grow">
                    <span>
                        we ship worldwide - fast and reliable shipping!
                    </span>
                </div>

                <div className="text-sm hidden md:block" >
                    <a href="tel:233543608711" className="hover:text-gray-300">+233 (543) 608-711</a>
                </div>
            </div>


        </div>
    )
}

export default Topbar