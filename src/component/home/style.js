// // import {styled} from 'styled-components';

// // export const Wrapper = styled.section`
// // display:flex;
// // flex-direction:row;
// // justify-content:center;
// // border-style:solid;
// //  border-radius: 25px;
// // margin-left:90px;

// // .category{
// // display:flex;
// // margin-right:900px;
// // width:300px;
// // height:100px;
// // border-style:solid;
// //  border-radius: 25px;

// // .Dropdown{
// // width:50px;
// // height:40px;
// // }
// // .SearchBar{
// // width:50px;
// // height:40px;
// // }

// // }

// // `;
// // export default Wrapper

// import { styled } from 'styled-components';

// export const Wrapper = styled.section`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   border-style: solid;
//   border-radius: 25px;
//   margin:20px;

//   .category {
//     display: flex;
//     margin-right: 900px;
//     width: 600px;
//     height: 100px;
//     border-style: solid;
//     border-radius: 25px;
//      margin:30px 30px 30px 60px;
//   }

//   .Dropdown {
//     width: 150px;
//     height: 40px;
//     margin:30px;
//   }

//   .SearchBar {
//     width: 150px;
//     height: 40px;
//     margin:30px 30px 30px 10px;
//     display : flex;
//   }

//   .Location{
//   width:150px;
//   height: 50px;
//   margin:30px;
//   display : flex;
//    border-style: solid;
//     border-radius: 25px;
//   }
// `;

// export default Wrapper;


import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border: 1px solid #e5e5e5;
  border-radius: 25px;
  
  .logo {
    height: 50px;
  }
  .category {
    width:48%;
    display: flex;
    align-items: center;
   // flex-grow: 1;
    //margin-left: 40px;
     //margin-right:60px;
    border: 1px solid red;
    border-radius: 10px;
    padding: 5px 10px;
    .Dropdown {
      margin-right: 10px;
      border: none;
      outline: none;
      font-size: 16px;
    }
    .SearchBar {
      display: flex;
      flex-grow: 1;
      input {
        flex-grow: 1;
        padding: 5px 10px;
        border: none;
        outline: none;
        font-size: 16px;
      }
      button {
        background: none;
        border: none;
        cursor: pointer;
      }
    }
  }
  .Location {
    display: flex;
    align-items: center;
     border-top: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 10px 5px 5px grey;
    margin:0 10px 0 0;
    padding:5px;
    img {
      height: 20px;
      margin-right: 10px;
    }
    select {
      border: none;
      outline: none;
      font-size: 16px;
        font-weight:bold;
      color: red;
    }
  }

  .Wishlist {
    display: flex;
    align-items: center;
    img {
      height: 20px;
      margin: 0px 5px 0px 5px;
    }
      p{
      color:gray;
      font-size:15px;
      }
}
`;

export default Wrapper;
