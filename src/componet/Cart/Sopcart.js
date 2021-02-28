import React from 'react';

const Sopcart = (props) => {
 const Carte = props.cart;
 console.log(Carte);
const total = Carte.reduce((total, prod) => total+prod.price+prod.shipping , 0)


    return (
        <div>
            <h2>Order Summry</h2>
            <h4>Oder Items :{props.cart.length} </h4>
            <h4>shipping&Handling : {Math.round(total)}</h4>
            <h4>Tex : {Math.round(total/10)}</h4>
            <h3>Total : {Math.round(total/10+ total)}</h3>

        </div>
    );
};

export default Sopcart;