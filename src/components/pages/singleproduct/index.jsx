import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./index.css"

const Singleproduct = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?limit=500`).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const productId = parseInt(id);
  const product = products.find(item => item.id === productId);

  return (
    <>
      <div className="card_wrapper">
        <h1 className=' text-primary d-flex items-center justify-content-center gap-3 '>SINGLE PRODUCT <ShoppingCartIcon className='text-info fs-1'/></h1>
        {product ? (
          <div className="card_s w-50 h-50 ps-5 " key={product.id}>
            <div className="card-left">
            <img src={product.image} alt={product.title} className='w-75' />
            </div>
            <div className="card_right">
            <h2 className='fs-5 text-secondary'>{product.title}</h2>
            <p className='fs-8 '>{product.description}</p>
            <p className='fs-6 text-primary'>Price: ${product.price}</p>
            <button className='btn btn-primary'>ADD TO CARD<AddShoppingCartIcon className='fs-5'/></button>
            </div>
          </div>
        ) : (
          <p>Product not found.</p>
        )}
         
      </div>
    </>
  );
}

export default Singleproduct;