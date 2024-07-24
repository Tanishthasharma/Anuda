import styled from "styled-components";

export const Wrapper = styled.div`
   .block{
    display: grid;
     grid-template-columns: repeat(2,1fr);
      grid-template-rows: repeat(1, 450px);
    //grid-template-rows:repeat(5,1fr);
    //gap: 50px;
    background-color:#d8ece4;
     //background-color:cyan;
     //border:1px solid #ccc;
         border-radius:2em;
         overflow:hidden; 
    //padding: 20px;
    margin:60px 40px 40px 40px;
    .block1{
    display:flex;
    flex-direction:column;
    // justify-content:center;
     //align-items:center;
    align-items: flex-start;
    padding:50px;
    h1{
    color:green;
    font-size:40px;
   // margin:20px 20px 0px 0px ;
    margin: 20 0 20px 0;
    }
    p{
    color:gray;
     margin: 0 0 20px 0;
     span{
     color:red;
     }
    }
        .send{
         display:flex;
         flex-direction:rows;
          width: 75%;
          height: 70px;
          background-color:#fff;
         border:1px solid #ccc;
         border-radius:2em;
         //margin:20px 20px 0px 0px ;
           margin: 0; 
           margin-top: 20px;
            img {
          justify-self: start;
          margin-left:10px;
          width: 30px;
          height: 30px;
          align-self:center;
          }
         }
          
         input {
          width:70%;
          padding-left: 10px;
          border:none;
          border-radius: 1em;
          font-size:16px;
        }
           button {
          border-radius: 2em;
          justify-self: end;
          background-color: red;
          border: none;
          padding: 0;
          cursor: pointer;
           width: 150px;
           height: 100%;
           p{
           color:#fff;
           font-size:18px;
           font-weight:bold;
           margin:8px 0px 0px 0px;
           }
        }
    }
    .block2{
        background-color:#d8ece4;
    img{
     width:100%;
     height:95%;
     border-radius: 1.5em;
     }
    }
  }
`;

export default Wrapper;