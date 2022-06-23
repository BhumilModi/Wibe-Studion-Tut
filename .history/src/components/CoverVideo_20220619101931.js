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
z-index: 5;
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <video src={MainVideo} type="video/mp4" autoPlay muted loop />
        </VideoContainer>
    )
}

export default CoverVideo