const cards = [...document.querySelectorAll('.wellness-card')],
      fixedCard = [...document.querySelectorAll('.wellness-fixed__card')];

gsap.registerPlugin(ScrollTrigger);

for(let i = 0; i < cards.length; i++){
    if(i < cards.length -1){
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: cards[i],
                start: 'bottom center+=35%',
                end: 'bottom center-=25%',
                markers: true,
                scrub: true,
            }
        })
        tl.to(fixedCard[i],{
            clipPath: 'inset(0 0 100% 0)',
            ease: 'none'
        })
    }
}