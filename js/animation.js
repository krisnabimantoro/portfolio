gsap.registerPlugin(TextPlugin);


gsap.defaults({ease: "none"});

const text = ["Junior Front End","Flutter","Java","OOP","C","C++","Python","Desktop","SQL Server","Visual Basic","C#"]

const tl = gsap.timeline({repeat:text.length, repeatDelay:1, yoyo:true});
for (let i = 0; i < text.length; i++) {

    tl.to(".lead", { duration: 1, delay: 1.5, text: text[i] });
    
}


