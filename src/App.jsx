// import React from 'react';
// import './App.css';
// import {Header}  from './component/home'
// import {Item} from './component/item'
// import {Promotion} from './component/promotion'
// import {Categories} from './component/categories'
// import {Deals} from './component/deals'
// import {ShopNow} from './component/shopnow'
// import {TopCategories} from './component/topcategories'
// import { Subscribe } from './component/subscribe';
// import {KeyPoint} from './component/keypoints';
// import {Footer} from './component/footer';
// import {Final} from './component/final';
// import {Shop} from './component/shop';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';


// // export const App = () => {
// //   return (
// //     <BrowserRouter>
       
// //        <Header/>               
// //        <Item/>
       
// //        {/* <Shop/> */}
// //        <Promotion/>
// //        <Categories/>
// //        <Deals/>
// //        <ShopNow/>
// //        <TopCategories/>
// //        <Subscribe/>
// //        <KeyPoint/>
// //        <Final />
// //        <Footer/>
// //     </BrowserRouter>
       
// //   );
// // }
// export const App = () => {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Item />} />
//         <Route path="/promotion" element={<Promotion />} />
//         <Route path="/shop" element={<> <Item /> <Shop /> <Subscribe /> <KeyPoint /> <Final /></>} />
//         <Route path="/categories" element={<Categories />} />
//         <Route path="/deals" element={<Deals />} />
//         <Route path="/shopnow" element={<ShopNow />} />
//         <Route path="/topcategories" element={<TopCategories />} />
//         <Route path="/subscribe" element={<Subscribe />} />
//         <Route path="/keypoints" element={<KeyPoint />} />
//         <Route path="/final" element={<Final />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;



import React from 'react';
import './App.css';
import { Header } from './component/home';
import { Item } from './component/item';
import { Promotion } from './component/promotion';
import { Categories } from './component/categories';
import { Deals } from './component/deals';
import { ShopNow } from './component/shopnow';
import { TopCategories } from './component/topcategories';
import { Subscribe } from './component/subscribe';
import { KeyPoint } from './component/keypoints';
import { Footer } from './component/footer';
import { Final } from './component/final';
import { Shop } from './component/shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<><ShopPage/></>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const HomePage = () => (
  <>
    <Item />
    <Promotion />
    <Categories />
    <Deals />
    <ShopNow />
    <TopCategories />
    <Subscribe />
    <KeyPoint />
    <Final />
  </>
);

const ShopPage = () =>(
   <>
   <Item />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
   <Shop/>
    <Subscribe />
    <KeyPoint />
    <Final />
   </>
);

export default App;
