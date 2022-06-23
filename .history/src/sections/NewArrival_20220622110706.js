import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import img1 from '../assets/Images/1.webp'
import img2 from '../assets/Images/2.webp'
import img3 from '../assets/Images/3.webp'
import img4 from '../assets/Images/4.webp'
import img5 from '../assets/Images/5.webp'
import img6 from '../assets/Images/6.webp'
import img7 from '../assets/Images/7.webp'
import img8 from '../assets/Images/8.webp'
import img9 from '../assets/Images/9.webp'
import img10 from '../assets/Images/10.webp'


const Section = styled.section`
position: relative;
min-height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items:center;
margin: 0 auto;
// background-color: yellow;
`

const Overlay = styled.div`
position: absolute;
top: 50%;
left:50%;
transform: translate(-50%, -50%);
width: 30vw;
height: 90vh;
z-index:11;
box-shadow: 0 0 0 5vw ${props => props.theme.text};
border: 3px solid ${props => props.theme.body};
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family: "Kaushan Script";
font-weight: 300;
color:${props => props.theme.body};
text-shadow: 1px 1px 1px ${props => props.theme.text};
position: absolute;
top: 1rem;
left : 5%;
z-index: 11;
`

const Text = styled.div`
width: 20%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: absolute;
top: 0;
right: 0;
padding: 2rem;
z-index: 11;
`

const Right = styled.div`
padding-left: 30%;
position: absolute;
left: 35%;
min-height: 100vh;
background-color:${props => props.theme.grey};
// width: 65%;
display: flex;
justify-center: flex-start;
align-items: center;

h1{
    width: 5rem;
    margin: 0 2rem;
}
`
const Item = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 20rem;
margin-right: 6rem;

img{
    width: 100%;
    height: auto;
    cursor: pointer;
}

h1{
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    display: inline-block;
    width: fit-content;
}

`



const Product = ({ image, title = '' }) => {
    return (
        <Item
            initial={{ filter: 'grayscale(100%)' }}
            whileInView={{ filter: 'grayscale(0%)' }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 'all' }}
        >
            <img src={image} alt={title} />
            <h1>{title}</h1>
        </Item>
    )
}


function NewArrival() {
    return (
        <Section>
            <Overlay />
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">New Arrivals</Title>

            <Right>
                <Product image={img1} title="Man Basic" />
                <Product image={img2} title="Tops" />
                <Product image={img3} title="SweatShirts" />
                <Product image={img4} title="Ethnic Wear" />
                <Product image={img5} title="Blazer" />
                <Product image={img6} title="Suits" />
                <Product image={img7} title="Antiques" />
                <Product image={img8} title="Jewellery" />
                <Product image={img9} title="Watches" />
                <Product image={img10} title="Special Edition" />
            </Right>

            <Text data-scroll data-scroll-speed="-4">
                There is new collection available for cool clothes in all sizes.
                This collection is a great way to find a new look for you.
                It offers a variety of cool apparel styles to fit your taste, while you can also find some cool clothes that you can wear everyday.
                <br />
                <br />
                The first line of clothing you will see on this collection is for men.
                The collection also includes three new styles for women.
                <br />
                <br />
                Give it a try and experience a new look
            </Text>
        </Section >
    )
}

export default NewArrival