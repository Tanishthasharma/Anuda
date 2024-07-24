import React from "react";
import "./style.js"
import Wrapper from "./style.js";
import logo from "./logo.jpg";
import location from "./location.jpg";
import mail from "./mail.jpg";
import call from "./call.jpg";

export const Final = () =>{
    const adds =[
        {icon:location,description:'F 37-38,Govindam Tower,Kardhani,Govindpura Kalwar RadioNodeList,Jaipur,Rajasthan India-302012'},
        {icon:mail,description:'+91 9001602012'},
        {icon:call,description:'anudalive@gmail.com'}
    ]
  return(
    <Wrapper>
      <div className="part1">
        <div className="logo">
           <img src={logo} alt="none" /> 
        </div>
        <div className="subs">
          {adds.map((add, index) => (
            <div className="point1" key={index}>
              <img src={add.icon} alt="none" />
              <p>{add.description}</p>
        </div>
          ))}
        </div>
      </div>
      <div className="part2">
        <div className="point1">
            <h2>Grab It Fast</h2>
        </div>
        <div className="point2">
         <p>Bricks</p>
         <p>Cement</p>
         <p>Stone</p>
         <p>Steel & Iron</p>
         <p>Bajri</p>
         <p>Rodi</p>
         <p>Plumbing and Sanitary</p>
         <p>Electronics</p>
         <p>Flooring</p>
         <p>Railing</p> 
        </div>
      </div>
      <div className="part3">
        <div className="point1">
            <h2>Information</h2>
        </div>
        <div className="point2">
         <p>Find a Store</p>
         <p>About Us</p>
         <p>Contact Us</p>
         <p>Delivery information</p>
         <p>Privacy policy</p>
         <p>Terms & Conditions</p>
         <p>Gift Cards</p> 
        </div>
      </div>
      <div className="part4">
        <div className="point1">
            <h2>Make Money with Us</h2>
        </div>
        <div className="point2">
         <p>Sell on Anuda Mart</p>
         <p>Sell under Anuda Mart Accelerator</p>
         <p>Protect and Build Your Brand</p>
         <p>Become an Affiliate</p>
         <p>Fulfilment by Anuda Mart</p>
         <p>Advertise Your Products</p>
         <p>Anuda Mart Pay on Merchants</p> 
        </div>
      </div>
      <div className="part5">
        <div className="point1">
            <h2>Let Us Help You</h2>
        </div>
        <div className="point2">
         <p>My Account</p>
         <p>Order History</p>
         <p>Wish List</p>
         <p>Customer Service</p>
         <p>Returns/Exchange</p>
         <p>FAQs</p>
         <p>Product Support</p>
        </div>
      </div>
    </Wrapper>
  );
};