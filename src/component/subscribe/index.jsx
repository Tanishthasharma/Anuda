import React, { useState } from "react";
import "./style.js"
import Wrapper from "./style.js";
import pic1 from "./pic1.jpg";
import Send from "./sendicon.jpg";
import subscribe from "./subscibe.jpg"
export const Subscribe = () =>{

        const [inputValue, setInputValue] = useState('');
      
        const handleInputChange = (e) => {
            setInputValue(e.target.value);
        };

    return(
        <Wrapper>
            <div className="block">
                <div className="block1">
                    <h1>Stay Home & get your daily needs from our shop</h1>
                    <p>Start You'r Daily  Shopping with <span>Anuda Mart</span></p>
                        <div className="send">
                            <img src={Send} alt="nothing" />
                            <input id="inputField" type="text" value={inputValue} onChange={handleInputChange} placeholder="Your email address"/>
                            <button><p>Subscribe</p></button>
                        </div>
                </div>
                <div className="block2"><img src={pic1} alt="nothing"/></div>
            </div>
        </Wrapper>
    );
};