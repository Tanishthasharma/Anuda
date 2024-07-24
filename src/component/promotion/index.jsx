import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./style.js";
import brick from './brick.png';
import pic from './pic.png';


export const Promotion = () =>{
   return(
    <Wrapper>
        <div className="div1">
            <div className="theory1">
            <h1>Buy & Sell Construnction Material At <span>Best Price</span> </h1>
            <p>Save upto 50% on your first Order</p>
            <Link to="/shop">
            <button type="Success"><p>Shop Now</p></button>
            </Link>
            </div>
            <div className="image1" >    
             <img src={pic} alt="pipes" className="pic1"/> 
            </div>
       </div>
    <div className="div2">
      <div className="theory2">
            <h1>Buy & Sell Construnction Material </h1>
            <Link to="/shop">
            <button type="Success"><p>Shop Now</p></button>
            </Link>
            </div>
            <div className="image2" > 
            <img src={brick} alt="bricks" className="brick"/>
            </div>
   
    </div>
    </Wrapper>
    
   );
};

export default Promotion;