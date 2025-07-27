import React, { useEffect, useState } from 'react';

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const sampleOrders = [
                {
                    _id: "1234",
                    createdAt: new Date(),
                    shippingAddress: { city: "Accra", country: "Ghana" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: "https://picsum.photos/500/500?random=1"
                        }
                    ],
                    totalPrice: 100,
                    isPaid: true,
                },
                {
                    _id: "3234",
                    createdAt: new Date(),
                    shippingAddress: { city: "Kumasi", country: "Ghana" },
                    orderItems: [
                        {
                            name: "Product 2",
                            image: "https://picsum.photos/500/500?random=2"
                        }
                    ],
                    totalPrice: 400,
                    isPaid: false,
                }
            ];
            setOrders(sampleOrders);
        }, 1000);
    }, []);

    return (
        <div className='w-full'>
            <h2 className='text-xl sm:text-2xl font-bold mb-6'>My orders</h2>

            {/* Mobile View */}
            <div className='md:hidden space-y-4'>
                {orders.map((order) => (
                    <div key={order._id} className='bg-white shadow-md rounded-lg p-4 border'>
                        <div className='flex gap-4'>
                            {/* Image on the left */}
                            <div className='flex-shrink-0'>
                                <img
                                    src={order.orderItems[0].image}
                                    alt={order.orderItems[0].name}
                                    className='w-20 h-20 object-cover rounded-lg'
                                />
                            </div>

                            {/* All text content on the right */}
                            <div className='flex-1 min-w-0'>
                                <div className='flex justify-between items-start mb-2'>
                                    <p className='text-gray-800 font-semibold'>#{order._id}</p>
                                    <span className={`${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-2 py-1 rounded-full text-xs font-medium`}>
                                        {order.isPaid ? "Paid" : "Pending"}
                                    </span>
                                </div>

                                <p className='text-sm text-gray-500 mb-3'>
                                    {new Date(order.createdAt).toLocaleDateString()}, {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>

                                <div className='space-y-1 text-sm text-gray-700'>
                                    <p><span className='font-medium'>Shipping:</span> {order.shippingAddress.city}, {order.shippingAddress.country}</p>
                                    <p><span className='font-medium'>Items:</span> {order.orderItems.length}</p>
                                    <p className='text-base font-semibold text-gray-900 mt-2'>GH₵{order.totalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop Table */}
            <div className='hidden md:block relative shadow-md sm:rounded-lg overflow-x-auto'>
                <table className='min-w-full text-left text-gray-500'>
                    <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                        <tr>
                            <th className='py-3 px-4'>Image</th>
                            <th className='py-3 px-4'>Order ID</th>
                            <th className='py-3 px-4'>Created</th>
                            <th className='py-3 px-4'>Shipping Address</th>
                            <th className='py-3 px-4'>Items</th>
                            <th className='py-3 px-4'>Price</th>
                            <th className='py-3 px-4'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id} className='border-b hover:bg-gray-50'>
                                <td className='py-4 px-4'>
                                    <img
                                        src={order.orderItems[0].image}
                                        alt={order.orderItems[0].name}
                                        className='w-12 h-12 object-cover rounded-lg'
                                    />
                                </td>
                                <td className='py-4 px-4'>#{order._id}</td>
                                <td className='py-4 px-4'>
                                    {new Date(order.createdAt).toLocaleDateString()}, {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </td>
                                <td className='py-4 px-4'>
                                    {order.shippingAddress ? `${order.shippingAddress.city}, ${order.shippingAddress.country}` : "N/A"}
                                </td>
                                <td className='py-4 px-4'>{order.orderItems.length}</td>
                                <td className='py-4 px-4'>GH₵{order.totalPrice.toFixed(2)}</td>
                                <td className='py-4 px-4'>
                                    <span className={`${order.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"} px-2 py-1 rounded-full text-xs font-medium`}>
                                        {order.isPaid ? "Paid" : "Pending"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrdersPage;