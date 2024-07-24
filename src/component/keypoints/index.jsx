import React from "react";
import "./style.js";
import Wrapper from "./style.js";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
import pic5 from "./pic5.png";

export const KeyPoint = () =>{

    const arrs = [
        { icon: pic1,description:'Best prices & offers'},
        { icon: pic2,description:'Pay on Delivery'},
        { icon: pic3,description:'Easy Return'},
        { icon: pic4,description:'On time Delivery'},
        { icon: pic5,description:'Great daily deal'}
      ];

 return(
  <Wrapper>
        <div className="points">
            {arrs.map((arr, index) => (
                <div className="point1" key={index}>
                <img src={arr.icon} alt="none" />
                <div className="theory">
                <h3>{arr.description}</h3>
                <p>Orders or more</p>
                </div>
                </div>
            ))}
        </div>
  </Wrapper>
 );
};

 export default KeyPoint;