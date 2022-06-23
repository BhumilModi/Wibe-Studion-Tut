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

const CoverVideo = () => {
    return (
        <VideoContainer>
            <video src={MainVideo} type="video/mp4" autoPlay muted loop />
        </VideoContainer>
    )
}

export default CoverVideo