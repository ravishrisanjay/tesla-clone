import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Section(props) {
    const [check,setcheck]=useState(props.check);
    return (
<Wrap bgImg={`${process.env.PUBLIC_URL}/images/${props.bgimg}`} check={check}>
            
                <Text>
                    <h1><b>{props.title}</b></h1>
                    <p>{props.descp}</p>
                </Text>
            <Button>
              
                    <ButtonGroup>
                    <NavLink to='/tesla-clone/java'>
                    
                        <LeftButton>{props.lbuton}</LeftButton>
                    </NavLink>
                    <NavLink to='/java'>
                        <RightButton>{props.rbuton}</RightButton>
                    </NavLink>
                    </ButtonGroup>
                {/* <DownArrow src={`${process.env.PUBLIC_URL}/images/down-arrow.svg`} /> */}
               
            </Button>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    background-image: ${props => `url("${props.bgImg}");justify-content:${props.check}; `}
   
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.div`
    padding-top: 13vh;
    padding-bottom:9vh;
    h1{
    b{
    color:white;
    font-size:67px;
}}
    p{
    
    color:white;
    font-size:30px;
    
    }
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    padding-bottom: 30px;
`;

const LeftButton = styled.div`
    background-color: rgb(37, 100, 228);
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    font-size: 12px;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom:20px;
    font-weight:600;
`;

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
`;

// const DownArrow = styled.img`
//  height:50px;
// margin-bottom:10px;
// margin-left:46%;
// animation:animatedown infinite 1.5s;

// `;

const Button = styled.div`

align-items: center;

`;