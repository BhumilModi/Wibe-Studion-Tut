import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
width: 100vw;
z-index: 6;
position: absolute;
top: 0;

display: flex;
justify-content: center;
align-items: center;
`

const MenuItem = styled.ul`
position: relative;
heigth: 5rem;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
list-style: none;

display: flex;
justify-content: space-around;
align-item: center;
width: 100%;
padding: 0;
`

const Menubtn = styled.li` 
position : absolute;
top: 100%;
left: 50%;
transform : translateX(-50%);
background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
list-style-type: style none;
color:${props => props.theme.body};
width: 15rem;
height: 2.5rem;
display: flex;
justify-content: center;
align-items: center;

clip-path: polygon(0 0, 100% 0, 80% 100% , 20% 100%);
font-size: ${props => props.theme.fontmd};
font-weight: 600;
text-transform: uppercase;

cursor:pointer;
`

export const Navbar = () => {
    return (
        <NavContainer>
            <MenuItem>
                <Menubtn>Menu</Menubtn>
            </MenuItem>
        </NavContainer>
    )
}
