import React, { useLayoutEffect, useState } from 'react';
import fakeData from "../../fakeData"
import Sopcart from '../Cart/Sopcart';
import Product from '../Product/Product';

import "./showpd.css"


const ShowPd = () => {
    const fake10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(fake10);
    const [cart, setCart] = useState([]);
   const handelButton = (pro) =>{
    console.log(pro);
    const newCart = [...cart, pro];
    setCart(newCart);
  
   }

    return (

        
        <div className = 'product-all'>
    
            <div className='continer-mine'>
            {  
                products.map(prduct => <Product pro ={prduct} handelAdd={handelButton} ></Product>)
            }
            </div> 
           <div className ="cart">
          <Sopcart cart ={cart} ></Sopcart>
           
    
           
            </div>
     
        </div>
    );
};

export default ShowPd;