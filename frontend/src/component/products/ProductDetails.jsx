import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const selectedProduct = {
    name: "Fall Jacket",
    price: 120,
    originalPrice: 150,
    description: "A stylish fall jacket perfect for chilly weather.",
    brand: "Fall Apparell",
    material: "Cotton Blend",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"],
    images: [
        { url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket 1" },
        { url: "https://picsum.photos/500/500?random=2", altText: "Stylish Jacket 2" }
    ],
}
const ProductDetails = () => {

    const [mainImage, setMainImage] = useState(selectedProduct.images[0].url);

    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantiy, setQuantity] = useState(1);
    const [isbuttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url)
        }

    }, [selectedProduct])
    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prev) => prev + 1)
        if (action === "minus" && quantiy > 1)
            setQuantity((prev) => prev - 1)

    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select size and color before adding to cart.", {
                duration: 1000,
                position: "top-right",
            });
            return;
        }

        setButtonDisabled(true);

        setTimeout(() => {
            toast.success("Product added to cart successfully!", {
                duration: 2000,
                position: "top-right",
            });
            setButtonDisabled(false);

        }, 1000);
    }

    return (
        <div className='p-6'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
                <div className='flex flex-col md:flex-row'>
                    {/* left thumbnails */}
                    <div className='hidden md:flex flex-col space-y-4 mr-6'>
                        {selectedProduct.images.map((image, index) => (
                            <img key={index} src={image.url} alt={image.altText || `thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                                onClick={() => setMainImage(image.url)} />
                        ))}
                    </div>
                    {/*main image */}
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img src={mainImage} alt="Main Product" className='w-full h-auto object-cover rounded' />
                        </div>
                    </div>
                    {/* mobile thumbnails */}
                    <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
                        {selectedProduct.images.map((image, index) => (
                            <img key={index} src={image.url} alt={image.altText || `thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                                onClick={() => setMainImage(image.url)} />
                        ))}
                    </div>
                    {/* right  side */}
                    <div className='md:w-1/2 md:ml-10'>
                        <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                            {selectedProduct.name}
                        </h1>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 mb-2'>

                            {selectedProduct.originalPrice && (
                                <p className='text-lg text-gray-400 line-through'>
                                    GH₵ {selectedProduct.originalPrice}
                                </p>
                            )}
                            <p className='text-xl text-gray-800 font-semibold'>
                                GH₵ {selectedProduct.price}
                            </p>
                        </div>

                        <div className='mb-4'>
                            <p className='text-gray-700 '>
                                Color:
                            </p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.colors.map((color) => (
                                    <button key={color} onClick={() => setSelectedColor(color)} className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`} style={{ backgroundColor: color.toLocaleLowerCase(), filter: "brightness(0.5)" }}></button>
                                ))}
                            </div>
                        </div>

                        <div className='mb-4'>
                            <p className='text-gray-700'>Size:</p>
                            <div className='flex gap-2 mt-2'>
                                {selectedProduct.sizes.map((size) => (
                                    <button key={size}
                                        onClick={() => setSelectedSize(size)} className={`px-4 py-2 border rounded  ${selectedSize === size ? "bg-black text-white" : ""}`}>
                                        {size}
                                    </button>
                                ))}

                            </div>
                        </div>
                        <div className='mb-6 '>
                            <p className='text-gray-700'>
                                Quantity:
                            </p>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button onClick={() => handleQuantityChange("minus")} className='px-2 py-1 bg-gray-200 text-lg'>
                                    -
                                </button >
                                <span className='text-lg'>
                                    {quantiy}
                                </span>
                                <button onClick={() => handleQuantityChange("plus")}
                                    disabled={isbuttonDisabled} className='px-2 py-1 bg-gray-200 text-lg'>
                                    +
                                </button>
                            </div>
                        </div>
                        <button onClick={handleAddToCart} className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isbuttonDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"}`}>
                            {isbuttonDisabled ? "Adding..." : "ADD TO CART"}
                        </button>

                        <div className='mt-10 text-gray-700'>
                            <h3 className='text-xl font-bold mb-4'>
                                Highlights:
                            </h3>
                            <table className='w-full text-left text-sm text-gray-600'>
                                <tbody>
                                    <tr>
                                        <td className='py-1'>Brand</td>
                                        <td className='py-1'>{selectedProduct.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className='py-1'>Material</td>
                                        <td className='py-1'>{selectedProduct.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails