import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
    const [menu, setMenu] = useState(false);
    
    return (
        <>
            <Container>
                <a href="#">
                    <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Tesla Logo" />
                </a>

                <Menu>
                    <a>MODEL 3</a>
                    <a>MODEL S</a>
                    <a>MODEL Y</a>
                    <a>MODEL X</a>
                </Menu>
                <RightMenu>
                    <a>SHOP</a>
                    <a>TESLA ACCOUNT</a>
                    <CustomMenu onClick={() => setMenu(true)} />
                </RightMenu>
            </Container>
            <ListMenu state={menu}>
                <CloseWrap>
                    <CustomClose onClick={() => setMenu(false)} />
                </CloseWrap>
                <li><a >Demo Drive</a></li>
                <li><a >Insurance</a></li>
                <li><a >Military Purchase Program</a></li>
                <li><a >Video Guides</a></li>
            </ListMenu>
        </>
    );
}

export default Header;

const Container = styled.div`
    z-index: 1;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    a {
        font-weight: 800;
        cursor: pointer;
        text-transform: uppercase;
        padding: 0 10px;
        font-size: 18px;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
        padding: 0 10px;
        cursor: pointer;
    }
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
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseWrap = styled.div`
    position: absolute;
    top: 50px;
    right: 20px;
`;