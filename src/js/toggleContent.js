let btnToggleContent = document.querySelector('.js-btn-toggle-content')
let toggleContent = document.querySelectorAll('.js-toggle-content')
let smell = document.querySelector('.smells')

if(btnToggleContent){
    btnToggleContent.addEventListener('click', function(e){
        e.preventDefault()
        toggleContent.forEach((content)=>{
            if(!content.classList.contains('fade-out')){
                    content.classList.add('fade-out')
                    content.classList.remove('fade-in')
            } else {
                content.classList.remove('fade-out')
                content.classList.add('fade-in') 
            }
        })
        smell.classList.toggle('smells--bigger')
    })
}