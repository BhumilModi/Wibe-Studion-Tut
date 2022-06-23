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

function Banner() {
    return (
        <Section>
            Banner
        </Section>
    )
}

export default Banner