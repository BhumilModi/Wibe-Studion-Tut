import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { useLocomotiveScroll } from 'react-locomotive-scroll'

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
cursor: pointer;
`

export const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const { scroll } = useLocomotiveScroll();

    const handleScroll = (id) => {
        let elem = document.querySelector(id);
        setClicked(!clicked)
        scroll.scrollTo(elem,
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25, 0.0, 0.35, 1.0],
            }
        )
    }


    return (
        <NavContainer clicked={clicked}
            initial={{
                y: '-100%'
            }}
            animate={{
                y: 0
            }}
            transition={{
                duration: 5,
                delay: 2
            }}
        >
            <MenuItems
                drag="y"
                dragConstraints={{
                    top: 0,
                    bottom: 70,
                }}
                dragElastic={0.5}
                dragSnapToOrigin
            >
                <Menubtn onClick={() => setClicked(!clicked)}>Menu</Menubtn>
                <MenuItem
                    onClick={() => handleScroll('#home')}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9, y: 0 }}
                >Home</MenuItem>
                <MenuItem
                    onClick={() => handleScroll('.about')}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9, y: 0 }}
                >About</MenuItem>
                <MenuItem
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9, y: 0 }}
                    onClick={() => handleScroll('#shop')}
                >Shop</MenuItem>
                <MenuItem
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9, y: 0 }}
                    onClick={() => handleScroll('#new')}
                >New Arrival</MenuItem>
            </MenuItems >
        </NavContainer >
    )
}
