import React, { useEffect, useState } from 'react';
import Home from './main/Home';
import Cart from './components/Cart';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import productData from './data/productData.json';
import ProductList from './components/ProductList';
import About from './components/About';

function App() {
  const addToCart = (product) => {
    setCart([...cart,product]);
  }

  const [cart,setCart] = useState(()=>{
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart]);

  const removeFromCart = (itemId)=>{
    const updatedCart = cart.filter(item=>item.id !== itemId);
    setCart(updatedCart);
  } 

  //REACT ROUTER DOM
  const router = createBrowserRouter([
    {
      path: "/fitfuel",
      element: <Home cart={cart} setCart={setCart} productData={productData}/>,
    },
    {
      path: "/fitfuel/cart",
      element: <Cart cart={cart} setCart={setCart} onRemoveItem={removeFromCart}/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/fitfuel/product",
      element: <ProductList/>,
    },
    {
      path:"/product/:id",
      element: <ProductDetail productData={productData} addToCart={addToCart}/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
