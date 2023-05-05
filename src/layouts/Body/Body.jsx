import React from 'react';
import './Body.css'
import PopularRecipes from '../PopularRecipes/PopularRecipes';
const Body = () => {
    return (
        <div>
            <div>
            <section id="banner-section">
                <div className="banner-contents">
                    <h1>Ranna Ghor Hotel and Restaurant </h1>
                    <p>20% discounts for Take away</p>
                    <button className="btn1" id="orderButton">Order Now</button>
                </div>
            </section>
           <PopularRecipes></PopularRecipes>
            </div>
        </div>
    );
};

export default Body;