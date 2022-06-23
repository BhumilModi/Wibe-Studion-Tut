import React from 'react'
import styled from 'styled-components'
import MainVideo from "../assets/Walking-Girl.mp4"

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
justify-content: center;
align-items: center;
color: ${props => props.theme.text}
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <DarkOverlay />
            <Title>
                <div>
                    Wibe
                </div>
            </Title>
            <video src={MainVideo} type="video/mp4" autoPlay muted loop />
        </VideoContainer>
    )
}

export default CoverVideo