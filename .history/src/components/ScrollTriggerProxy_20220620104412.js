import React, { useEffect } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function ScrollTriggerProxy() {
    const { scroll } = useLocomotiveScroll();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {


        return () => {

        }
    }, [])


    return null;
}

export default ScrollTriggerProxy