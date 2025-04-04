import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { MdOutlineLanguage } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";
function Header() {
    const [isHover, sethover] = useState(false);
    const [energyhover,setenergy]=useState(false);
    const [charginghover,setcharg]=useState(false);
    const [discover,setdiscover]=useState(false);
    const [shop,setshop]=useState(false);
    return (
        <>
        {discover&& <Discover   onMouseLeave={()=>{setdiscover(false)}}>
            <div id='1'>
                <li id='head'>Resources</li>
                <li>Demo Drive</li>
                <li>Insurance
                </li>
                <li>Military Purchase Program</li>
                <li>Video Guides</li>
                <li>Customer Stories</li>
                <li>Events</li>
            </div>
            <div id='2'>

                <li id='head'>Location Services</li>
                <li>Find Us</li>
                <li>Find a Collision Center</li>
                <li>Find a Certified Installer</li>
                
            </div>
            <div id='3'>

                <li id='head'>Company</li>
                <li>About</li>
                <li>Careers</li>
                <li>Investor Relations</li>
               
            </div>
            </Discover>}
           {isHover && <HoverVehicle onMouseLeave={()=>sethover(false)}>
                <div id='left'>

                    <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/vechial_hover.avif`} alt="hover_img" />
                        <h4>Model S</h4>
                        <div id='mod_buton'>

                            <a href=''>Learn</a>

                            <a href=''>    Order</a>
                        </div>
                    </div>
                    <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/m2.avif`} alt="hover_img" />
                        <h4>Model 3</h4>
                        <div id='mod_buton'>

                            <a href=''>Learn</a>

                            <a href=''>    Order</a>
                        </div>
                    </div>
                    <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/m3.avif`} alt="hover_img" />
                        <h4>New Model Y</h4>
                        <div id='mod_buton'>

                            <a href=''>Learn</a>

                            <a href=''>    Order</a>
                        </div>
                    </div>
                    <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/m4.avif`} alt="hover_img" />
                        <h4>Model X</h4>
                        <div id='mod_buton'>

                            <a href=''>Learn</a>

                            <a href=''>    Order</a>
                        </div>
                    </div>
                    <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/m5.avif`} alt="hover_img" />
                        <h4>Cybertruck</h4>
                        <div id='mod_buton'>

                            <a href=''>Learn</a>

                            <a href=''>    Order</a>
                        </div>
                    </div>
                    <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/m6.avif`} alt="hover_img" />
                        <h4>Inventory</h4>
                        <div id='mod_buton'>

                            <a href=''>Learn</a>

                            <a href=''>    Order</a>
                        </div>
                    </div>
                </div>
                <div id='right'>
                    <li>Help Me Choose</li>
                    <li>Demo Drive</li>
                    <li>Trade-in</li>
                    <li>Compare</li>
                    <li>Help Me Charge</li>
                    <li>Fleet</li>
                    <li>Semi</li>
                    <li>Roadster</li>
                    <li>Federal Tax Credit</li>
                </div>
            </HoverVehicle>}
            {energyhover && <EnergyHover   onMouseLeave={()=>setenergy(false)}>
                <div id='left'>
                <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/er1.avif`} alt="hover_img" />
                        <h4>Solar Panels</h4>
                        <div id='mod_buton'>

                            <a href=''>Learn</a>

                            <a href=''>    Order</a>
                        </div>
                    </div>
                <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/er2.avif`} alt="hover_img" />
                        <h4>Solar Roof</h4>
                        <div id='mod_buton'>

                            <a href=''>Learn</a>

                            <a href=''>    Order</a>
                        </div>
                    </div>
                <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/er3.avif`} alt="hover_img" />
                        <h4>Powerwall</h4>
                        <div id='mod_buton'>

                            <a href=''>Learn</a>

                            <a href=''>    Order</a>
                        </div>
                    </div>
                <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/er4.avif`} alt="hover_img" />
                        <h4>Megapack</h4>
                        <div id='mod_buton'>

                            <a href=''>Learn</a>

                            <a href=''>    Order</a>
                        </div>
                    </div>
                </div>
                
                <div id='right'>
                    <li>Schedule a Consultation</li>
                    <li>Why Solar</li>
                    <li>Incentives</li>
                    <li>Support</li>
                    <li>Partner with Tesla</li>
                    <li>Commercial</li>
                    <li>Utilities</li>
                    
                </div>
                
                
                </EnergyHover>}

                {charginghover && <Charging  onMouseLeave={()=>setcharg(false)}>
                    <div id='left'>
                    <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/ch1.avif`} alt="hover_img" />
                        <h4>Charging</h4>
                        <div id='mod_bts'>

                            <a href=''>Learn</a>

                            
                        </div>
                    </div>
                    <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/ch2.avif`} alt="hover_img" />
                        <h4>Home Charging</h4>
                        <div id='mod_buton'>

                            <a href=''>Learn</a>

                            <a href=''>   Shop</a>
                        </div>
                    </div>
                    <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/ch3.avif`} alt="hover_img" />
                        <h4>Supercharging</h4>
                        <div id='mod_buton'>

                            <a href=''>Learn</a>

                            <a href=''>    Find</a>
                        </div>
                    </div>
                    </div>
                
                <div id='right'>
                    <li>Help Me Charge</li>
                    <li>Charging Calculator</li>
                    <li>Charging With NACS</li>
                    <li>Supercharger Voting</li>
                    <li>Host a Supercharger</li>
                    <li>Commercial Charging</li>
                    <li>Host Wall Connectors</li>
                    
                </div>
                    
                    
                    </Charging>}
            {shop && <Shop   onMouseLeave={()=>setshop(false)}>
                <div id='full'>
                <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/sh1.avif`} alt="hover_img" />
                        <h4>Charging</h4>
                        
                        </div>
                <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/sh2.avif`} alt="hover_img" />
                        <h4>Vehicle Accessories</h4>
                        
                        </div>
                <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/sh3.avif`} alt="hover_img" />
                        <h4>Apparel</h4>
                        
                        </div>
                <div id='mod_container' >
                        <img src={`${process.env.PUBLIC_URL}/images/sh4.avif`} alt="hover_img" />
                        <h4>Lifestyle</h4>
                        
                        </div>

                </div>
                
                </Shop>}

            <Container  pop={isHover}>
                <a href="#">
                    <img style={{height:isHover||energyhover||charginghover||discover||shop?'50px':'96px'}} 
                    src={isHover||energyhover||charginghover||discover||shop?`${process.env.PUBLIC_URL}/images/blacklogo.png`:`${process.env.PUBLIC_URL}/images/tesla_logo.png`} alt="Tesla Logo" />
                </a>

                <Menu>

                    <a id='vehicle' href='/tesla-clone/Testing' >
                    <b style={{ color: isHover||energyhover ||charginghover||discover||shop? "black" : "white" }} onMouseEnter={()=>{sethover(true);setenergy(false);setcharg(false);setdiscover(false);setshop(false)}}>Vehicles </b>

                    </a>


                    <a><b style={{ color: isHover||energyhover||charginghover ||discover||shop? "black" : "white" 
                     }}   onMouseEnter={()=>{setenergy(true) ;sethover(false);setcharg(false);setdiscover(false);setshop(false)}}
                     >Energy</b></a>
                    <a><b style={{ color: isHover||energyhover ||charginghover||discover||shop? "black" : "white" }}
                    onMouseEnter={()=>{setenergy(false) ;sethover(false);setcharg(true);setdiscover(false);setshop(false)}}
                    >Charging</b></a>
                    <a><b style={{ color: isHover ||energyhover||charginghover ||discover||shop? "black" : "white" }}
                    onMouseEnter={()=>{setdiscover(true);setenergy(false) ;sethover(false);setcharg(false);setshop(false)}}
                    >Discover</b></a>
                    <a><b style={{ color: isHover||energyhover ||charginghover||discover||shop? "black" : "white" }}
                     onMouseEnter={()=>{setdiscover(false);setenergy(false) ;sethover(false);setcharg(false);setshop(true)}}
                    >Shop</b></a>
                </Menu>

                <RightMenu>

                    <FaRegCircleQuestion style={{ fill: isHover||energyhover||charginghover||discover||shop?'black': 'white', marginRight: 10 }} />
                    <MdOutlineLanguage style={{ fill: isHover||energyhover||charginghover||discover||shop?'black': 'white', marginRight: 10 }} />
                    <RiAccountCircleLine style={{ fill:isHover||energyhover||charginghover||discover||shop?'black': 'white', marginRight: 10 }} />


                </RightMenu>

            </Container>
          

        </>
    );
}

export default Header;

const Shop=styled.div`

display: flex;
    z-index: 4  ;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: auto;
    max-height: 40vh;
    background-color: white;
    padding: 120px 50px 40px 50px;
   
    gap:70px;
    display:flex;
    flex-direction:column;

    #full{
     align-items:center;
    justify-content:center;
    height:auto;
    display:flex;
     margin-bottom:10px;

    
    }
 img {
        position: relative;
        width: 100%;
            height:100px;
            max-height: 190px;
           
    }

    #mod_container {
        text-align: center;
        align-items: center;
      
        position: relative;

    }
        @media (max-width: 1400px) {
        display: none;
    }

`

const Discover=styled.div`
display: flex;
    z-index: 4  ;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: auto;
    max-height: 40vh;
    background-color: white;
    padding: 120px 50px 40px 50px;
    align-items:center;
    justify-content:center;
    gap:70px;
    li{
    list-style:none;
    font-size:19px;
    padding-bottom:7px;
    
    }
    div{
    top:0;
    height:200px;
    position:relative;
    }
    #head{
    margin-bottom:10px;
    color:rgba(94, 77, 77, 0.58)
    }
 @media (max-width: 1400px) {
        display: none;
    }


`
const Charging=styled.div`
 display: flex;
    z-index: 3  ;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: auto;
    max-height: 40vh;
    background-color: white;
    padding: 120px 50px 40px 50px;

    #left,
    #right {
        flex-direction: column;
        position: relative;
        flex-wrap: wrap;
    }

    #mod_buton {
        position: relative;
        display: flex;
        flex-direction: row;
        gap:70px;
        a{
        }

    }

    #left {
        position: relative;
        width: 67vw;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items:center;
        margin-right:45px;
        gap:40px;
        margin-left:25%;
        }

    #mod_container {
        padding: 10px;
        text-align: center;
        align-items: center;
       min-height:300px;
       min-width:150px;
        max-height: 500px;
        max-width: 160px;
        position: relative;

    }

    img {
        position: relative;
        width: 100%;
        height: auto;
    }

    #right {
        display: flex;
        right: 0;
        margin-right: 20px;
        width: 28vw;
        height: auto;
        border-left:2px solid rgba(68, 63, 63, 0.51) ;
        padding:10px;
        li{
        list-style:none;
        align-items:center;
        padding:10px;
        font-weight:400;
        font-size:10px;
        }
    
    }

    @media (max-width: 1400px) {
        display: none;
    }
`;
const EnergyHover=styled.div`
  display: flex;
    z-index: 3  ;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: auto;
    max-height: 60vh;
    background-color: white;
    padding: 120px 50px 40px 50px;

    #left,
    #right {
        flex-direction: column;
        position: relative;
        flex-wrap: wrap;
    }

    #mod_buton {
        position: relative;
        display: flex;
        flex-direction: row;
        a{
        padding-left:25px;
            margin-left:15px;
        }

    }

    #left {
        position: relative;
        width: 67vw;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items:center;
        justify-content:space-between;
        margin-right:45px;
        }

    #mod_container {
        padding: 10px;
        text-align: center;
        align-items: center;
       min-height:300px;
       min-width:150px;
        max-height: 600px;
        max-width: 200px;
        position: relative;

    }

    img {
        position: relative;
        width: 100%;
        height: auto;
    }

    #right {
        display: flex;
        right: 0;
        margin-right: 20px;
        width: 28vw;
        height: auto;
        border-left:2px solid rgba(68, 63, 63, 0.51) ;
        padding:10px;
        li{
        list-style:none;
        align-items:center;
        padding:10px;
        font-weight:400;
        }
    
    }

    /* Move media query outside */
    @media (max-width: 1400px) {
        display: none;
    }
`;
const HoverVehicle = styled.div`
    display: flex;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: auto;
    max-height: 60vh;
    background-color: white;
    padding: 120px 50px 40px 50px;

    #left,
    #right {
        flex-direction: column;
        position: relative;
        flex-wrap: wrap;
    }

    #mod_buton {
        position: relative;
        display: flex;
        flex-direction: row;
        a{
        padding-left:25px;
            margin-left:5px;
        }

    }

    #left {
        position: relative;
        padding-left: 15%;
        width: 67vw;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    #mod_container {
        padding: 10px;
        text-align: center;
        align-items: center;
        max-height: 190px;
        max-width: 200px;
        position: relative;
    }

    img {
        position: relative;
        width: 100%;
        height: auto;
    }

    #right {
        display: flex;
        right: 0;
        margin-right: 20px;
        width: 28vw;
        height: auto;
        border-left:2px solid rgba(68, 63, 63, 0.51) ;
        padding:10px;
        li{
        list-style:none;
        align-items:center;
        padding:10px;
        font-weight:400;
        }
    
    }

    /* Move media query outside */
    @media (max-width: 1400px) {
        display: none;
    }
`;






const Container = styled.div`
    z-index: 1000;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 100px;
    position: absolute;
    

    top: 0;
    left: 0;
    right: 0;
    img{
         position: absolute;
  left: 0;
 
  transform: translateY(-50%); /* Centers it vertically */

    margin-left:20px;
    width:170px;
    }
   

`;

const Menu = styled.div`
 
     position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    margin-left:48px;
    a {
        b{
           z-index:4;
         font-size: 16px;
        // color:rgba(255, 255, 255, 0.9);
        font-weight:600;
        }
        font-weight: 1000;
        cursor: pointer;
        padding: 20px;
       
    }
   
    
    @media (max-width: 800px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    color:red;
    display: flex;
    align-items: center;
    font-size:24px;
    margin-right:10px;
     
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const ListMenu = styled.div`
    display: ${props => props.state ? 'flex' : 'none'};
    flex-direction: row;
    background-color: white;
    height: 270px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    list-style: none;
    align-items: center;
    justify-content: center;
    a{
    padding :20px;
    
    }

        @media (max-width: 768px) {
        flex-direction:column;
        li{
        padding:10px;
        }
        }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseWrap = styled.div`
    position: absolute;
    top: 50px;
    right: 20px;
`;

