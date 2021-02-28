import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./product.css"




const Product =(props) => {
  const {name, img, seller, price, stock, shipping}= props.pro
 
 
    return (
        
        <div className = 'product'>
          <div className="continer-img">
            <img src= {img} alt=""/>
          </div>
          <div className="continer-text">
         <div className="con-min">
         <h3>{name}</h3>
                <p>by: {seller}</p> 
                <p>{price}</p>
                <p>noly {stock} left in stock -  order soon</p>
                <p>Shipping cost : {shipping}</p>
                <button onClick={()=>props.handelAdd(props.pro)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button> 
               
                
         </div>
         <div className="con-min">

         </div>
                

          </div>
      
            
        </div>
    );
};

export default Product;