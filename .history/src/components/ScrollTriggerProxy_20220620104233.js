import React from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

function ScrollTriggerProxy() {
    const { scroll } = useLocomotiveScroll();
    gsap.registerPlugin(ScrollTrigger);

    return null;
}

export default ScrollTriggerProxy