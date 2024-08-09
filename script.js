var b = gsap.timeline()


b.from("#nav h3",{

    y:-50,
    opacity:0,
    delay:0.4,
    duration: 0.8,
    stagger:0.3


})


b.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4

})


b.from("img",{
    x:100,
    rotate:50,
    opacity:0,
    duration0:0.5,
    stagger:0.5
})

b.to("#img2",{

   x:-900,
   y:150,
   rotate:0,
   duration:0.4,
   stagger:0.1,
   borderRadius: 100,
   
})
