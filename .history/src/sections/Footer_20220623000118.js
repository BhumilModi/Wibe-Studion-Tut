import React from 'react'
import styled from 'styled-components'
import logo from '../assets/Svgs/star_white_48dp.svg'

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
color: ${props => props.theme.text};
`

const LogoContainer = styled.div`
`

function Footer() {
    return (
        <Section>
            <LogoContainer>
                <img src={logo} alt='' />
            </LogoContainer>
        </Section>
    )
}

export default Footer