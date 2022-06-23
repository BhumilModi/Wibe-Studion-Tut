import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
touch-action: none;
overflow: hidden;

width: 100vw;
height: 100vh;

z-index: 6;
`


const Loader = () => {
    return (
        <Container>Loader</Container>
    )
}

export default Loader