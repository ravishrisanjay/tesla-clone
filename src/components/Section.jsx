import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

function Section(props) {
    return (
        <Wrap bgImg={`${process.env.PUBLIC_URL}/images/${props.bgimg}`}> 
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                <Text>
                    <h1>{props.title}</h1>
                    <p>{props.descp}</p>
                </Text>
            </motion.div>
            <Button>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                    <ButtonGroup>
                        <LeftButton>{props.lbuton}</LeftButton>
                        <RightButton>{props.rbuton}</RightButton>
                    </ButtonGroup>
                <DownArrow src={`${process.env.PUBLIC_URL}/images/down-arrow.svg`} />
                </motion.div>
            </Button>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    background-image: ${props => `url("${props.bgImg}")`};
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Text = styled.div`
    padding-top: 15vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    padding-bottom: 30px;
`;

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    font-size: 12px;
    cursor: pointer;
    text-transform: uppercase;
    margin-right: 10px;
`;

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
`;

const DownArrow = styled.img`
 height:50px;
margin-bottom:10px;
margin-left:46%;
animation:animatedown infinite 1.5s;

`;

const Button = styled.div`

align-items: center;

`;