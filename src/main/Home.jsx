import React from 'react';
import ProductList from '../components/ProductList';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Footer from '../components/Footer';
import About from '../components/About';

export default function Home({cart,setCart,productData}) {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <Info/>
        <ProductList cart={cart} setCart={setCart} productData={productData}/>
        <Footer/>
    </div>
  )
}
