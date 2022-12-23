var elBtn = document.querySelector(".btn")
var elModal = document.querySelector(".wrapper ")
var elExit = document.querySelector(".bosish ")
var elBody = document.querySelector('body')

elBtn.addEventListener("click", function(){
    elModal.classList.add('modal2')
    elBody.classList.add('background_fon')
})
elExit.addEventListener('click', function(){
    elModal.classList.remove('modal2')
    elBody.classList.remove(' background_fon')
})

