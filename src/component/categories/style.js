import styled from "styled-components";

export const Wrapper = styled.div`
 display:grid;
//grid-template-columns:repeat(10,1fr);
grid-template-columns:1fr;
 //grid-template-rows:repeat(5,1fr);
  grid-template-rows:1fr 4fr;
 gap:10px;
 //border-style:solid ;
 //background-color: #f5f5f5;
 margin:0px 20px 0px 20px ;
 border:1px solid #ccc;
  .category1{
   display:grid;
   grid-template-columns:2fr 1fr;
   //grid-row:span 1;
   border-radius:2em;
   background-color:#fff;
   //background-color:cyan;
   gap:10px;
   height: 55px;
   
  
   h2{
   color:black;
    padding-bottom:10px;
   padding-left:10px;
    font-size:30px;
   }
   .arrow{
  //background-color:pink;
   display:flex;
   flex-direction:row;
   width:90px;
   height:40px;
   align-items:right;
   justify-self: end;
   //padding:30px;
   margin:20px 5px 10px 0;
   .leftarrow, .rightarrow{
       width:35px;
       padding:5px;
       background-color:#bae8e8;
       border-radius:5em;
       display: flex;
       align-items: center;
       justify-content: center;
       transition: transform 0.5s ease, background-color 0.2s ease;

        &:hover {
          background-color: #36cfc9;
          transform: scale(1.1);
        }
     }
   }
  }
  
   

    .category2{
      display:grid;
      grid-template-columns:repeat(10,1fr);
      grid-template-rows: repeat(1, 200px); 
      gap:10px;
      border-radius:2em;
      //padding: 20px;
     background-color: #fff;
     margin:0;
      transition: transform 0.1s ease;
    
   
   img {
      // width: 50px;
      // height: 60px;
      // max_width:30px;
      // max_height:30px;
    //  margin: 20px 0px 0px 0px;
    width: 100px;
   height: 100px; 
   object-fit: cover;
    }

    h3 {
      //margin: 20px 0px 10px 30px;
      font-size: 18px;
      color: #333;
     
    }
   }

     
  .category2 .category:nth-child(1) {
    background-color: #dff5f0;
    border-radius:1em;
    text-align:center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;;
  
    &:hover {
      transform: translateY(-5px);
       box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
    // justify-items:center;
    // align-items:center;
  }

  .category2 .category:nth-child(2) {
    background-color: #e6f9e6;
    border-radius:1em;
    text-align:center;
     transition: transform 0.3s ease, box-shadow 0.3s ease;;
  
    &:hover {
      transform: translateY(-5px);
       box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .category2 .category:nth-child(3) {
    background-color: #fff5e6;
    border-radius:1em;
    text-align:center;
     transition: transform 0.3s ease, box-shadow 0.3s ease;;
  
    &:hover {
      transform: translateY(-5px);
       box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .category2 .category:nth-child(4) {
    background-color: #dff5f0;
    border-radius:1em;
    text-align:center;
     transition: transform 0.3s ease, box-shadow 0.3s ease;;
  
    &:hover {
      transform: translateY(-5px);
       box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .category2 .category:nth-child(5) {
    background-color: #ffe6e6;
    border-radius:1em;
    text-align:center;
     transition: transform 0.3s ease, box-shadow 0.3s ease;;
  
    &:hover {
      transform: translateY(-5px);
       box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .category2 .category:nth-child(6) {
    background-color: #fff5e6;
    border-radius:1em;
    text-align:center;
     transition: transform 0.3s ease, box-shadow 0.3s ease;;
  
    &:hover {
      transform: translateY(-5px);
       box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .category2 .category:nth-child(7) {
    background-color: #fff0f5;
    border-radius:1em;
    text-align:center;
     transition: transform 0.3s ease, box-shadow 0.3s ease;;
  
    &:hover {
      transform: translateY(-5px);
       box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .category2 .category:nth-child(8) {
    background-color: #e6f9e6;
    border-radius:1em;
    text-align:center;
     transition: transform 0.3s ease, box-shadow 0.3s ease;;
  
    &:hover {
      transform: translateY(-5px);
       box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .category2 .category:nth-child(9) {
    background-color: #ffe6e6;
    border-radius:1em;
    text-align:center;
     transition: transform 0.3s ease, box-shadow 0.3s ease;;
  
    &:hover {
      transform: translateY(-5px);
       box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }

  .category2 .category:nth-child(10) {
    background-color: #fff5e6;
    border-radius:1em;
    text-align:center;
     transition: transform 0.3s ease, box-shadow 0.3s ease;;
  
    &:hover {
      transform: translateY(-5px);
       box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }
`;
export default Wrapper;