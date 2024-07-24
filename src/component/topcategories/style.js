import styled from "styled-components";

export const Wrapper = styled.div`
 display:grid;
grid-template-columns:1fr;
  grid-template-rows:1fr 6fr;
 gap:10px;
 //border-style:solid ;
 //background-color: #f5f5f5;
 margin:30px 20px 0px 20px ;

  .deal1{
   display:grid;
   grid-template-columns:2fr 1fr;
   border-radius:2em;
   background-color:#fff;
  // background-color:cyan;
   padding:10px;
   gap:10px;
   height: 40px;
   
  
   h2{
   color:black;
   font-size:30px;
    margin:0;
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
   margin:10px 10px 10px 0;
    .leftarrow, .rightarrow{
       width:35px;
       padding:5px;
       background-color:#bae8e8;
       border-radius:5em;
       display: flex;
       align-items: center;
       justify-content: center;
       transition: transform 0.2s ease, background-color 0.2s ease;

        &:hover {
          background-color: #36cfc9;
          transform: scale(1.1);
        }
     }
   }
  }
  
    .deal2{
    display:grid;
     grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
    gap:20px;
    background-color:#fff;
    margin:0;
    //overflow: hidden;

    .deal {
      background-color: #fff;
      border-radius: 1em;
      text-align: left;
       display: flex;
      flex-direction: column;
      align-items:left;
        overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;;
  
    &:hover {
      transform: translateY(-5px);
       box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  
  
  .image-wrapper {
        position: relative;
        width: 100%;
        height: 55%;
        margin: 0;
      }

      .icon {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .sale-badge {
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: #36cfc9;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
      }

    h4 {
      font-family: 'Bebas Neue', sans-serif;
      margin: 10px 0px 0px 10px;
      font-size: 14px;
      color: #333;
      color:gray;
     }
      p{
       margin: 5px 0px 0px 10px;
       font-size: 18px;
       font-weight:bold;
      }
       h5{
       font-family: 'Bebas Neue', sans-serif;
       color:darkgray;
       margin: 7px 0px 0px 10px;
       span{
       color:gray;
       }
       }
      .stars {
        display: flex;
        margin: 10px 0px 0px 10px;
      }
    .pricing{
       color:red;
       display:flex;
       flex-direction:row;
        justify-content: space-between;
        margin:10px 0px 0px 0px;
       p{
        font-size:20px;
       }
        button{
        display:flex;
        flex-direction:row;
        align-items:center;
        width:70px;
         border:none;
         cursor: pointer;
         color:#8b0000;
         background-color:#FF7276;
          border-radius:0.5em;
          margin:0 20px 10px 0;
          padding:5px;
          transition: background-color 0.2s ease, transform 0.2s ease;

          p {
            font-size: 15px;
          }

          &:hover {
            background-color: #ff4546;
            transform: scale(1.05);
          }
         }
       
      }
  }
}


  
`;
export default Wrapper;