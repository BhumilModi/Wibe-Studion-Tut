import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
width: 100vw;
height: 10vh;
z-index: 6;
position: absolute;
top: 0;

display: flex;
justify-content: center;
align-items: center;
`

export const Navbar = () => {
    return (
        <NavContainer>hi</NavContainer>
    )
}
