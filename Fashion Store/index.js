var tl = gsap.timeline()

tl.from("h1",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
  
})

var tl = gsap.timeline()

tl.from(".content",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5,
    scrollTrigger:".content",
        scoller:"body",
        duration:2,
        delay:2,
        x:500,
})


var menu=document.querySelector(".nav i")
var cross=document.querySelector("#full i")

var tl=gsap.timeline({paused:true})

tl.to("#full",{
    right:0,
    duration:0.6,
})
tl.from("#full h4",{
    x:150 ,
    duration:1,
    stagger:0.3,
    opacity:0,
})
tl.from("#full i",{
    opacity:0,
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
})


var tl=timeline()
tl.from("nav h1, nav h4,nav button",{
    y:-30,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.2,
})
tl.from("center-part h1",{
    x:-500,
    opacity:0,
    duration:0.4
})