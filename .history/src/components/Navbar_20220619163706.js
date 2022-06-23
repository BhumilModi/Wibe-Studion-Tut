import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

const NavContainer = styled(motion.div)`
width: 100vw;
z-index: 6;
position: absolute;
top: ${props => props.clicked ? '0' : `-5rem`};

display: flex;
justify-content: center;
align-items: center;
transition: all 0.7s ease;
`

const MenuItems = styled(motion.ul)`
position: relative;
height: 5rem;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
list-style: none;

display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
padding: 0 10rem;
`

const Menubtn = styled.li` 

background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
list-style-type: style none;
color:${props => props.theme.body};
width: 15rem;
height: 2.5rem;
display: flex;
justify-content: center;
align-items: center;

clip-path: polygon(0 0, 100% 0, 80% 100% , 20% 100%);

position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%) ;

font-size: ${props => props.theme.fontmd};
font-weight: 600;
text-transform: uppercase;

cursor:pointer;
`

const MenuItem = styled(motion.li)`
text-transform: uppercase;
color: ${props => props.theme.text};
`

export const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <NavContainer clicked={clicked}
            initial={{
                y: '-100%'
            }}
            animate={{
                y: 0
            }}
            transition={{
                duration: 2,
                delay: 2
            }}
        >
            <MenuItems
                drag="y"
                dragConstraints={{
                    top: 0,
                    bottom: 70,
                }}
                dragElastic=(0.05),
            >
            <Menubtn onClick={() => setClicked(!clicked)}>Menu</Menubtn>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Shop</MenuItem>
            <MenuItem>New Arrival</MenuItem>
        </MenuItems>
        </NavContainer >
    )
}