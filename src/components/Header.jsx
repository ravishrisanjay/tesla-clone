import React from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react';

import CloseIcon from '@mui/icons-material/Close';
function Header() {
    const[menu,setmenu]=useState(false);

  return (
        <>
      <Container>
        <a href="#">
            <img src='/images/logo.svg' />
        </a>

        <Menu>
            <a>MODEL 3</a>
            <a>MODEL S</a>
            <a>MODEL Y</a>
            <a>MODEL X</a>
        </Menu>
    <Rightmenu>
        <a>SHOP</a>
        <a>TESLA ACCOUNT</a>
        <Custommenu   onClick={()=>setmenu(true)}/>
    </Rightmenu>
    </Container>
    <Listmenu  state={menu}>
        <CloseWrap>

        <Customclose   onClick={()=>setmenu(false)} />
        </CloseWrap>

        
        
        <li><a href='#'>Demo Drive</a></li>
        <li><a href='#'>Demo Drive</a></li>
        <li><a href='#'>Demo Drive</a></li>
        <li><a href='#'>Demo Drive</a></li>
        <li><a href='#'>Demo Drive</a></li>
        <li><a href='#'>Demo Drive</a></li>
        <li><a href='#'>Demo Drive</a></li>
        <li><a href='#'>Demo Drive</a></li>
    </Listmenu>
        </>
  )
}

export default Header

const Container=styled.div`
z-index:1;
min-height:60px;
display:flex;
align-items:center;
background-img:none;
justify-content:space-between;
padding : 0 20px;
position:fixed;
top:0;
left:0;
right:0;
`;

const Menu=styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;
margin-left:140px;

a{
font-weight:800;
cursor:pointer;
text-transform:uppercase;
padding:0 10px;
flex-wrap:nowrap;
font-size:25px;

}
@media(max-width:768px){
display:none;
}

`;

const Rightmenu=styled.div`

display:flex;
justify-content:center;
align-items:center;
a{
font-weight:600;
font-size:20px;

text-transform:uppercase;
padding:0 10px;
flex-wrap:nowrap;
cursor:pointer;


}

`;

const Custommenu=styled(MenuIcon)`
cursor:pointer;

`;
const Listmenu=styled.div`


display:${props=>props.state?'flex':'none'};
top:0;
left:0;
rigth:0;
background-color:white;
height:270px;
width:100%;
align-items:center;
li{
margin-left:50px;
list-style:none;
}
a{
font-weight:600;
text-decration:none;
}
`;
const Customclose=styled(CloseIcon)`
cursor:pointer;
`;

const CloseWrap=styled.div`
position:absolute;
top: 50px; 
  right: 0; 
  margin-right:19px;
 

`;