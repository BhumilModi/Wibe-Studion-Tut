import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
margin: 0 auto;
overflow: hidden;
display: flex;
justify-content: flex-start;
align-items: center;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontbig};
font-family: "Kaushan Script";
font-weight: 300;
position: absolute;
top: 1rem;
left : 5%;
z-index: 5;
`

function Shop() {
    return (
        <Section>
            <Title>New Arrivals</Title>
        </Section>
    )
}

export default Shop