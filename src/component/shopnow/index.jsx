import React from "react";
import './style.js';
import Wrapper from "./style.js";
import Pipes from "./pipe.png"
import Pipe2 from "./pipe2.png";
import rod from "./rod.png"
import { Link } from "react-router-dom";

export const ShopNow = () =>{
    const shops = [
        { description:<p>Up to 65% off<span>Clearance store</span></p>, icon:Pipes },
        { description:<p>Design your home<span>Anuda Mart</span></p>, icon:rod },
        { description:<p>Up to 30% off<span>Electronic pipe</span></p>, icon:Pipe2}
      ];
 return(
  <Wrapper>
    
   <div className="shopy">
                {shops.map((shop, index) => (
                    <div className="shop-item" key={index}>
                        <div className="shop">
                            {shop.description}
                           <button type="button" className="shopnow">Shop Now</button>
                        </div>
                        <div className="imageDiv">
                        <div className="pic">
                            <img src={shop.icon} alt="shop item" />
                        </div>
                        </div>
                    </div>
                ))}
            </div>
  </Wrapper>
 );
};

export default ShopNow;