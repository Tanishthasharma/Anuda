import React, { useEffect, useState } from "react";
import "./style.js"
import Wrapper from "./style.js";
import Plumbing from './Plumbing.png'
import electronicIcon from './Electronic.png';
import flooringIcon from './Flooring.png';
import rodiIcon from './rodi.png';
import cementIcon from './Cement.png';
import steelIronIcon from './Steel.png';
import bricksIcon from './Bricks.png';
import cementBlocksIcon from './CementBlocks.png';
import Flooring2 from './Flooring2.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import axios from "axios";
//import { MdOutlinePlumbing } from "react-icons/md";
export const Categories = () => {

    // const categories = [
    //     { name: 'Plumbing', icon:Plumbing },
    //     { name: 'Electronic', icon: electronicIcon },
    //     { name: 'Flooring', icon: flooringIcon },
    //     { name: 'Rodi', icon: rodiIcon },
    //     { name: 'Bajri', icon: rodiIcon },
    //     { name: 'Cement', icon: cementIcon },
    //     { name: 'Steel & Iron', icon: steelIronIcon },
    //     { name: 'Bricks', icon: bricksIcon },
    //     { name: 'Cement Blocks', icon: cementBlocksIcon },
    //     { name: 'Flooring', icon: Flooring2 },
    //     { name: 'Plumbing', icon:Plumbing },
    //     { name: 'Electronic', icon: electronicIcon },
    //     { name: 'Flooring', icon: flooringIcon },
    //     { name: 'Rodi', icon: rodiIcon },
    //     { name: 'Bajri', icon: rodiIcon },
    //     { name: 'Cement', icon: cementIcon },
    //     { name: 'Steel & Iron', icon: steelIronIcon },
    //     { name: 'Bricks', icon: bricksIcon },
    //     { name: 'Cement Blocks', icon: cementBlocksIcon },
    //     { name: 'Flooring', icon: Flooring2 }
    //   ];
   
      const [currentIndex, setCurrentIndex] = useState(0);
      const itemsPerPage = 10;
      const[categories,setCategories] = useState([]);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [productImgUrl, setProductImgUrl] = useState("");
       
  const fetchCategories = async () => {
    try {
      //setLoading(true);
      const response = await axios.get('http://192.168.29.130:3000/api/category');
      console.log(response.data);
      console.log(response.data.data);
       const categoryData = response.data.data;
      console.log(categoryData);
      setCategories(categoryData);
      setProductImgUrl(response.data.mediaUrl);
     // setLoading(false);
      } catch (error) {
        setError(error.message);
        //setLoading(false);
      }
    };

      useEffect(() => {
      fetchCategories();
    }, []);
     
    const totalItems = categories.length;
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      };
    
      const handleNextClick = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, categories.length - itemsPerPage));
      };
    
      const startIndex = currentIndex;
      const endIndex = (currentIndex + itemsPerPage) % totalItems;
      let currentCategories = [];
    
      if (endIndex > startIndex) {
        currentCategories = categories.slice(startIndex, endIndex);
      } else {
        currentCategories = [...categories.slice(startIndex), ...categories.slice(0, endIndex)];
      }

return(
    <Wrapper>
    <div className="category1">
    <div><h2>Categories</h2></div>
    <div className="arrow">
      <div className="leftarrow" onClick={handlePrevClick}>
      <FaArrowLeft className="left" size={26} color="gray"  />
      </div>
     <div className="rightarrow" onClick={handleNextClick}>
     <FaArrowRight className="right" size={26} color="gray"/>
     </div>
    </div>
   </div>

  <div className="category2">
    {currentCategories.map((category) => (
        <div className="category" key={category._id}>
          <img src={productImgUrl+category.icon} alt={category.name} className="Icon-Category"/>
        <h3>{category.name}</h3>
          </div>
      ))}
   </div>
    </Wrapper>
   
);
};

export default Categories;