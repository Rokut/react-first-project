import React from 'react'
import data from '../../data/data';
import './Product.css';

const Product = ({addToCart}) => {
  // console.log(data); 
  return (   
    <div className='itemList'> 
      {
        data.map((product, index) => (
        <div className='item' key={index}>
          <img src={product.imageUrl} className="card-image" alt=""/>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price} $</p>
          <button onClick={()=>addToCart(product)}>Buy</button>
          </div>
        ))
        }      
      </div>
  )
}


export default Product