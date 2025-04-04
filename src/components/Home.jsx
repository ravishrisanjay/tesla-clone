import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { PiChatDotsLight } from "react-icons/pi";
import Header from './Header';
function Home() {
  return (
    <>
    <Header/>

    <Container>
        <Section   title='Model 3'  descp='$299/mo Leasing with $1,000 down '  lbuton=' Order Now' rbuton=' Learn More' bgimg='Homepage-Model-3-Desktop-US.avif' check='none'/>
        <Section   title='New Model Y'  descp='$7,500 Federal Tax Credit at Purchase'  lbuton=' Order Now' rbuton=' Learn More' bgimg='image.png' check='space-between'/>
        <Section   title='CYBER TRUCK'  descp='1.99% APR Ending March 31'  lbuton=' Order Now' rbuton=' Learn More' bgimg='cyber.avif'check='space-between'/>
        <Section   title='Model X'  descp='Free Supercharging Included'  lbuton=' Order Now' rbuton=' Learn More' bgimg='modelx.avif' check='space-between'/>
        <Section   title='Model S'  descp='Free Supercharging Included'  lbuton=' Order Now' rbuton=' Learn More' bgimg='models.avif'check='space-between'/>
        <Section   title='Solar Panels'  descp='Schedule a Virtual Consultation'  lbuton=' Order Now' rbuton=' Learn More' bgimg='Solar Panels.avif'check='space-between'/>
        <Section   title='Solar Roof'  descp='Produce Clean Energy From Your Roof'  lbuton=' Order Now' rbuton=' Learn More' bgimg='Solar Roof.avif'check='space-between'/>
        <Section   title='Powerwall'  descp=''  lbuton=' Order Now' rbuton=' Learn More' bgimg='Powerwall.avif'check='space-between'/>
        <Section   title='Accessories'  descp=''  lbuton=' Order Now' rbuton='Learn More' bgimg='Accessories.avif'check='space-between'/>
        <Foter> 

            <li>Tesla © 2025
            </li>
            <li>Privacy & Legal</li>
            <li>Vehicle Recalls</li>
            <li>Contact</li>
            <li>News</li>
            <li>Get Updates</li>
        </Foter>
        
        <Chat>

        <PiChatDotsLight style={{ fill: 'white'  , color:'white',fontSize:'30px' }}/>
        </Chat>
      
        
    </Container>
    </>
  )
}

export default Home;
const Chat=styled.div`
position:fixed;
right:10px;
bottom:10px;
border-radius:4px;
display:flex;
justify-content:center;
align-items:center;
width:50px;
height:40px;
background-color:rgb(36, 34, 34);
`
const Container=styled.div`
// height:100vh;
`

const Foter=styled.div`
display:flex;
height:200px;
align-items:center;
justify-content:center;

bottom:0;
right:0;
left:0;
li{
list-style:none;
padding:20px;
font-weight:700;


}

`