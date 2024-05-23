const cards = [...document.querySelectorAll('.wellness-card')],
      fixedCard = [...document.querySelectorAll('.wellness-fixed__card')];

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: cards[0],
        start: 'bottom center+=330vh',
        end: 'bottom center-=235vh',
        // markers: true,
        // pin: true,
        scrub: true,
    }
})

tl.to(fixedCard[0],{
    clipPath: 'inset(0 0 100% 0)',
    ease: 'none'
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: cards[1],
        start: 'bottom center+=330vh',
        end: 'bottom center-=235vh',
        markers: true,
        // pin: true,
        scrub: true,
    }
})

tl2.to(fixedCard[1],{
    clipPath: 'inset(0 0 100% 0)',
    ease: 'none'
})










