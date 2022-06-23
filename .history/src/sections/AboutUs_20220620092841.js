import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
position: relative;
min-height: 100vh;
overflow: hidden;
width: 80vw;
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

export default function AboutUs() {
    return (
        <Section>
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                About Us
            </Title>
        </Section>
    )
}
