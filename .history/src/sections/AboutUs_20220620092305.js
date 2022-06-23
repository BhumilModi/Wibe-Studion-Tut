import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
position: relative;
min-height: 100vh;
overflow: hidden;
width: 80vw;
`

const Title = styled.div`
`

export default function AboutUs() {
    return (
        <Section>
            <Title>
                About Us
            </Title>
        </Section>
    )
}
