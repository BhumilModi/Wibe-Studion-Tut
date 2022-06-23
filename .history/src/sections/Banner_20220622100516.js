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
const BannerComponent = styled.div``


function Banner() {
    return (
        <Section>
            <Container>
                <BannerComponent>
                    <span>Fashion is the armour </span>
                </BannerComponent>
                <BannerComponent>
                    <span>to survive the reality of everyday life.</span>
                </BannerComponent>
            </Container>
        </Section>
    )
}

export default Banner