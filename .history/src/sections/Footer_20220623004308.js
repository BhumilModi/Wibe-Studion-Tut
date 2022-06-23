import React from 'react'
import styled from 'styled-components'
import logo from '../assets/Svgs/star_white_48dp.svg'
import { motion } from 'framer-motion'
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

const FooterComponent = styled(motion.footer)`
width: 80vw;

ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${props => props.theme.text};
    border-bottom: 1px solid ${props => props.theme.text};
}

li{
    padding: 2rem;
    font-size:${props => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        transform: scale(1.2);
    }
}
`

const Bottom = styled.div`
padding: 0.5rem 0;
margin: 0 4rem;
font-size: ${props => props.theme.fontlg};

display: flex;
justify-content: space-between;
align-items: center;

a{
    text-decoration: underline;
}
`


function Footer() {
    return (
        <Section>
            <LogoContainer>
                <img
                    data-scroll data-scroll-speed="2"
                    src={logo} alt='' />
                <h1 data-scroll data-scroll-speed="-1">Wibe Studios</h1>
            </LogoContainer>
            <FooterComponent
                initial={{ y: "-400px" }}
                whileInView={{ y: "0" }}
                viewport={{ once: false }}
                transition={{
                    duration: 1.5
                }}
            >
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
                <Bottom>
                    <span>&copy; {new Date().getFullYear()}. All Rights Reserved </span>
                    <span> Made with &hearts; by &nbsp; -
                        <a href='https://bhumil-modi-portfolio.vercel.app/' target="_blank" rel="noreferrer">
                            Bhumil Modi
                        </a>
                    </span>
                </Bottom>
            </FooterComponent>
        </Section>
    )
}

export default Footer