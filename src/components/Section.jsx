import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";

function Section(props) {
  return (
    <Wrap bgimg={props.bgimg}>
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>

        <Text>
    <h1>{props.title}</h1>
    <p>{props.descp} </p>
        </Text>
</motion.div>
    <Button>
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
     <Buttongroup>
        <Leftbutton>
            {props.lbuton}
        </Leftbutton>
        <Rightbutton>
            {props.rbuton}

        </Rightbutton>
        </Buttongroup>   
        </motion.div>

        <Downarrow src='/images/down-arrow.svg' />
    </Button>

   

    </Wrap>
  )
}

export default Section
const Wrap=styled.div`

background-image:${props=>`url("/images/${props.bgimg}")`};

width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`
const Text=styled.div`
padding-top:15vh;
text-align:center;
font-size:30px;


`;

const Buttongroup=styled.div`
display:flex;
padding-bottom:30px;



`;
const Leftbutton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:250px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
font-size:12px;
cursor:pointer;
text-transform:uppercase;
margin-right:10px;

`;
const Rightbutton=styled(Leftbutton)`
background-color:white;
color:black;
`;

const Downarrow=styled.img`
height:50px;
margin-bottom:10px;
margin-left:46%;
animation:animatedown infinite 1.5s;
`;

const Button=styled.div`
align-items:center;

`;

