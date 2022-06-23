import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
positiion: relative;
min-height: 200vh;
overflow: hidden;
`

function Home() {
    return (
        <Section>
            <h1>Video</h1>
            <h1>Logo</h1>
            <h1>Navbar</h1>
        </Section>
    )
}

export default Home