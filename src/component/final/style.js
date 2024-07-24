// import styled from "styled-components";

// export const Wrapper = styled.div`
//   display:grid;
//   grid-template-columns:repeat(5,1fr);
//   grid-template-rows:repeat(1,500px);
//   margin:50px 20px 10px 20px;
//   border:1px solid #ccc;
//   .part1{
//   display:grid;
//   grid-template-columns:1fr 2fr;
//   grid-template-rows:repeat(4,1fr);
//   }
// `;
// export default Wrapper;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 400px);
  margin: 50px 20px 10px 20px;
 // border: 1px solid #ccc;
  gap:10px;
  .part1 {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
     //border: 1px solid #ccc;
     margin:0px;
    .logo {
      img{
      width: 160px;
      height:70px;
      align-self: start;
      justify-self: center;
      //margin:0 40px 0 0;
      }
    }
    .subs {
      grid-row: 2 / span 3;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      
      .point1 {
        display: flex;
        align-items: center;
        //margin-bottom: 20px;
        
        img {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          padding:10px;
        }
        p {
          margin: 0;
          font-size: 16px;
          color: #333;
        }
      }
    }
  }
    .part2{
    display: grid;
    grid-template-rows: 1fr 2fr;
     //border: 1px solid #ccc;
     margin:0 ;
        .point1{
         padding:10px;
        }
         .point2{
           p {
           font-family: sans-serif;
          margin: 4px 0 0 18px;
           padding-top:2px;
          font-size: 16px;
          color: gray;                                      
          }
         }
    }

    .part3{
    display: grid;
    grid-template-rows: 1fr 2fr;
     //border: 1px solid #ccc;
     margin:0px;
        .point1{
         padding:10px;
        }
         .point2{
           p {
           font-family: sans-serif;
          margin: 4px 0 0 18px;
           padding-top:2px;
          font-size: 16px;
          color: gray;
          }
         }
    }

  .part4{
    display: grid;
    grid-template-rows: 1fr 2fr;
     //border: 1px solid #ccc;
     margin:0px;
        .point1{
         padding:10px;
        }
         .point2{
           p {
           font-family: sans-serif;
            padding-top:2px;
          margin: 4px 0 0 18px;
          font-size: 16px;
          color: gray;
          }
         }
    }

    .part5{
    display: grid;
    grid-template-rows: 1fr 2fr;
    // border: 1px solid #ccc;
     margin:0px;
        .point1{
         padding:10px;
        }
         .point2{
           p {
           font-family: sans-serif;
          margin: 4px 0 0 18px;
          padding-top:2px;
          font-size: 16px;
          color: gray;
          }
         }
    }
`;

export default Wrapper;
