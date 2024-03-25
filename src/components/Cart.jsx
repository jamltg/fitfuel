import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Cart({cart, setCart, onRemoveItem}) {
    const [totalPrice,setTotalPrice] = useState(0);

    useEffect(() => {
        let sum = 0;
        cart.forEach(item => {
            sum += item.price * item.quantity;
        });
        setTotalPrice(sum);
    }, [cart]);

    const handleQuantityChange = (itemId, newQuantity) => {
        const validQuantity = Math.max(1,newQuantity);

        const updatedCart = cart.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: validQuantity };
            }
            return item;
        });
        setCart(updatedCart);
    };



  return (
    <div className='relative bg-[rgb(243,245,246)]'>
        <Header/>
        <div className='max-w-[1240px] px-8 mx-auto'>
            <h2 className='tracking-wider text-center text-3xl md:text-5xl font-staatliches py-5'>Cart</h2>
            <table className='w-full bg-white'>
                <thead className='hidden w-full lg:table-header-group'>
                    <tr className='text-2xl font-staatliches tracking-wider'>
                        <th className='text-center py-6'>Product</th>
                        <th className='text-center'>Quantity</th>
                        <th className='text-center'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item,index)=>(
                        <tr className='border border-gray-200'>
                            <td>
                                <div className='flex items-center'>
                                    <div className='py-4'>
                                        <img 
                                            src={require(`../${item.imagePath}`)} 
                                            alt="cart-product" 
                                            className='w-[150px] h-[100px] md:w-[250px] md:h-[200px]'
                                            style={{
                                            backgroundPosition:'center',
                                            backgroundSize:'cover'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <div className='font-staatliches lg:text-2xl text-black'>{item.title}</div>
                                        <div className='lg:hidden font-staatliches text-red-500 tracking-wider'>${item.price.toFixed(2)}</div>
                                        <div className='flex w-full justify-between space-x-3 lg:hidden'>
                                            <div className='flex w-full justify-around border-2 border-black lg:hidden'>
                                                <button 
                                                    className='font-bold text-xl h-full'
                                                    onClick={()=>{
                                                    const newQuantity = Math.max(1, item.quantity-1);
                                                    handleQuantityChange(item.id, newQuantity);
                                                    }}
                                                >
                                                -
                                                </button>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={item.quantity}
                                                    onChange={(e) => {handleQuantityChange(item.id,parseInt(e.target.value,10))}}
                                                    className='w-[30px] text-center'
                                                    style={{
                                                        MozAppearance:'textfield',
                                                        WebkitAppearance:'none'
                                                    }}
                                                />
                                                <button 
                                                    className='font-bold text-xl h-full'
                                                    onClick={()=>{
                                                    const newQuantity = Math.max(1, item.quantity+1);
                                                    handleQuantityChange(item.id, newQuantity);
                                                    }}
                                                >           
                                                +
                                                </button>
                                            </div>
                                            <div>
                                                <button onClick={() => onRemoveItem(item.id)} className='h-full px-6 font-staatliches border-2 border-black'>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='hidden lg:flex lg:justify-around lg:border lg:border-gray-200'>
                                    <button 
                                        className='font-bold text-xl h-full'
                                        onClick={()=>{
                                            const newQuantity = Math.max(1, item.quantity-1);
                                            handleQuantityChange(item.id, newQuantity);
                                        }}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const newQuantity = parseInt(e.target.value, 10);
                                            if(!isNaN(newQuantity)){
                                                handleQuantityChange(item.id,newQuantity);
                                            }
                                        }}
                                        className='w-[30px] text-center'
                                        style={{
                                            MozAppearance:'textfield',
                                            WebkitAppearance:'none',
                                            textAlign:'center',
                                        }}
                                    />
                                    <button 
                                        className='font-bold text-xl h-full'
                                        onClick={()=>{
                                            const newQuantity = Math.max(1, item.quantity+1);
                                            handleQuantityChange(item.id, newQuantity);
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className='hidden lg:flex lg:justify-center lg:pt-4'>
                                    <button onClick={() => onRemoveItem(item.id)} className='font-staatliches border-2 border-black px-2'>Remove</button>
                                </div>
                            </td>
                            <td>
                                <div className='hidden lg:block lg:text-center font-staatliches text-xl'><p>${(item.price * item.quantity).toFixed(2)}</p></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <div className='bg-white p-4 mt-4 space-y-4'>
                <h1 className='font-staatliches text-3xl tracking-wide'>TOTAL: ${totalPrice.toFixed(2)}</h1>
                <h1 className='font-staatliches text-xl tracking-wide'>Taxes and Shipping calculated at checkout</h1>
                <button className='text-white bg-[rgb(1,99,163)] w-full py-3 font-staatliches tracking-wider text-2xl'>Checkout</button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}


