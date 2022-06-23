import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
positiion: relative;
min-height: 100vh;
width: 90vw;
overflow: hidden;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;
`

const Container = styled.div`
min-height: 100vh;
display: flex;
justify-content: space-evenly;
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
            <Container id="up">
                <BannerComponent>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="8" data-scroll-target="#up">Fashion is the armour </span>
                </BannerComponent>
                <BannerComponent>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">to survive everyday life</span>
                </BannerComponent>
                <BannerComponent>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#up">One is never over-dressed</span>
                </BannerComponent>
                <BannerComponent>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">or under-dressed</span>
                </BannerComponent>
                <BannerComponent>
                    <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#up">with a Little Black Dress</span>
                </BannerComponent>
            </Container>
        </Section>
    )
}

export default Banner