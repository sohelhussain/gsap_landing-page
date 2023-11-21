const tl = gsap.timeline()
tl.from(".left, .center h3, .right ",{
    y:-100,
    duration:1,
    delay:.5,
    opacity:0,
    stagger:.3
})
tl.from(".text h1",{
    y:50,
    duration:1,
    delay:.5,
    opacity:0,
    stagger:.3
})
tl.from(".images, .images-sec", {
    scale:0,
    duration:1,
    delay:.5,
    opacity:0,
    stagger:.3
})