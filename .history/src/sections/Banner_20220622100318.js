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

const Container = styled.div``


function Banner() {
    return (
        <Section>
            <Container>
                <Banner>
                    <span></span>
                </Banner>
            </Container>
        </Section>
    )
}

export default Banner