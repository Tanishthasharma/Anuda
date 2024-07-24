import React, { useState } from "react";
import Wrapper from "./style.js";
import Blocks from "./Blocks.jpg";
import Bricks from "./bricks.jpg";
import Cement from "./cement.jpg";
import Electronic from "./electronic.jpg";
import Flooring from "./flooring.jpg";
import flooring from "./flooring copy.jpg";
import Piping from "./piping.jpg";
import Bajri from "./bajri.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";

export const TopCategories = () => {
  const deals = [
    { name: "Bricks", icon: Bricks, description: "Starting Red Bricks", price: "₹110", sale: "37% off" },
        { name: "Blocks", icon: Blocks, description: "Starting Cement Blocks", price: "₹220", sale: "37% off" },
        { name: "Cement", icon: Cement, description: "Starting Cement", price: "₹310", sale: "35% off" },
        { name: "Flooring", icon: Flooring, description: "Starting Steel & Iron", price: "₹455", sale: "37% off" },
        { name: "Electronics", icon: Electronic, description: "Up to 65% off Clearance", price: "₹1850", sale: "47% off" },
        { name: "Bricks", icon:Bajri, description: "Starting Red Bricks", price: "₹110", sale: "37% off" },
        { name: "Blocks", icon: flooring, description: "Starting Cement Blocks", price: "₹220", sale: "37% off" },
        { name: "Cement", icon: Cement, description: "Starting Cement", price: "₹310", sale: "35% off" },
        { name: "Flooring", icon: Flooring, description: "Starting Steel & Iron", price: "₹455", sale: "37% off" },
        { name: "Electronics", icon: Piping, description: "Up to 65% off Clearance", price: "₹1850", sale: "47% off" }
        
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

  return (
    <Wrapper>
      <div className="deal1">
        <div>
          <h2>Top Categories</h2>
        </div>
        <div className="arrow">
          <div className="leftarrow" onClick={handlePrevClick}>
            <FaArrowLeft className="left" size={26} color="gray" />
          </div>
          <div className="rightarrow" onClick={handleNextClick}>
            <FaArrowRight className="right" size={26} color="gray" />
          </div>
        </div>
      </div>

      <div className="deal2">
        {currentDeals.map((deal, index) => (
          <div className="deal" key={index}>
            <div className="image-wrapper">
              <img src={deal.icon} alt={deal.name} className="icon" />
              <div className="sale-badge">{deal.sale}</div>
            </div>
            <h4>{deal.name}</h4>
            <p>{deal.description}</p>
            <h5>
              Seller By: <span>Rajesh Rangid</span>
            </h5>
            <div className="stars">
              {[...Array(5)].map((_, starIndex) => {
                const rating = 4;
                return <FaStar key={starIndex} size={24} color={rating > starIndex ? "#F2C265" : "#a9a9a9"} />;
              })}
            </div>
            <div className="pricing">
              <p>{deal.price}</p>
              <button type="button" className="addcart">
                <HiOutlineShoppingBag size={24} />
                <p>Add</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default TopCategories;
