import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
position: relative;
min-height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items:center;
// margin: 0 auto;
// background-color: yellow;
`

const Overlay = styled.div`
position: absolute;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
width: 30vw;
height: 90vh;
z-index:11;
box-shadow: 0 0 0 5vw ${props => props.theme.text};
border: 3px solid ${props => props.theme.body};
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family: "Kaushan Script";
font-weight: 300;
color:${props => props.theme.body};
text-shadow: 1px 1px 1px ${props => props.theme.text};
position: absolute;
top: 1rem;
left : 5%;
z-index: 11;
`

const Text = styled.div`
width: 20%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: absolute;
top: 0;
right: 0;
padding: 2rem;
z-index: 5;
`


function NewArrival() {
    return (
        <Section>
            <Overlay />
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">New Arrivals</Title>
            <Text data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
                We're fashion studio based in california.
                We create unique designs that will blow your mind. We also design unique jewellary pieces.
                Fashion is an ART that can not be grasped by everyone.
                <br />
                <br />
                We are very dedicated to making our products.
                We offer unique and creative products to a wide range of people.
                We have a variety of styles, but for most people, all of the options are in the box.
                We specialize in making things that make you happy.
                <br />
                <br />
                We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people.
                We are always looking to make something that is easy for everyone.

            </Text>
        </Section >
    )
}

export default NewArrival