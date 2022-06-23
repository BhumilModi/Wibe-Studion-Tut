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
font-size: ${props => props.theme.fontbig};
font-family: "Kaushan Script";
font-weight: 300;
position: absolute;
top: 1rem;
left : 5%;
z-index: 5;
`

function NewArrival() {
    return (
        <Section>
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                New Arrival
            </Title>
        </Section>
    )
}

export default NewArrival