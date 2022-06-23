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
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width: 10vw;
    height: auto;
}
h1{
    font-size:${props => props.theme.fontxl};
    font-family: "Kaushan Script";
}
`

const FooterComponent = styled.div`
display: flex;
`


function Footer() {
    return (
        <Section>
            <LogoContainer>
                <img src={logo} alt='' />
                <h1>Wibe Studios</h1>
            </LogoContainer>
            <FooterComponent>
                <ul>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Shop</li>
                    <li>New Arrival</li>
                    <li>
                        <a href='https://google.com' target="_blank" rel="noreferrer">Look Book</a>
                    </li>
                    <li>
                        <a href='https://google.com' target="_blank" rel="noreferrer">Review</a>
                    </li>
                </ul>
            </FooterComponent>
        </Section>
    )
}

export default Footer