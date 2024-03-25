import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';

export default function ProductDetail({productData, addToCart}) {
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);

    const product = productData.find(product=>product.id === parseInt(id));

    const handleAddToCart = () => {
        // Assuming addToCart function is passed down as prop or you can implement context API or redux for state management
        addToCart({...product, quantity});
    };

    if(!product){
        return <div>Product not found</div>;
    }

  return (
    <div>
        <Header/>
        <div className='max-w-[1240px] mx-auto px-8'>
            <div className='flex flex-col py-10 w-full'>
                <div className='lg:flex lg:items-center lg:justify-center space-x-3'>
                    <div className='flex justify-center'>
                        <img 
                            src={require(`../${product.imagePath}`)} 
                            alt="whiskey" 
                            className='w-[350px] h-[300px] md:w-[300px] md:h-[300px] lg:h-[500px] lg:w-[500px]'
                            style={{
                            backgroundPosition:'center',
                            backgroundSize:'cover'
                            }}
                        />
                    </div>
                    <div className='flex flex-col py-8 lg:h-[500px] lg:w-[500px]'>
                        <h1 className='font-staatliches text-4xl py-4'>{product.title}</h1>
                        <div className='pb-4'>
                            <h1 className='text-xl font-staatliches'>Description</h1>
                            {product.description.split('\n').map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </div>
                        <div className='flex items-center space-x-5 pt-2'>
                            <h1 className='font-staatliches text-2xl text-black'>Price: </h1>
                            <h1 className='font-staatliches text-2xl text-black'>${(product.price*quantity).toFixed(2)}</h1>
                        </div>
                        <div className='flex items-center py-4'>
                            <h1 className='font-staatliches text-2xl text-black'>Quantity: </h1>
                            <input
                                id="quantity"
                                type="number"
                                value={quantity}
                                onChange={(e)=>setQuantity(Math.max(1,parseInt(e.target.value)))}
                                className='font-staatliches text-2xl text-center w-[70px]'
                            />
                        </div>
                        <button className='bg-[rgb(1,99,163)] w-full font-staatliches text-white py-2 text-2xl' onClick={handleAddToCart}>Add To Cart</button>
                    </div> 
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
