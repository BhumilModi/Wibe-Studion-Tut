import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
position: relative;
min-height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin: 5rem auto;
background-color: ${props => props.theme.body};
`


function Footer() {
    return (
        <Section>Footer</Section>
    )
}

export default Footer