gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".tile");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    duration: .5,
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=5000",
    }
});