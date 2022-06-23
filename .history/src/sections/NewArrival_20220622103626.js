import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
position: relative;
min-height: 100vh;
width: 80vw;
display: flex;
margin: 0 auto;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family: "Kaushan Script";
font-weight: 300;
color:${props => props.theme.body};
position: absolute;
top: 1rem;
left : 5%;
z-index: 11;
`

function NewArrival() {
    return (
        <Section>
            <Title data-scroll data-scroll-speed="-1">New Arrivals</Title>
        </Section >
    )
}

export default NewArrival