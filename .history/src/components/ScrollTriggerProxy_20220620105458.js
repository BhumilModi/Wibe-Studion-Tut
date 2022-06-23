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

            ScrollTrigger.scrollerProxy(".smooth.scroll", {
                scrollTop(value) {
                    return arguments.length ? scroll.scrollTo(value, 0, 8) : scroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
                },
                pinType: document.querySelector(".smooth-scroll").getElementsByClassName.transform ? "transform" : "fixed"
            })
        }

        return () => {

        }
    }, [])


    return null;
}

export default ScrollTriggerProxy