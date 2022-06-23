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
const Menubtn = styled.div`
`

export const Navbar = () => {
    return (
        <NavContainer>
            <Menubtn>Menu</Menubtn>
        </NavContainer>
    )
}
