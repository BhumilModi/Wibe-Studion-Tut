import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const Container = styled.div`
position: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
touch-action: none;
overflow: hidden;

width: 100vw;
height: 100vh;

z-index: 6;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: ${props => props.theme.body};
`

const pathVaraint = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,

        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

const textVaraint = {
    hidden: {
        opacity: 0,
        x: -50
    },
    visible: {
        opacity: 1,
        x: -5,

        transition: {
            duration: 2,
            delay: 2,
            ease: "easeInOut"
        }
    }
}


const Loader = () => {
    return (
        <Container>

        </Container>
    )
}

export default Loader