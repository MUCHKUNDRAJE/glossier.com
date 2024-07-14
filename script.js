// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

// Sync ScrollTrigger with Locomotive Scroll
locoScroll.on("scroll", ScrollTrigger.update);

// Setup ScrollTrigger to use LocomotiveScroll as proxy
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Refresh ScrollTrigger and LocomotiveScroll on window updates
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Animation for page1 elements
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
});

tl.to("#page1 h1", {
    x: -130,
}, "anim");

tl.to("#page1 h2", {
    x: 130,
}, "anim");

tl.to("#page1 video", {
    width: "95%"
}, "anim");
tl.to("#page1 #lipstick1", {
    rotate:"40deg"
}, "anim");
tl.to("#page1 #lipstick2", {
    rotate:"0deg"
}, "anim");

