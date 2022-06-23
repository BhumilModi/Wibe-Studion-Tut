import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
position: relative;
min-height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items:center;
margin: 0 auto;
background-color: yellow;
`

const Overlay = styled.div`
position: absolute;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
width: 30vw;
height: 90vh
z-index:11;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family: "Kaushan Script";
font-weight: 300;
color:${props => props.theme.body};
text-shadow: 1px 1px 1px ${props => props.theme.text};
position: absolute;
top: 1rem;
left : 5%;
z-index: 11;
`

function NewArrival() {
    return (
        <Section>
            <Overlay />
            <Title data-scroll data-scroll-speed="-1">New Arrivals</Title>
        </Section >
    )
}

export default NewArrival