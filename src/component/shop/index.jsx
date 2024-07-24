import React, { useEffect, useMemo, useState } from "react";
import Wrapper from "./style";
import {Slider,TextField,Button,Pagination} from "@mui/material";
import Blocks from "./Blocks.jpg";
import Bricks from "./bricks.jpg";
import Cement from "./cement.jpg";
import Electronic from "./electronic.jpg";
import Flooring from "./flooring.jpg";
import flooring from "./flooring copy.jpg";
import Piping from "./piping.jpg";
import Bajri from "./bajri.jpg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaStar ,FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import axios from 'axios';

export const Shop = () => {
  const categories = [
    { name: 'Binding Wire' },
    {
      name: 'Brick & Blocks',
      subItems: [
        { name: 'AAC Blocks' },
        { name: 'Fly Ash Bricks' },
        {
          name: 'Machine-made bricks',
          subs: ['Red Bricks', 'Solid Blocks']
        }
      ]
    },
    { name: 'Buy Construction Chemicals' },
    { name: 'Bajri' },
    { name: 'Steel Iron' },
    { name: 'Cement' },
    { name: 'Rodi' },
    { name: 'Electrical items' },
    { name: 'Flooring' }
  ];

  const [selectedSub3, setSelectedSub3] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const[priceRange,setPriceRange] = useState([0,10000]);
  const[nameSearch,setNameSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [productImgUrl, setProductImgUrl] = useState("");
  const[brands,setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[selectedBrands,setSelectedBrands] = useState(new Set());
  const[currentPage,setCurrentPage] = useState(1);
  const pageSize = 12;

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://192.168.29.130:3000');
//       setProducts(response.data); 
//     } catch (error) {
//       console.error(error); 
//     }
//   };

//   fetchData();
// }, []);
  
  // const brands = [{id:1,Option:"ACC Limited"},{id:2,Option:"UltraTech Cement"},{id:3,Option:"Shree Cement"},
  //   {id:4,Option:"Prism Cement"},{id:5,Option:"Ambuja Cement"},{id:6,Option:"ACC Cement"},{id:7,Option:"Shree Cement"},
  //   {id:8,Option:"Prism Cement"},{id:9,Option:"Ambuja Cement"},{id:10,Option:"Shree Cement"}
  // ];

  // const fetchProducts = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.post('http://192.168.29.130:3000/api/get_all_products', []);
  //     // console.log(response.data.data);
  //     // const productData = JSON.parse(response.data); 
  //      console.log(response.data);
  //     setProducts(response.data.data);
  //     setProductImgUrl(response.data.mediaUrl);
  //     //setBrands(response.data.data.brand_id)
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
 
  const handleBrandSelectionChange = (e) =>{
      const brandId = parseInt(e.target.value,10);
      setSelectedBrands((prev)=> {
        const updated = new Set(prev);
        if(e.target.checked){
          updated.add(brandId);
        }
        else{
          updated.delete(brandId);
         }
         return updated;
      });
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://192.168.29.130:3000/api/get_all_products', []);
      console.log(response.data);
      const productsData = response.data.data;
      const brandIds = [...new Set(productsData.map(product => product.brand_id))]; 
      console.log(brandIds);
      setProducts(productsData);
      setProductImgUrl(response.data.mediaUrl);
      setBrands(brandIds); 
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

    useEffect(() => {
    fetchProducts();
  }, []);

  const filteredBrands = brands.filter((brand) => {
    if (searchInput === '') {
      return brand;
    } else {
      return brand.name.toLowerCase().includes(searchInput.toLowerCase());
    }
  });


  // const Dropdown = ({ category }) => (
  //   <select
  //     className="Dropdown"
  //     value={selectedSub3}
  //     onChange={(e) => setSelectedSub3(e.target.value)}
  //   >
  //     <option value="all">{category.name}</option>
  //     {category.sub1 && <option value="option1">{category.sub1}</option>}
  //     {category.sub2 && <option value="option2">{category.sub2}</option>}
  //     {category.sub3 && <option value="option3">{category.sub3}</option>}
  //     {selectedSub3 === "option3" && (
  //       <>
  //         {category.sub31 && <option value="sub31">{category.sub31}</option>}
  //         {category.sub32 && <option value="sub32">{category.sub32}</option>}
  //       </>
  //     )}
  //   </select>
  // );

  // const Dropdown = ({ category,isOpen,setIsOpen}) => (

  //  const toggleDropdown = () => {
  //     setIsOpen(!isOpen);
  //     onClick(category.name);
  //   };
  //   <select
  //     className="Dropdown"
  //     value={selectedSub3}
  //     onChange={(e) => setSelectedSub3(e.target.value)}
  //   >
  //     <option value="all">{category.name}</option>
  //     {category.subItems && category.subItems.map((subItem, index) => (
  //       <option key={index} value={subItem}>{subItem}</option>
  //        {category.subItems.subs && category.subItems.subs.map((sub,index) => (
  //         <option key={index} value={sub}>{sub}</option>
  //        ))}
  //     ))}
  //   </select>
  // );
  // const Dropdown = ({ category }) => {
  //   return (
  //     <select
  //       className="Dropdown"
  //       value={selectedSub3}
  //       onChange={(e) => setSelectedSub3(e.target.value)}
  //     >
  //       <option value="all">{category.name}</option>
  //       {category.subItems && category.subItems.map((subItem, index) => (
  //         <React.Fragment key={index}>
  //           <option value={subItem.name}>{subItem.name}</option>
  //           {subItem.subs && subItem.subs.map((sub, subIndex) => (
  //             <option key={`${index}-${subIndex}`} value={sub}>{sub}</option>
  //           ))}
  //         </React.Fragment>
  //       ))}
  //     </select>
  //   );
  // };

  const Dropdown = ({ category }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
      <select
        className="Dropdown"
        value={selectedSub3}
        onChange={(e) => setSelectedSub3(e.target.value)}
      >
        <option value="all">{category.name}</option>
        {category.subItems && category.subItems.map((subItem, index) => (
          <React.Fragment key={index}>
            <option value={subItem.name}>{subItem.name}</option>
            {subItem.subs && subItem.subs.map((sub, subIndex) => (
              <option key={`${index}-${subIndex}`} value={sub}>{sub}</option>
            ))}
          </React.Fragment>
        ))}
      </select>
    );
  };


   const handleSliderChange = (event,newValue) =>{
     setPriceRange(newValue);
   };
  

      const handleMinPriceRange = (event) => {
        let minPrice = Number(event.target.value);
        if (minPrice < 0) {
          minPrice = 0;
        } else if (minPrice > priceRange[1]) {
          minPrice = priceRange[1];
        }
        setPriceRange([minPrice, priceRange[1]]);
      };

      const handleMaxPriceRange = (event) => {
        let maxPrice = Number(event.target.value);
        if (maxPrice > 10000) {
          maxPrice = 10000;
        } else if (maxPrice < priceRange[0]) {
          maxPrice = priceRange[0];
        }
        setPriceRange([priceRange[0], maxPrice]);
      };

      const ratings = [1,2,3,4,5];

      const[distanceRange,setDistanceRange] = useState([0,100]);

      const handleSliderChangeDistance= (event,newValue) =>{
        setDistanceRange(newValue);
      };
     
     
   
         const handleMinDistanceRange = (event) => {
           let minDistance = Number(event.target.value);
           if (minDistance < 0) {
             minDistance = 0;
           } else if (minDistance > distanceRange[1]) {
             minDistance = distanceRange[1];
           }
           setDistanceRange([minDistance, distanceRange[1]]);
         };
   
         const handleMaxDistanceRange = (event) => {
           let maxDistance = Number(event.target.value);
           if (maxDistance > 100) {
            maxDistance = 100;
           } else if (maxDistance < distanceRange[0]) {
            maxDistance = distanceRange[0];
           }
           setDistanceRange([priceRange[0], maxDistance]);
         };

         const DropdownMost = ({}) => (
          <select className="Dropdown-Popular">
            <option value="all">Most Popular</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        );

         const [deals,setDeals] = useState([
              { id:1,name: "Bricks", icon: Bricks, description: "Starting Red Bricks", price: "₹110", sale: "37% off" ,rating:"4"},
              { id:2,name: "Blocks", icon: Blocks, description: "Starting Cement Blocks", price: "₹220", sale: "37% off",rating:"3"},
              { id:3,name: "Cement", icon: Cement, description: "Starting Cement", price: "₹310", sale: "35% off",rating:"4"},
              { id:4,name: "Flooring", icon: Flooring, description: "Starting Steel & Iron", price: "₹455", sale: "37% off",rating:"1"},
              { id:5,name: "Electronics", icon: Electronic, description: "Up to 65% off Clearance", price: "₹1850", sale: "47% off",rating:"5"},
              { id:6,name: "Bricks", icon:Bajri, description: "Starting Red Bricks", price: "₹110", sale: "37% off",rating:"3"},
              { id:7,name: "Blocks", icon: flooring, description: "Starting Cement Blocks", price: "₹220", sale: "37% off",rating:"4" },
              { id:8,name: "Cement", icon: Cement, description: "Starting Cement", price: "₹310", sale: "35% off",rating:"2"},
              { id:9,name: "Flooring", icon: Flooring, description: "Starting Steel & Iron", price: "₹455", sale: "37% off",rating:"1"},
              { id:10,name: "Electronics", icon: Piping, description: "Up to 65% off Clearance", price: "₹1850", sale: "47% off",rating:"3"},
              { id:11,name: "Bricks", icon: Bricks, description: "Starting Red Bricks", price: "₹110", sale: "37% off",rating:"1"},
              { id:12,name: "Blocks", icon: Blocks, description: "Starting Cement Blocks", price: "₹220", sale: "37% off",rating:"1"},
              { id:13,name: "Cement", icon: Cement, description: "Starting Cement", price: "₹310", sale: "35% off",rating:"5"},
              { id:14,name: "Flooring", icon: Flooring, description: "Starting Steel & Iron", price: "₹455", sale: "37% off",rating:"1"},
              { id:15,name: "Electronics", icon: Electronic, description: "Up to 65% off Clearance", price: "₹1850", sale: "47% off",rating:"2"},
              { id:16,name: "Bricks", icon:Bajri, description: "Starting Red Bricks", price: "₹110", sale: "37% off",rating:"3"},
              { id:17,name: "Blocks", icon: flooring, description: "Starting Cement Blocks", price: "₹220", sale: "37% off",rating:"5"},
              { id:18,name: "Cement", icon: Cement, description: "Starting Cement", price: "₹310", sale: "35% off",rating:"1"},
              { id:19,name: "Flooring", icon: Flooring, description: "Starting Steel & Iron", price: "₹455", sale: "37% off",rating:"3"},
              { id:20,name: "Electronics", icon: Piping, description: "Up to 65% off Clearance", price: "₹1850", sale: "47% off",rating:"4"}
            ]);
             
            const handleNameSearchChange = (e) => {
              setNameSearch(e.target.value);
            }; 

            const filteredDeals = deals.filter(
              (deal) => {
                const dealPrice = Number(deal.price.replace("₹", ""));
                const matchesPrice = dealPrice >= priceRange[0] && dealPrice <= priceRange[1];
                const matchesName = nameSearch === '' || deal.name.toLowerCase().includes(nameSearch.toLowerCase());
           
                return matchesPrice && matchesName;
              }
            );

            const handlePageChange = (event,page) =>{
              setCurrentPage(page);
            };
        
        
          //   const fetchProducts = async () => {
          //   try {
          //     setLoading(true);
          //     const response = await axios.post('http://192.168.29.130:3000/api/get_all_products', []);
          //     // console.log(response.data.data);
          //     // const productData = JSON.parse(response.data); 
          //      console.log(response.data);
          //     setProducts(response.data.data);
          //     setProductImgUrl(response.data.mediaUrl);
          //     setLoading(false);
          //   } catch (error) {
          //     setError(error.message);
          //     setLoading(false);
          //   }
          // };

          //   useEffect(() => {
          //   fetchProducts();
          // }, []);

          // const filteredProducts = Array.isArray(products) ? products.filter(...) : [];
           
          // const filteredProducts = products.filter(
          //   (product) => {
          //     const productPrice = Number(product.price.replace("₹", ""));
          //     const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];
          //      const matchesName = nameSearch === '' || product.name.toLowerCase().includes(nameSearch.toLowerCase());
        
          //      return matchesPrice && matchesName;
          //     //return matchesPrice;
          //   }
          // );

          // const searchedProducts = filteredProducts.filter((product) =>{
          //   const matchesName = nameSearch === '' || product.name.toLowerCase().includes(nameSearch.toLowerCase());
          //   return matchesName;
          // });
           
          const filteredProducts = products.filter(
            (product) => {
              const productPrice = Number(product.unit_price);
              // const matchesBrand = searchInput === '' || product.brand_id === searchInput;
              //const matchesBrand = selectedBrands.size === 0|| selectedBrands.has(product.brand_id._id) ;
              const matchesPrice = productPrice >= priceRange[0] && productPrice <= priceRange[1];
               const matchesName = nameSearch === '' || product.product_name.toLowerCase().includes(nameSearch.toLowerCase());
                
              //  console.log('Product:', product);
              // // console.log('Selected Brands:', selectedBrands);
              //  //console.log('Brand ID:', brandId);
              //  //console.log('Matches Brand:', matchesBrand);
              //  console.log('Matches Price:', matchesPrice);
              //  console.log('Matches Name:', matchesName);

               return matchesPrice && matchesName;
               //return matchesPrice && matchesName && matchesBrand;
              //return matchesPrice;
            }
          );


          const currentProducts = useMemo (()=>{
            const startIndex = (currentPage - 1)*pageSize;
            const endIndex = startIndex + pageSize;
            return filteredProducts.slice(startIndex,endIndex);
        },[currentPage,filteredProducts]);


  return (
    <Wrapper>
      <div className="shop">
        <div className="shop1">
          <div className="sec1">
            <div>
              <h2>CATEGORIES</h2>
            </div>
            <div className="drop">
              {categories.map((category, index) => (
                <Dropdown key={index} category={category} />
              ))}
            </div>
          </div>
          <div className="sec2">
            <div className="brands">
              <div>
                <h2>Brands</h2>
              </div>
              <div className="searchBar">
                <div className="inputName">
                    <input
                  type="text"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  placeholder="Search brands..."
                /></div>
                <div className="brandSlider">
                  {filteredBrands.map((brands) =>(
                    <label>
                      <input type="checkbox"  value={brands._id} onChange={handleBrandSelectionChange}/>
                      {brands.name}
                    </label>
                  ))}
                </div>
              </div>
              
            </div>
            <div className="prices">
              <div className="byPrices">
              <h2>By Prices</h2>
              </div>
              <div className="selectPrices">
              <Slider value={priceRange} min={0} max={10000} onChange={handleSliderChange} valueLabelDisplay="auto" aria-labelledby="range-slider" color="red" size="small"/>
              </div>
               <div className="setPrice">
                <div className="part1">
                <p>$</p>
                <input value={priceRange[0]} type="number" InputProps={{inputProps:{min:0 ,max:10000}}}  onChange={handleMinPriceRange} />
                </div>
                <div className="part2">
                <FaMinus className="minusIcon" />
                </div>
                <div className="part3">
                <p>$</p>
                <input value={priceRange[1]} type="number" InputProps={{inputProps:{min:0 ,max:10000}}}  onChange={handleMaxPriceRange}/>
                </div>
                <div className="part4">
                <button>Go</button>
                </div>
               </div>
            </div>
            <div className="rating">
              <div className="byRating">
              <h2>Rating</h2>
            </div> 
             <div className="mark">
              {ratings.map((rate,index) =>(
                <div key={index} style={{ display: 'inline-block' }}>
                  <input type="checkbox" />
                  {[...Array(5)].map((_,starIndex) =>( 
                    <FaStar key={starIndex} size={20} color={rate > starIndex ? "#F2C265":"#FFFFFF"}/>
                  ))}
                  </div>
              ))}      
            </div>
            </div>
          </div>
          <div className="sec3">
          <div className="distances">
              <div className="location">
                <h2>Location</h2>
              </div>
              <div className="selectDistances">
                  <Slider value={distanceRange} min={0} max={100} onChange={handleSliderChangeDistance} valueLabelDisplay="auto" aria-labelledby="range-slider" color="red" size="small"/>
                  </div>
                  <div className="setDistance">
                    <div className="part1">
                    <input value={distanceRange[0]}  type="number" InputProps={{inputProps:{min:0 ,max:100}}}  onChange={handleMinDistanceRange} />
                    <p>KM</p>  
                    </div>
                    <div className="part2">
                    <FaMinus className="minusIcon" />
                    </div>
                    <div className="part3">
                    <input value={distanceRange[1]} type="number" InputProps={{inputProps:{min:0 ,max:100}}}  onChange={handleMaxDistanceRange}/>
                    <p>KM</p> 
                    </div>
                    <div className="part4">
                    <button>Go</button>
                    </div>
                  </div>
          </div>
          </div>
        </div>
        <div className="shop2">
                <div className="searchName">
                    <div className="inputName">
                       <div className="searchPlace">
                       <input
                      type="text"
                      value={nameSearch}
                      onChange={handleNameSearchChange}
                      placeholder="Search... "
                      className="sortName"
                     />  
                      <button type="submit">
                      <IoMdSearch size={20}/>
                      </button>
                       </div>
                      </div>
                      <div className="mostPopular">
                        <h4>Sort By:</h4>
                         <DropdownMost/>
                        </div> 
                </div>

                <div className="shopItems">
                {currentProducts.map((product) => (
                      <div className="deal" key={product.product_id}>
                        <div className="image-wrapper">
                          <img src={productImgUrl+product.thumbnail} alt={product.product_name} className="icon" />
                          <div className="sale-badge">{product.special_discount}</div>
                        </div>
                        <div className="product-Text">
                        <div className="product-Brand">
                        <h4>{product.brand_id.name}</h4>
                        </div>
                        <div className="product-Name">
                        <p>{product.product_name}</p>
                        </div>
                        <div className="product-Seller">
                        <h5>
                          Seller By: <span>Rajesh Rangid</span>
                        </h5>
                        </div>
                        </div>
                        <div className="stars">
                                  {[...Array(5)].map((_, starIndex) => {
                                                const rating = 4;
                                                return <FaStar key={starIndex} size={24} color={rating > starIndex ? "#F2C265" : "#a9a9a9"} />;
                                              })}
                        </div>
                        <div className="pricing">
                          <p>₹{product.unit_price}</p>
                          <button type="button" className="addcart">
                            <HiOutlineShoppingBag size={24} />
                            <p>Add</p>
                          </button>
                        </div>
                      </div>
                    ))}
                {/* {products.length > 0 ? (
                  products.map((product) => (
                  <div className="deal" key={product.product_id}>
                    <div className="image-wrapper">
                      <img src={productImgUrl+product.thumbnail} alt={product.product_name} className="icon" />
                      <div className="sale-badge">{product.special_discount}</div>
                    </div>
                  <h4>{product.product_name}</h4>
                  <p>{product.slug}</p>
                  <h5>
                    Seller By: <span>Rajesh Rangid</span>
                  </h5>
                  <div className="stars">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        size={24}
                        color={product.rating > starIndex ? "#F2C265" : "#a9a9a9"}
                      />
                    ))}
                  </div>
                  <div className="pricing">
                    <p>₹{product.unit_price}</p>
                    <button type="button" className="addcart">
                      <HiOutlineShoppingBag size={24} />
                      <p>Add</p>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No deals available for the selected criteria.</p>
            )} */}

                {/* {currentDeals.length >0 ? (
                    filteredProducts.map((product) => (
                      <div className="deal" key={product.id}>
                        <div className="image-wrapper">
                          <img src={product.icon} alt={product.name} className="icon" />
                          <div className="sale-badge">{product.sale}</div>
                        </div>
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <h5>
                          Seller By: <span>Rajesh Rangid</span>
                        </h5>
                        <div className="stars">
                          {[...Array(5)].map((_, starIndex) => {
                            const rating = product.rating;
                            return <FaStar key={starIndex} size={24} color={rating > starIndex ? "#F2C265" : "#a9a9a9"} />;
                          })}
                        </div>
                        <div className="pricing">
                          <p>{product.price}</p>
                          <button type="button" className="addcart">
                            <HiOutlineShoppingBag size={24} />
                            <p>Add</p>
                          </button>
                        </div>
                      </div>
                        ))
                  ) : (
                    <p>No deals available for the selected criteria.</p>
                  )} */}
                {/* {currentDeals.length > 0 ? (
                    currentDeals.map((deal, index) => (
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
                            const rating = deal.rating;
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
                        ))
                  ) : (
                    <p>No deals available for the selected criteria.</p>
                  )} */}
            </div>
          <div className="pagi">
          <Pagination 
          count = {Math.ceil(filteredProducts.length/pageSize)}
          page={currentPage}
          onChange = {handlePageChange}
          shape="rounded"
          className="pagi-bar"
         />
          </div>
        </div>
       </div> 
    </Wrapper>
  );
};

export default Shop;
