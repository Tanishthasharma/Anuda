import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import item1 from './item1.png';
import tollcall from "./tollcall.png";
import Wrapper from "./style.js";
import axios from "axios";


export const Item = ()=>{
      
    const[categories,setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    const things =["Sell","Best Sellers","New Releases","Bricks",
        "Cement","Stone","Bajri","Rodi","Electronic","Flooring"];
  
      //  const arrayofItem = things.map((thing) => <li>{thing}</li>);

        const fetchItems = async () => {
            try {
              //setLoading(true);
              const response = await axios.get('http://192.168.29.130:3000/api/category?limit=6');
              console.log(response.data);
              console.log(response.data.data);
               const categoryData = response.data.data;
              console.log(categoryData);
              setCategories(categoryData);
             // setLoading(false);
            } catch (error) {
              setError(error.message);
              //setLoading(false);
            }
          };
        
            useEffect(() => {
            fetchItems();
          }, []);

          //const arrayofItem = categories.map((category) => <li value={category._id}>{category.name}</li>);
                const arrayofItem = categories.map((category) => (
                    <li key={category._id} value={category._id}>{category.name}</li>
                ));

    return(
        <Wrapper>
            <div className="sell">
            <img src={item1} alt="nothing" className="ittem"/>
            <ul>{arrayofItem}</ul>
            <img src={tollcall} alt="nothing" className="tollcall"/>
            <div className="number">
            <h1>1900 - 888 - 888</h1>
            <p>24/7 Support Center</p>
            </div>
            
            </div>
            </Wrapper> 
    
     );
};

export default Item;