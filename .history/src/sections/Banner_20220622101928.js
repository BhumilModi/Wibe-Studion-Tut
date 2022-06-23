import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
positiion: relative;
min-height: 100vh;
width: 80vw;
overflow: hidden;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const BannerComponent = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family: "Kaushan Script";
color: ${props => props.theme.text};
white-space: nowrap;
text-transform: uppercase;
line-height: 1;

span{
    display: block;
    background-color: ${props => props.theme.body};
    padding: 1rem 2rem;
}
`


function Banner() {
    return (
        <Section>
            <Container>
                <BannerComponent>
                    <span>Fashion is the armour </span>
                </BannerComponent>
                <BannerComponent>
                    <span>to survive everyday life.</span>
                </BannerComponent>
                <BannerComponent>
                    <span>One is never over-dressed or</span>
                </BannerComponent>
                <BannerComponent>
                    <span>under-dressed</span>
                </BannerComponent>
                <BannerComponent>
                    <span>with a Little Black Dress.</span>
                </BannerComponent>
            </Container>
        </Section>
    )
}

export default Banner