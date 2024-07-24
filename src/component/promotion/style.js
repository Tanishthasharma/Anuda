import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns:1.8fr 1.2fr;
   grid-template-rows:repeat(1,350px);
   gap:30px;
  margin:30px 20px 0px 20px;
 // border:1px solid ;
  overflow: hidden;

  .div1{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    background-color:#C5EAD9;
    margin:10px 0px 0 0px;
     border-radius:2em;
    //overflow: hidden;

 .theory1{
  display:flex;
  flex-direction:column;
  justify-content:center;
  //align-item:center;
  //padding:10px;
 }
  h1{
  color:darkblue;
  font-size:40px;
  margin-left:20px;
  }
  span{
  color:red;
   }
  p{
  font-weight:bold;
  color:gray;
  margin:-15px 0 10px 20px;
  }
    a {
    text-decoration: none; 
    color: inherit;
  }
  
  button{
  width:120px;
  height:40px;
  background-color:red;
  border-radius:0.5em;
    border:none;
   margin:0 0 10px 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   padding:0;
   p{
   //align-self:center;
   font-size:16px;
   color:white;
   margin:0;
   }
  }
   .image1{
    //background-color:pink;
    justify-content:space-evenly;
     .pic1{
    // max-width:5%;
    // max-height:20%;
    width:400px;
    height:300px;
    object-fit: contain;
    margin:0px;
   margin:30px 0px 0px 0px;
    //border-radius:2em;
     }
   }  
  }

   .div2{
     display:grid;
    grid-template-columns:repeat(2,1fr);
   width:100%;
    background-color:#FFF2D9;
    overflow: hidden;
     border-radius:2em;
   .theory2{
      display:flex;
      flex-direction:column;
      justify-content:center;
   }
  h1{
  color:darkblue;
  font-size:35px;
  margin-left:40px;
  }
   a {
    text-decoration: none; 
    color: inherit;
  }
 button{
  width:120px;
  height:40px;
  background-color:red;
  border:none;
  border-radius:0.5em;
  margin:0 0px  0 40px;
  display: flex;
   align-items: center;
   justify-content: center;
   padding:0;
   p{
   //align-self:center;
   font-size:16px;
   font-weight:bold;
   color:white;
   margin:0;
   
  }
}
  .image2{
  img{
    width:300px;
    height:350px;
     object-fit: contain;
   // margin:30px 30px 10px 0px;
   // position:absolute;right:0
  }
   }
}
`
export default Wrapper;