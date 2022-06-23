import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
min-height: 100vh;
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
        <Section>NewArrival</Section>
    )
}

export default NewArrival