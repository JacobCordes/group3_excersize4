import { Router } from 'next/router';
import {useRouter} from 'next/router'
//----IMPORTS----//

import React from 'react';
import styled from 'styled-components';
import RedButton from '../TrashLogComponents/RedButton';
import Pointer from '../../comps/Pointer';

//----COMPONENT STYLING----//

const DivCont = styled.div `




`;

const ButtonCont1 = styled.span `
button:hover{
    box-shadow: 2.5px 2.5px 6px #363636;
    transition: 200ms linear;
  }
`;

const Button = styled.button `
background-color:#82B687;
border:none;
border-radius: 20px;
width:237px;
height:72px;
color:white;
box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.4);
`;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

const ButtonText1 = styled.h3 `
    font-family: 'Martel Sans';
    line-height:25px;
    font-size:20px;
    text-align:center;
`;

//----COMPONENT BUILDS----//

const GreenButton = ({
    text="Looks Good!",
    routeTo="/"
}) => {

        
        function getData(){

      if(process.browser){
    var cans = sessionStorage.getItem("cans");
    var bottles = sessionStorage.getItem("bottles");
    var cardboard = sessionStorage.getItem("cardboard");
    var organics = sessionStorage.getItem("organics");
  
    document.getElementById("cans").innerHTML = cans;
    document.getElementById("bottles").innerHTML = bottles;
    document.getElementById("cardboard").innerHTML = cardboard;
    document.getElementById("organics").innerHTML = organics;
  
  
    var integerv1 = parseInt(cans, 10)
    var integerv2 = parseInt(bottles, 10)
    var integerv3 = parseInt(cardboard, 10)
    var integerv4 = parseInt(organics, 10)
  
  
    var alldata = document.getElementById("totalcollected").innerHTML = integerv1 + integerv2 + integerv3 + integerv4;
    
    if(alldata === 0){
      routeTo = "/contribution0"
     }

    else if(alldata === 1){
     
    routeTo = "/under5"
    }

    else if(alldata === 2){
     
      routeTo = "/under5"
      }

      else if(alldata === 3){
     
        routeTo = "/under5"
        }

        else if(alldata === 4){
     
          routeTo = "/under5"
          }

    else if(alldata === 5){
     
      routeTo = "/contribution5"
      }

      else if(alldata === 6){
     
        routeTo = "/contribution5"
        }

        else if(alldata === 7){
     
          routeTo = "/contribution5"
          }

          else if(alldata === 8){
     
            routeTo = "/contribution5"
            }

            else if(alldata === 9){
     
              routeTo = "/contribution5"
              }
              

            else if(alldata === 10){
     
              routeTo = "/contribution10"
              }

              else if(alldata === 11){
     
                routeTo = "/contribution10"
                }

                else if(alldata === 12){
     
                  routeTo = "/contribution10"
                  }

                  else if(alldata === 13){
     
                    routeTo = "/contribution10"
                    }

                    else if(alldata === 14){
     
                      routeTo = "/contribution10"
                      }

                      else if(alldata === 15){
     
                        routeTo = "/contribution15"
                        }

                        else if(alldata === 16){
     
                          routeTo = "/contribution15"
                          }
    
                          
                          else if(alldata === 17){
     
                            routeTo = "/contribution15"
                            }
    
                            
                            else if(alldata === 18){
     
                              routeTo = "/contribution15"
                              }
    
                              
                              else if(alldata === 19){
     
                                routeTo = "/contribution15"
                                }

                                else if(alldata === 20){
     
                                  routeTo = "/contribution20"
                                  }

                                  else if(alldata === 21){
     
                                    routeTo = "/contribution20"
                                    }

                                    else if(alldata === 22){
     
                                      routeTo = "/contribution20"
                                      }

                                      else if(alldata === 23){
     
                                        routeTo = "/contribution20"
                                        }

                                        else if(alldata === 24){
     
                                          routeTo = "/contribution20"
                                          }

                                          else if(alldata === 25){
     
                                            routeTo = "/contribution25"
                                            }

                                            else if(alldata === 26){
     
                                              routeTo = "/contribution25"
                                              }

                                              else if(alldata === 27){
     
                                                routeTo = "/contribution25"
                                                }

                                                else if(alldata === 28){
     
                                                  routeTo = "/contribution25"
                                                  }

                                                  else if(alldata === 29){
     
                                                    routeTo = "/contribution25"
                                                    }

                                                    else if(alldata === 30){
     
                                                      routeTo = "/contribution30"
                                                      }

                                                      else if(alldata === 31){
     
                                                        routeTo = "/contribution30"
                                                        }

                                                        else if(alldata === 32){
     
                                                          routeTo = "/contribution30"
                                                          }

                                                          else if(alldata === 33){
     
                                                            routeTo = "/contribution30"
                                                            }

                                                            else if(alldata === 34){
     
                                                              routeTo = "/contribution30"
                                                              }

                                                              else if(alldata === 35){
     
                                                                routeTo = "/contribution30"
                                                                }

                                                                else if(alldata === 36){
     
                                                                  routeTo = "/contribution30"
                                                                  }

                                                                  else if(alldata === 37){
     
                                                                    routeTo = "/contribution30"
                                                                    }

                                                                    else if(alldata === 38){
     
                                                                      routeTo = "/contribution30"
                                                                      }

                                                                      else if(alldata === 39){
     
                                                                        routeTo = "/contribution30"
                                                                        }

                                                                        else if(alldata === 40){
     
                                                                          routeTo = "/contribution40"
                                                                          }

                                                                          else if(alldata === 41){
     
                                                                            routeTo = "/contribution40"
                                                                            }

                                                                            else if(alldata === 42){
     
                                                                              routeTo = "/contribution40"
                                                                              }

                                                                              else if(alldata === 43){
     
                                                                                routeTo = "/contribution40"
                                                                                }

                                                                                else if(alldata === 44){
     
                                                                                  routeTo = "/contribution40"
                                                                                  }

                                                                                  else if(alldata === 45){
     
                                                                                    routeTo = "/contribution40"
                                                                                    }

                                                                                    else if(alldata === 46){
     
                                                                                      routeTo = "/contribution40"
                                                                                      }

                                                                                      else if(alldata === 47){
     
                                                                                        routeTo = "/contribution40"
                                                                                        }

                                                                                        else if(alldata === 48){
     
                                                                                          routeTo = "/contribution40"
                                                                                          }

                                                                                          else if(alldata === 49){
     
                                                                                            routeTo = "/contribution40"
                                                                                            }

                                                                                            else if(alldata === 50){
     
                                                                                              routeTo = "/contribution50"
                                                                                              }

                                                                                              else if(alldata >= 51){
     
                                                                                                routeTo = "/toomany"
                                                                                                }
            
    

  

    
  }

}

 


    
    const router = useRouter();

   return <DivCont onClick={getData}>
         <h1>Is This Right?</h1>
         <h1>Click for Your Inputs</h1>
         <Pointer />
  <h3>Cans Collected:</h3><h1 id="cans"></h1>
  <h3>Bottles Collected:</h3><h1 id="bottles"></h1>
  <h3>Cardboard Collected:</h3><h1 id="cardboard"></h1>
  <h3>Organics Collected:</h3><h1 id="organics"></h1>
  <hr></hr>
  <h3>Total items<br></br>Collected</h3> 
  <h1 id="totalcollected"></h1>
  
     <br></br>
  <RedButton routeTo="/trashlog"text="Nope."/><br></br>
<br></br>
      <ButtonCont1 id="testbutton" onClick={()=>router.push(routeTo)}>       
       <Button>
           <ButtonText1>{text}</ButtonText1>
           </Button>
   </ButtonCont1>
   </DivCont>
}



//----EXPORTS----//

export default GreenButton