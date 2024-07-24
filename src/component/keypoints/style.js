import styled from "styled-components";

export const Wrapper = styled.div`
  
.points{
display:grid;
  grid-template-columns:repeat(5,1fr);
  grid-template-rows:repeat(1,120px);
  gap:40px;
  margin:40px 40px 10px 40px;
  //border:1px solid #ccc;
  border-radius:1.5em;
  overflow:hidden;
  .point1{
     display:flex;
     flex-direction:rows;
     background-color:#f8f4fc;
     border-radius:1.5em;
     align-items:center;
     img{
     margin-left:5px;
        //border-radius:1.5em;
        // width:70px;
        // height:70px;
        }
    .theory{
      margin:0;
      //background-color:blue;
      width:100%;
      h3{
      color:black;
      margin:10px 0 0 10px ;
      }
      p{
      color:darkgray;
      margin:0px 0 0 10px ;
      }
     }
     }

}
`;

export default Wrapper;