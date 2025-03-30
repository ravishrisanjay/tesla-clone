import React from 'react'
import styled from 'styled-components';
import Section from './Section';
function Home() {
  return (
    
    <Container>
        <Section   title='Model 3'  descp='Oder Online For Touchless Delivery'  lbuton=' Order Now' rbuton=' Learn More' bgimg='model-3.jpg'/>
        <Section   title='New Model Y'  descp='$7,500 Federal Tax Credit at Purchase'  lbuton=' Order Now' rbuton=' Learn More' bgimg='model-x.jpg'/>
        <Section   title='Model X'  descp='Free Supercharging Included'  lbuton=' Order Now' rbuton=' Learn More' bgimg='model-y.jpg'/>
        <Section   title='Model S'  descp='Free Supercharging Included'  lbuton=' Order Now' rbuton=' Learn More' bgimg='model-s.jpg'/>
        <Section   title='Solar Panels'  descp='Schedule a Virtual Consultation'  lbuton=' Order Now' rbuton=' Learn More' bgimg='solar-roof.jpg'/>
        <Foter> 

            <li>Tesla © 2025
            </li>
            <li>Privacy & Legal</li>
            <li>Vehicle Recalls</li>
            <li>Contact</li>
            <li>News</li>
            <li>Get Updates</li>
        </Foter>
    </Container>
  )
}

export default Home;

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