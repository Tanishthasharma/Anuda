import React, { useEffect, useState } from "react";
import Wrapper from './style.js';
//import {locationsymobol} from './component/home/locationsymobol.jpg'
import locationsymobol from './locationsymobol.jpg';
import Logo from './logo.jpg';
import wishlist from './wishlist.jpg';
import cart from './cart.jpg';
import account from './account.jpg';
import search from './search.jpg';
import { IoMdSearch } from "react-icons/io";
import axios from "axios";

export const Header = () => {
    const[categories,setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const[dropTexts,setDropTexts] = useState('');
  const fetchItems = async () => {
    try {
      //setLoading(true);
      const response = await axios.get('http://192.168.29.130:3000/api/category');
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

  const handleChange = (e) => {
    setDropTexts(e.target.value);
  };

  const Dropdown = () => (
    <select className="Dropdown" value={dropTexts} onChange={handleChange}>
      <option value="" disabled>
            All Categories
        </option>
      {categories.map((category) => (
       <option key={category._id} value={category._id}>{category.name}</option>
      ))
      }
    </select>
  );


  const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => setSearchTerm(e.target.value);

    const handleSearch = (e) => {
      e.preventDefault();
     };

    return (
      <form className="SearchBar" onSubmit={handleSearch}>
        <input
          type="search"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for items..."
        />
        <button type="submit">
          <IoMdSearch size={24}/>
        </button>
      </form>
    );
  };

  const Location = () => (
    <div className="Location">
      <img src={locationsymobol} alt="Location Symbol" />
      <select>
      <option value="all">Your Location</option>
        <option value="jaipur">Jaipur</option>
        <option value="noida">Noida</option>
        <option value="bengaluru">Bengaluru</option>
      </select>
    </div>
  );

  const Wishlist = () =>(
    <div className="Wishlist">
      <img src={wishlist} alt="wishlist" />
      <p>Wishlist</p>
      <img src={cart} alt="cart" />
      <p>Cart</p>
      <img src={account} alt="account" />
      <p>Account</p>
      </div>
  );

  return (
    <Wrapper>
      <img src={Logo} alt="Anuda Mart Logo" className="logo" />
     
      <div className="category">
        <Dropdown />
        <SearchBar />
      </div>
      <Location />
      <Wishlist/>
    </Wrapper>
  );
};

export default Header;
