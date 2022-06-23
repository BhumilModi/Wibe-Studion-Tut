import React from 'react'
import styled from 'styled-components'
import MainVideo from "../assets/Walking-Girl.mp4"
import "@fontsource/kaushan-script"
import "@fontsource/sirin-stencil"

import { motion } from "framer-motion"

const VideoContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;

video {
    width: 100%;
    height: 100vh;
    object-fit:cover;
}
`

const DarkOverlay = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 1;

background-color: ${props => `rgba(${props.theme.bodyRgba},0.6)`}
`
const Title = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};

div{
    display:flex;
    flex-direction: row;
}

h1{
    font-family:"Kaushan Script";
    font-size:${props => props.theme.fontbig};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
}

h2{
    font-family:"Sirin Stencil";
    font-size:${props => props.theme.fontlg};
    text-shadow: 1px 1px 1px ${props => props.theme.body};
    text-transform : capitalize;
    font-weight: 300;
}
`

const container = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,

        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

const CoverVideo = () => {
    return (
        <VideoContainer>
            <DarkOverlay />
            <Title variants={textVaraint}
                initial="hidden"
                animate="visible">
                <div>
                    <h1 data-scroll data-scroll-delay="0.13" data-scroll-speed="4">W</h1>
                    <h1 data-scroll data-scroll-delay="0.09" data-scroll-speed="4">i</h1>
                    <h1 data-scroll data-scroll-delay="0.06" data-scroll-speed="4">b</h1>
                    <h1 data-scroll data-scroll-delay="0.04" data-scroll-speed="4">e</h1>
                </div>
                <h2 data-scroll data-scroll-delay="0.04" data-scroll-speed="2">Inspire. Create. Belive</h2>
            </Title>
            <video src={MainVideo} type="video/mp4" autoPlay muted loop />
        </VideoContainer>
    )
}

export default CoverVideo