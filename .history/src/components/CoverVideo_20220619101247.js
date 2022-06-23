import React from 'react'
import styled from 'styled-components'
import MainVideo from "../assets/Walking-Girl.mp4 "

const VideoContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <video src={MainVideo} controls />
        </VideoContainer>
    )
}

export default CoverVideo