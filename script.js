// ░▀▀█░█▀█░█▀▀░█▀▀░█▀█░█▀▄░█▀▄░█▀█░░░▀▀█░█▀█░█▀█░█▀▀░▀█▀░█▀▄
// ░░░█░█░█░█░█░█▀▀░█░█░█░█░█▀▄░█▀█░░░░░█░█▀█░█░█░█░█░░█░░█░█
// ░▀▀░░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀░░▀░▀░▀░▀░░░▀▀░░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀░


var tl = gsap.timeline();
tl.from("#navbar h1",{
    y: -50,
    opacity: 0,
    delay: 0.8,
    duration:0.3,
    stagger: 0.3
})

tl.from("#navbar a",{
    y: -50,
    opacity: 0,
    delay: 0.5,
    duration:0.1,
    stagger: 0.3
})

tl.from("#first-div1",{
    x:-300,
    opacity:0,
    duration:0.7,
})

tl.from("#first-div2",{
    x:300,
    opacity:0,
    duration:0.7,
})


//  page 2 part 1 scrolltrigger
gsap.from("#page-2 #page-2-part1",{
  y: 100,
  duration:0.2,
  opacity:0,
  scale:0.5,
  scrollTrigger:{
    trigger:"#page-2 #page-2-part1",
    markers:false,
    start:"0",
    end:"top 50%",

    scrub:5
  }
})

// page 2 part 2 scrolltrigger

gsap.from("#page-2 #page-2-part2 img",{
  x: 100,
  duration:0.2,
  opacity:0,
  scale:0.5,
  scrollTrigger:{
    trigger:"#page-2 #page-2-part2 img",
    markers:false,
    start:"0",
    end:"top 10%",

    scrub:5
  }
})

//page 3 scrolltrigger

//  page 2 part 1 scrolltrigger
gsap.from("#page-3 #page-3-part1",{
  y: 200,
  duration:0.2,
  opacity:0,
  scale:0.5,
  scrollTrigger:{
    trigger:"#page-3 #page-3-part1",
    markers:false,
    start:"0",
    end:"top 10%",

    scrub:5
  }
})

// page 3 part 2 scrolltrigger

gsap.from("#page-3 #page-3-part2 img",{
  y: 400,
  duration:0.2,
  opacity:0,
  scale:0.5,
  scrollTrigger:{
    trigger:"#page-3 #page-3-part2 img",
    markers:false,
    start:"0",
    end:"top 10%",

    scrub:5
  }
})

//  page 4 part 1 scrolltrigger
gsap.from("#page-4 #page-4-part1",{
  x: 200,
  duration:0.2,
  opacity:0,
  scale:0.5,
  scrollTrigger:{
    trigger:"#page-4 #page-4-part1",
    markers:false,
    start:"0",
    end:"top 10%",

    scrub:5
  }
})

// page 4 part 2 scrolltrigger

gsap.from("#page-4 #page-4-part2 img",{
  x: 100,
  duration:0.2,
  opacity:0,
  scale:0.5,
  scrollTrigger:{
    trigger:"#page-4 #page-4-part2 img",
    markers:false,
    start:"0",
    end:"top 10%",

    scrub:5
  }
})

// page 5  food starts here scrolltrigger part1 
gsap.from("#food #daal-baati-1 img",{
  x: 200,
  duration:0.2,
  opacity:0,
  scale:0.5,
  scrollTrigger:{
    trigger:"#food #daal-baati-1 img",
    markers:false,
    start:"0",
    end:"top 10%",

    scrub:5
  }
})

// page 4 part 2 scrolltrigger

gsap.from("#food #daal-baati-2 ",{
  x: 100,
  duration:0.2,
  opacity:0,
  scale:0.5,
  scrollTrigger:{
    trigger:"#food #daal-baati-2 ",
    markers:false,
    start:"0",
    end:"top 10%",

    scrub:5
  }
})

// page 6 ghevar scrolltrigger
gsap.from("#food-part2 #ghevar-1 img",{
  x: 200,
  duration:0.2,
  opacity:0,
  scale:0.5,
  scrollTrigger:{
    trigger:"#food-part2 #ghevar-1 img",
    markers:false,
    start:"0",
    end:"top 10%",

    scrub:5
  }
})

// page 6 part 2 scrolltrigger ghevar part2

gsap.from("#food-part2 #ghevar-2 ",{
  x: 100,
  duration:0.2,
  opacity:0,
  scale:0.5,
  scrollTrigger:{
    trigger:"#food-part2  #ghevar-2 ",
    markers:false,
    start:"0",
    end:"top 10%",

    scrub:5
  }
})


// page 7 ker sangri scrolltrigger
gsap.from("#food-part3 #ker-sangri1 img",{
  x: 200,
  duration:0.2,
  opacity:0,
  scale:0.5,
  scrollTrigger:{
    trigger:"#food-part3 #ker-sangri1 img",
    markers:false,
    start:"0",
    end:"top 10%",

    scrub:5
  }
})

// page 7 part 2 scrolltrigger ker sangri part2

gsap.from("#food-part3 #ker-sangri2 ",{
  x: 100,
  duration:0.2,
  opacity:0,
  scale:0.5,
  scrollTrigger:{
    trigger:"#food-part3  #ker-sangri2 ",
    markers:false,
    start:"0",
    end:"top 10%",

    scrub:5
  }
}) 
// scrolltrigger ends here ....










