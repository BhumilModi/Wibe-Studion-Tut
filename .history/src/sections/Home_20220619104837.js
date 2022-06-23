import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../components/CoverVideo'
import Logo from '../components/Logo'


const Section = styled.section`
positiion: relative;
min-height: 100vh;
overflow: hidden;
`

function Home() {
    return (
        <Section>
            <CoverVideo />
            <Logo />
            <h1>Navbar</h1>
        </Section>
    )
}

export default Home