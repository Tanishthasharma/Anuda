import styled from "styled-components";

export const Wrapper = styled.div`
    .shop {
        display: grid;
        grid-template-columns: 20% 80%;
        grid-template-rows: repeat(1, 1250px);
        //border: 1px solid #ccc;
        background-color: white;
        margin: 20px 40px 10px 40px;
        padding: 10px;

        .shop1 {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 42% 45% 13%;
            background-color: white;
          //  border: 1px solid #ccc;

            .sec1 {
                margin: 0px 20px 10px 0;
                display: grid;
                grid-template-rows: 10% 90%;
                gap: 10px;
                border-radius: 12px;
                background-color: #f0ecf4;
                overflow: hidden;

                h2 {
                    font-size: 17px;
                    font-weight: bold;
                    padding-left: 10px;
                }

                .drop {
                    height: 100%;
                    display: grid;
                    grid-template-rows: repeat(9, 1fr);
                    align-items: stretch;
                    justify-content: center;
                    overflow: hidden;
                }

                .Dropdown {
                    margin: 5px 0;
                    width: 200px;
                    height: 80%;
                    justify-self: center;
                    border: none;
                    border-bottom: 1.5px solid gray;
                    background-color: transparent;
                    padding: 10px;
                    font-size: 13px;
                    font-weight: bold;
                    box-sizing: border-box;

                    & option:checked {
                        background-color: white;
                        color: red;
                    }

                    &:nth-child(1),
                    &:nth-child(3),
                    &:nth-child(4),
                    &:nth-child(7),
                    &:nth-child(9) {
                        appearance: none;
                        pointer-events: none;
                    }
                }

                .Dropdown:disabled {
                    background-color: #f0f0f0;
                    color: #999;
                }
            }

            .sec2 {
                 margin: 10px 20px 10px 0;
                display: grid;
                grid-template-rows: 42% 25% 33%;
                border-radius: 12px;
                background-color: #f0ecf4;
                overflow: hidden;

                .brands {
                    display: grid;
                    grid-template-rows: 15% 85%;
                    gap: 10px;
                    padding: 0;
                    margin: 0;
                   // overflow:hidden;

                    h2 {
                        font-size: 19px;
                        padding-left: 10px;
                    }

                    .searchBar {
                        justify-self: center;
                      //  border: 1px solid #ccc;
                        width: 80%;
                        height: 90%;
                        box-sizing: border-box;

                        input {
                            width: 100%;
                            box-sizing: border-box;
                            height: 40px;
                            border:none;
                            border-radius: 4px;
                            margin: 0;
                        }

                        .brandSlider {
                            padding: 10px;
                            //overflow:hidden;
                            overflow-y: auto;
                            max-height:100px;
                            -ms-overflow-style: none;
                            scrollbar-width: none; 
                            -webkit-overflow-scrolling: touch; 

                            &::-webkit-scrollbar {
                                display: none; 
                                background-color: transparent;
                            }

                            label {
                                display: flex;
                                align-items: center;
                                margin-bottom: 8px;
                            }

                            input[type="checkbox"] {
                                width: 15px;
                                height: 15px;
                                margin-right: 10px;
                            }
                        }

                        .sliderContent {
                            display: block;
                            margin-bottom: 10px;
                        }

                        .brandSlider label {
                            display: block;
                        }
                    }
                }

                .prices {
                    display: grid;
                    grid-template-rows: 20% 35% 50%;
                    margin: 0 7px;
                    border-bottom: 2px solid #ccc;
                    border-top: 2px solid #ccc;

                    .byPrices {
                        margin: 8px 0 0 10px;

                        h2 {
                            font-size: 19px;
                            margin-top: 0;
                        }
                    }

                    .selectPrices {
                        padding: 0 10px;
                        color: red;
                        height: 30px;
                        margin-top: 10px;
                        margin-right: 10px;
                    }

                      .setPrice{
                          display: grid;
                          grid-template-columns:35% 10% 35% 20%;
                          height:50px;
                        
                       
                            .part1,.part3{
                              display:flex;
                              flex-direction:rows;
                              background-color:white;
                              align-items:center;
                              justify-content:center;
                               border-radius: 5px;
                               padding-left:1px;
                              p{
                               font-size: 15px;
                            font-weight: bold;
                              }
                              input {
                            text-align: center;
                            border: none;
                            border-radius: 5px;
                            max-width: 65px;
                            height: 40px;
                            //margin: 0 3px;
                            font-size: 15px;
                            font-weight: bold;
                               }
                             }
                        
                         
                        .part2{
                            margin: 15px 0 0 2px;
                        }
                        
                        button {
                            background-color: red;
                            color: white;
                            font-size: 15px;
                            font-weight: bold;
                            border-radius: 3px;
                            width: 42px;
                            height: 40px;
                            border: none;
                            cursor: pointer;
                            margin:5px 0 0 3px;
                            padding: 0;
                            transition: background-color 0.2s ease, transform 0.2s ease;

                            &:hover {
                                background-color: #ff4546;
                                transform: scale(1.05);
                         }
                        }
                    }
                }

                .rating {
                    padding-left: 10px;

                    .byRating {
                        margin-bottom: 5px;

                        h2 {
                            font-size: 19px;
                           // margin: 0;
                            margin:10px 0 3px 0 ;
                        }
                    }

                    .mark {
                        display: grid;
                        grid-template-rows: repeat(5, 1fr);
                    }
                }
            }

            .sec3 {
                 margin: 10px 20px 10px 0;
                display: grid;
                grid-template-rows: 45% 30% 25%;
                gap: 10px;
                border-radius: 12px;
                background-color: #f0ecf4;
                overflow: hidden;
               
                .distances {
                    display: grid;
                    grid-template-rows: 20% 35% 50%;
                    margin: 0 7px;
            
                    .location {
                        margin: 8px 0 0 10px;

                        h2 {
                            font-size: 19px;
                            margin-top: 0;
                        }
                    }

                    .selectDistances {
                        padding: 0 10px;
                        color: red;
                        height: 30px;
                        margin-top: 20px;
                        margin-right: 10px;
                    }

                    .setDistance {
                        display: grid;
                        grid-template-columns:35% 10% 35% 20%;
                         margin-top: 40px;
                         background-color:red;
                       
                            .part1,.part3{
                              display:flex;
                              flex-direction:rows;
                              background-color:white;
                              align-items:center;
                              justify-content:center;
                               border-radius: 5px;
                              // padding-left:1px;
                              p{
                               font-size: 15px;
                             font-weight: bold;
                             color:gray;
                              }
                              input {
                            text-align: center;
                            border: none;
                            border-radius: 5px;
                            max-width: 50px;
                            height: 40px;
                           // margin: 0 3px;
                            font-size: 15px;
                            font-weight: bold;
                               }
                             }
                        
                         
                        .part2{
                            margin: 15px 0 0 2px;
                        }
                        
                        button {
                            background-color: red;
                            color: white;
                            font-size: 15px;
                            font-weight: bold;
                            border-radius: 3px;
                            width: 42px;
                            height: 40px;
                            border: none;
                            cursor: pointer;
                            margin:5px 0 0 3px;
                            padding: 0;
                            transition: background-color 0.2s ease, transform 0.2s ease;

                            &:hover {
                                background-color: #ff4546;
                                transform: scale(1.05);
                                    }
                        }
                    }
                }
            }
        }
         
        .shop2{
          display:grid;
          grid-template-rows:4% 92% 4%;
          //border:1px solid blue;

           .searchName{
            display:grid;
            grid-template-columns:70% 30%;
            grid-template-rows:45px;
           // border:1px solid #ccc;
              .inputName{
               display:grid;
               grid-template-columns:70% 30%;
               gap:0px;
              // border:1px solid #ccc;
               
                 .searchPlace{
                   border:1px solid #ccc;
                   border-radius:2px;
                   display:grid;
                    grid-template-columns:90% 10%;
                    max-height:30px;
                    align-items:center;
                    margin-left:30px;
                 .sortName{
                    //   width:60%;
                    // max-height:30px;
                     border: none;
                     outline: none;
                     font-size: 16px;
                     margin-left:10px;
                    }
                   button{
                            background: none;
                            border: none;
                            cursor: pointer;
                            right:0;
                        } 
                 }
            }
                .mostPopular {
                    display:flex;
                    flex-direction:row;
                    justify-content:space-between;
                    align-items: center; 
                   .h4{
                    font-size:10px;
                     }

                    .Dropdown-Popular {
                    width:200px;
                    max-height: 50px; 
                    overflow-y: auto;
                    padding: 5px; 
                    margin:0 55px 10px 0;
                    }
                }
           }
           .shopItems{
           // border: 1px solid #ccc;
            background-color: white;
            display: grid;
             grid-template-columns: repeat(4, minmax(150px, 1fr)); 
            //grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap:30px;
            margin:0 0px 0 10px;
             object-fit:cover;
            
            //  .shopItems > :nth-child(n){
            //     display:grid;
            //     grid-template-columns:45% 35% 10% 10%;
                
                //  & > * {
                //     background-color: #fff;
                //     border-radius: 1em;
                //     text-align: left;
                //     display: flex;
                //     flex-direction: column;
                //     align-items: left;
                //     overflow: hidden;
                //     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                //     transition: transform 0.3s ease, box-shadow 0.3s ease;

                //     &:hover {
                //         transform: translateY(-5px);
                //         box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
                //     }
                // }


                .deal {
                background-color: #fff;
                border-radius: 1em;
                text-align: left;
                display:grid;
                grid-template-rows:49% 30% 6% 15%;
                // display: flex;
                // flex-direction: column;
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
                    //height: 55%;
                    margin: 0;
                }

                .icon {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .sale-badge {
                    width:30px;
                    height:15px;
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
                 .product-Text{
                     dispaly:grid;
                     grid-template-rows:30% 40% 30%;
                     .product-Brand{
                        h4 {
                        font-family: 'Bebas Neue', sans-serif;
                        margin: 10px 0px 0px 10px;
                        font-size: 14px;
                        color: #333;
                        color:gray;
                        }
                    } 
                      .product-Name{ 
                      height:53px; 
                        p{
                        margin: 5px 0px 0px 10px;
                        font-size: 18px;
                        font-weight:bold;
                        }
                    }
                      .product-Seller{      
                        h5{
                        font-family: 'Bebas Neue', sans-serif;
                        color:darkgray;
                        margin: 7px 0px 0px 10px;
                        span{
                        color:gray;
                        }
                    }    
                 }
                }
                .stars {
                    display: flex;
                    margin: 0px 0px 0px 10px;
                }
                .pricing{
                color:red;
                display:flex;
                flex-direction:row;
                    justify-content: space-between;
                    margin:10px 0px 0px 0px;
                p{
                    font-size:20px;
                    margin:5px;
                    font-weight:bold;
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
                    //position:absolute;
                    // bottom:5px;
                    // right:5px;
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
                }
            }

           .pagi {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 5px 20px 0 20px;
        //background-color: red;

            .pagi-bar {
            justify-self: center;
            align-self: center;
           // background-color: yellow;
            width: 50%;
            text-align: center;
           button{
             transition: border 0.2s ease, transform 0.2s ease;
                &:hover{
                 transform: scale(1.05);
                 border:1.5px solid blue;
                }
            }
            
            }
        }
    }
}
`;

export default Wrapper;
