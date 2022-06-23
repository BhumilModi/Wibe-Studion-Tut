import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../components/CoverVideo'


const Section = styled.section`
positiion: relative;
min-height: 100vh;
overflow: hidden;
`

function Home() {
    return (
        <Section>
            <CoverVideo />
            <h1>Logo</h1>
            <h1>Navbar</h1>
        </Section>
    )
}

export default Home