import React from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef, useLayoutEffect } from 'react'
import img1 from '../assets/Images/img1.webp'

const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
margin: 0 auto;
overflow: hidden;
display: flex;
justify-content: flex-start;
align-items: flex-start;
position: relative;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family: "Kaushan Script";
font-weight: 300;
color:${props => props.theme.text};
text-shadow: 1px 1px 1px ${props => props.theme.body};
position: absolute;
top: 1rem;
left : 5%;
z-index: 11;
`

const Left = styled.div`
width: 35%;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};

min-height: 100vh;
z-index: 5;
position: fixed;
left: 0;
display: flex;
justify-content: center;
align-items: center;

p{
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
}
`

const Right = styled.div`
margin-top: 5vh;
padding-left: 30%;
position: absolute;
left: 35%;
min-height: 90vh;
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
const Item = styled.div`
display: inline-block;
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
}

`



const Product = ({ image, title = '' }) => {
    return (
        <Item>
            <img src={image} alt={title} />
            <h1>{title}</h1>
        </Item>
    )
}

function Shop() {

    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
    const horizontalRef = useRef(null);

    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = horizontalRef.current;
        let pinWrapWidth = scrollingElement.offsetWidth;
        let t1 = gsap.timeline();

        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.App',
                    scrub: true,
                    pin: true,
                    markers: true,
                },
                height: `${scrollingElement.scrollWidth}px`,
                ease: "none"
            })

            t1.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: pinWrapWidth,
                    scroller: '.App',
                    scrub: true,
                    markers: true,
                },
                x: -pinWrapWidth,
                ease: 'none',
            })
            ScrollTrigger.refresh();
        }, 1000);

        return () => {

        };
    }, [])

    return (
        <Section ref={ref}>
            <Title data-scroll data-scroll-speed="-1">New Collections</Title>
            <Left>
                <p>
                    The brand new collection is currently being developed in USA.
                    We create our products using best quality material, including the use of some of the pure fabrics to make our products.
                    All products are made using the best materials, from the finest cotton to the finest fabrics.
                    <br />
                    <br />
                    We have lots of different clothing options like shoes, jackets and dresses.
                    Not only clothes but we also provide unique Jewellery as well.
                    It is great for us to carry our new clothes all around the country and look different.

                </p>
            </Left>
            <Right ref={horizontalRef}>
                <Product image={img1} title="hi" />
            </Right>
        </Section>
    )
}

export default Shop