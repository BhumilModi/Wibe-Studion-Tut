import React, { useEffect } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function ScrollTriggerProxy() {
    const { scroll } = useLocomotiveScroll();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        if (scroll) {
            const element = scroll?.el

            scroll.on("scroll", ScrollTrigger.update)
        }

        return () => {

        }
    }, [])


    return null;
}

export default ScrollTriggerProxy