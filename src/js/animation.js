//get all the div with the paralax animation
let divParalaxArray = document.querySelectorAll('.js-paralax')
let paralaxArray = []

//class for the paralax animation
class Paralax {
    //constructor : parametre : div which get the animation
    constructor( divParalax){
        this.div = divParalax
        this.speed = this.div.dataset.speed*0.1
        this.position = this.div.offsetTop
    }
    //animate(scrollY): scrollY is the window.scrollY
    //this method create the paralax effect
    animate(scrollY){
            //distScrollY is the amount of pixel the div has to move
            //we have to do scrollY-thi.position so that the div donc move to much
            let distScrollY = (scrollY-this.position)*this.speed
            this.div.style.transform = `translate3D(0, ${distScrollY}px, 0)`            
    }
}
//initialisation of the paralax object for each div with the class
divParalaxArray.forEach((paralax)=> paralaxArray[paralaxArray.length]= new Paralax(paralax))
window.addEventListener('scroll', function(){
    paralaxArray.forEach((paralax)=> {
        paralax.animate(this.scrollY)
    })
});

