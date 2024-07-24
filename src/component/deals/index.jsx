import React, { useState } from "react";
import "./style.js"
import Wrapper from "./style.js";
import left from "./left.jpg"
import right from "./right.jpg"
import Rodi from "./rodi.jpg"
import Plumbing from "./plumbing.jpg"
import Piping from "./piping.jpg"
import Flooring from "./flooring.jpg"
import Bajri from "./bajri.jpg"
import Star from "./star.jpg"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const Deals = () => {

  const colors = {
    orange: "#F2C265",
    grey: "#a9a9a9"
  };

    const deals = [
        { name: 'Rodi', icon: Rodi, description:'Rodi making and Filtration by Removing Dust',price:'₹1500',sale:'37% off'},
        { name: 'Plumbing', icon: Plumbing,description:'Plumbing and Sanitory Making Filteration',price:'₹1582',sale:'37% off'},
        { name: 'Piping', icon: Piping ,description:'Electronic pipes,Electronic Switches and Boxes',price:'₹1850',sale:'37% off'},
        { name: 'Flooring', icon: Flooring,description:'Flooring making Customizations and Reflex',price:'₹1895',sale:'37% off'},
        { name: 'Bajri', icon: Bajri ,description:'Bajri making and Filtration by Removing Dust',price:'₹1850',sale:'37% off'},
        { name: 'Rodi', icon: Rodi, description:'Rodi making and Filtration by Removing Dust',price:'₹1500',sale:'37% off'},
        { name: 'Plumbing', icon: Plumbing,description:'Plumbing and Sanitory Making Filteration',price:'₹1582',sale:'37% off'},
        { name: 'Piping', icon: Piping ,description:'Electronic pipes,Electronic Switches and Boxes',price:'₹1850',sale:'37% off'},
        { name: 'Flooring', icon: Flooring,description:'Flooring making Customizations and Reflex',price:'₹1895',sale:'37% off'},
        { name: 'Bajri', icon: Bajri ,description:'Bajri making and Filtration by Removing Dust',price:'₹1850',sale:'37% off'}
      ];

    const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  const totalItems = deals.length;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, deals.length - itemsPerPage));
  };

  const startIndex = currentIndex;
  const endIndex = (currentIndex + itemsPerPage) % totalItems;
  let currentDeals = [];

  if (endIndex > startIndex) {
    currentDeals = deals.slice(startIndex, endIndex);
  } else {
    currentDeals = [...deals.slice(startIndex), ...deals.slice(0, endIndex)];
  }


return(
    <Wrapper>
    <div className="deal1">
    <div><h2>Today's Deals</h2></div>
    <div className="arrow">
      <div className="leftarrow" onClick={handlePrevClick}>
      <FaArrowLeft className="left" size={26} color="gray"  />
      </div>
     <div className="rightarrow" onClick={handleNextClick}>
     <FaArrowRight className="right" size={26} color="gray"/>
     </div>
    </div>
   </div>

  <div className="deal2">
    {currentDeals.map((deal, index) => (
        <div className="deal" key={index}>
          
          <div className="image-wrapper">
              <img src={deal.icon} alt={deal.name} className="icon" />
              <div className="sale-badge">37% off</div>
            </div>
          <h4>{deal.name}</h4> 
          <p>{deal.description}</p>
          <div className="stars">
              {[...Array(5)].map((_, starIndex) => {
                const rating = 4; 
                return (
                  <FaStar
                    key={starIndex}
                    size={24}
                    color={(rating > starIndex) ? colors.orange : colors.grey}
                  />
                );
              })}
            </div>
          <div className="pricing">
            <p>{deal.price}</p>
            <button type="button" className="addcart"><HiOutlineShoppingBag size={24} /><p>Add</p></button>
          </div>
          </div>
      ))}
   </div>
    </Wrapper>
   
);
};

export default Deals;