import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  // border: 1px solid #e5e5e5;
  // border-radius: 25px;
  li {
  margin-right: 40px;
  font-size:17px;
  font-family: system-ui;
  font-weight:bold;
  color:#696969 ;
  }
  .sell{
    display: flex;
    justify-content: space-between;
     height:55px;
    .ittem{
    width:40px;
    height: 40px;
    margin:15px 10px 0 10px;
   }

  ul {
  list-style-type: none;
  padding: 10px;
  margin: 10px 20px 0px 15px;
  display: flex; 
}


.tollcall{
  //width:100px;
  //height: auto;
  padding:10px;
  margin:0px 0px 0px 90px;
  
 }
 
 .number{
 width:200px;
 height:auto;
   font-weight:bold;
  //  border: 1px solid #e5e5e5;
  // border-radius: 25px;
  margin:0px 0px 10px 0px;
  display:flex;
  flex-direction: column;
     
  h1{
  color:red;
  font-size:20px;
  margin:6px 0 10px 0;
  }
  p{
  color:gray;
  font-size:13px;
  margin:-10px 0 10px 0;
  }
 }
`;
export default Wrapper;