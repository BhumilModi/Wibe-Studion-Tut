import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../components/CoverVideo'
import Logo from '../components/Logo'
import { Navbar } from '../components/Navbar'


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
            <Navbar />
        </Section>
    )
}

export default Home