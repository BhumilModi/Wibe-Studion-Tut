import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: absolute;
top: 1rem;
left: 1rem;

width: 100%;
color: ${props => props.theme.text};
`

const Logo = () => {
    return (
        <Container>Logo</Container>
    )
}

export default Logo