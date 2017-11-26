let btnToggleContent = document.querySelector('.js-btn-toggle-content')
let toggleContent = document.querySelectorAll('.js-toggle-content')
let smell = document.querySelector('.smells')

btnToggleContent.addEventListener('click', function(e){
    e.preventDefault()
    toggleContent.forEach((content)=>{
        content.classList.toggle('hidden')
    })
    smell.classList.toggle('smells--bigger')
})

