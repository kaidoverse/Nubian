import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PayButton from './PayButton';

const Cart = {
    products: [
        {
            name: "Product 1",
            size: "M",
            color: "Red",
            price: 29.99,
            image: "https://picsum.photos/150?random=1",

        },
        {
            name: "Product 1",
            size: "M",
            color: "Red",
            price: 29.99,
            image: "https://picsum.photos/150?random=1",

        },
    ],
    totalPrice: 59
};

const Checkout = () => {

    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null);
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        addressLine1: "",
        city: "",
        postalCode: "",
        country: "",
        phoneNumber: ""
    });

    const handleCreateCheckout = (e) => {
        e.preventDefault();
        // Simulate checkout creation
        setCheckoutId(123);
        // dont forget to send the shippingAddress and cart details to backend here.
        // redirect to a payment gateway or confirmation page.
        navigate('/payment');
    }

    const handlePaymentSuccess = (details) => {
        console.log("payment succesfull", details);
        navigate('/order-confirmation');
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
            {/* Shipping Details Form */}
            <div className='bg-white rounded-lg p-6'>
                <h2 className='text-2xl uppercase mb-6'>Checkout</h2>
                <form onSubmit={handleCreateCheckout}>
                    <h3 className='text-lg mb-4'>
                        Contact Details
                    </h3>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>
                            Email
                        </label>
                        <input type="email" value="user@email.com" className='w-full p-2 border rounded' disabled />
                    </div>
                    <h3 className='text-lg mb-4'>
                        Delivery
                    </h3>
                    <div className='mb-4 grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-gray-700'>
                                First Name
                            </label>
                            <input type="text"
                                value={shippingAddress.firstName}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
                                className='w-full p-2 border rounded' required />
                        </div>
                        <div>
                            <label className='block text-gray-700'>
                                Last Name
                            </label>
                            <input type="text"
                                value={shippingAddress.lastName}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
                                className='w-full p-2 border rounded' required />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Address</label>
                        <input type="text" value={shippingAddress.addressLine1} onChange={(e) => setShippingAddress({ ...shippingAddress, addressLine1: e.target.value })} className='w-full p-2 border rounded' required />
                    </div>
                    <div className='mb-4 grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-gray-700'>
                                City
                            </label>
                            <input type="text"
                                value={shippingAddress.city}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                                className='w-full p-2 border rounded' required />
                        </div>
                        <div>
                            <label className='block text-gray-700'>
                                Postal Code
                            </label>
                            <input type="text"
                                value={shippingAddress.postalCode}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                                className='w-full p-2 border rounded' required />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Country</label>
                        <input type="text" value={shippingAddress.country} onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })} className='w-full p-2 border rounded' required />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Phone Number</label>
                        <input type="text" value={shippingAddress.phoneNumber} onChange={(e) => setShippingAddress({ ...shippingAddress, phoneNumber: e.target.value })} className='w-full p-2 border rounded' required />
                    </div>
                    <div className='mt-6'>
                        {!checkoutId ? (
                            <button type='submit' className='w-full bg-black text-white py-3 rounded'>Continue to Payment</button>
                        ) : (
                            <div>
                                <h3 className='text-lg mb-4'>
                                    Pay with Paypal
                                </h3>
                                <PayButton amount={100} onSuccess={handlePaymentSuccess} onError={(err) => alert("payment failed. Try again")} />
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout



