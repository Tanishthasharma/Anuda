// import styled from "styled-components";

// export const Wrapper = styled.div`
//  display:grid;
//  grid-template-columns:repeat(3,1fr);
//   grid-template-rows:6fr;
//  gap:20px;
//  border-style:solid ;
//  //background-color: #f5f5f5;
//  margin:30px 20px 0px 20px ;

//  .shopy{
//   display:flex;
//   flex-direction:column;
//   background-color:#2596be;
//  }
// `;
// export default Wrapper;

import styled from "styled-components";

export const Wrapper = styled.div`
  .shopy {
    display: grid;
     grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    // grid-template-columns: repeat(1fr);
    grid-template-rows:repeat(1,300px);
     // grid-template-columns: 1fr 1fr; 
    gap: 50px;
    padding: 20px;
    margin:40px 0px 0px 0;
  }

  .shop-item {
   // display: flex;
    //justify-content: space-between; 
   // flex-direction: column;
    display: grid;
    grid-template-columns:1fr 2fr;
    //align-items: center;
    background-color: #f9f9f9;
    // padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
      &:nth-child(1) {
      background-color: #f8e4d4;
    }

    &:nth-child(2) {
      background-color: #f8e4e4;
    }

    &:nth-child(3) {
      background-color: #e8e8f4;
    }
  }

  .shop {
    margin-bottom: 20px;
    align-self: center;
    padding:10px;
    p {
      font-size: 20px;
      margin: 0px 0px 20px 0px;
     
      span {
        display: block;
        font-size: 20px;
        color: #063970;
        font-weight: bold;
      }
    }

    .shopnow {
      background-color: #ff6347;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      

      &:hover {
        background-color: #ff4500;
      }
    }
  }

  .imageDiv{
  position:relative;
 overflow:hidden;
  }

  .pic {
  //position : relative;
  //background-color : black;
    padding : 0;
    img {
      //width: 100%;
      //height: 100px;
      //border-radius: 10px;
      // justify-self:end;
      // align-self : end;
        position:absolute;
         border-radius: 10px;
      //  top:0;
        bottom:0;
        // right:0px;
      
    }
  }

  // .shop-item :nth-child(1){
  // background-color:#f8e4d4;
  // }
  //  .shop-item :nth-child(1){
  // background-color:#f8e4d4;
  // }
`;

export default Wrapper;
