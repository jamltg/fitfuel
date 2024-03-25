import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

export default function ProductList({addToCart, cart, setCart, productData}) {

    const [products,setProducts] = useState(productData.slice(0,16));
    const [pageNumber,setPageNumber] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('');
  
    const productsPerPage = 8;
    const pagesVisited = pageNumber * productsPerPage;

    const handleCategoryChange = (e) => {
      setSelectedCategory(e.target.value);
      setPageNumber(0);
    }

     // Function to handle adding product to cart
     const handleAddToCart = (product) => {
      const existingCartItem = cart.find(item => item.id === product.id);
      if (existingCartItem) {
        // If the product already exists in the cart, update its quantity
        const updatedCart = cart.map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setCart(updatedCart);
      } else {
        // If the product is not in the cart, add it with quantity 1
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };
  

    const filteredProducts = selectedCategory ? products.filter((product) => product.category === selectedCategory) : products;

    const displayProducts = filteredProducts.slice(pagesVisited,pagesVisited+productsPerPage).map(product=>{
      return(
        <div key={product.id} className='border border-gray-300 py-4 bg-white'>
          <div>
            <Link to={`/product/${product.id}`}>
            <img 
              src={require(`../${product.imagePath}`)} 
              alt="whiskey" 
              className='w-[300px] h-[200px] md:w-[300px] md:h-[300px]'
              style={{
                backgroundPosition:'center',
                backgroundSize:'cover'
              }}
            />
            </Link>
          </div>
          <div className='px-3 h-[120px]'>
            <Link to={`/product/${product.id}`}>
              <h3 className='text-md md:text-xl text-left text-[rgb(167,167,167)] font-semibold h-auto pt-2'>{product.title}</h3>
            </Link>
          </div>
          <div>
            <p className='text-[rgb(1,99,163)] font-staatliches text-3xl text-center pt-2'>${product.price.toFixed(2)}</p>
          </div>
          <div className='justify-center flex pt-2'>
              <button onClick={()=>handleAddToCart(product)} className='px-4 py-1 rounded-xl hover:bg-black bg-[rgb(1,99,163)] text-white font-staatliches tracking-wider text-xl'>ADD TO CART</button>
          </div>
        </div>
      )
    })

    const pageCount = Math.ceil(filteredProducts.length/productsPerPage)

    const changePage = ({selected})=>{
        setPageNumber(selected);
    };


  return (
    <div className='w-full h-auto bg-[rgb(243,245,246)]' id="products">
        <div className='max-w-[1240px] mx-auto p-8'>
            <h1 className='text-3xl md:text-5xl font-staatliches tracking-wider text-center py-5'>Product List</h1>
            <select value={selectedCategory} onChange={handleCategoryChange} className='mb-4'>
              <option value=''>All Categories</option>
              <option value='whey-protein'>Whey Protein</option>
              <option value='creatine'>Creatine</option>
              <option value='bcaa/amino'>BCAA/Amino</option>
            </select>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
                {displayProducts}
            </div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName='flex space-x-4 text-2xl justify-center pt-4'
              previousLinkClassName='text-[rgb(1,99,163)] font-staatliches'
              nextLinkClassName='text-[rgb(1,99,163)] font-staatliches text-2xl'
              disabledClassName='font-staatliches'
              activeClassName='text-[rgb(1,99,163)] font-staatliches'
            />
        </div>
    </div>
  )
}
