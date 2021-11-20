
// select options wrapper
let flexOptions = document.getElementById('flex-options')
//makes a collection of .flex-option out of flexOptions variable <2 items>
let optionCollection = flexOptions.getElementsByClassName('flex-option')

flexOptions.addEventListener('click', () => {
    for(let i=0; i < optionCollection.length ; i++) {
        if(optionCollection[i].classList.contains("active-option")) {
            optionCollection[i].classList.replace("active-option", "deactive-option")
            continue //allows loop to execute the rest of the code before next loop step
        }
        if(optionCollection[i].classList.contains("deactive-option")) {
            optionCollection[i].classList.replace("deactive-option", "active-option")
            continue //allows loop to execute the rest of the code before next loop step
        }
    }
})


// DARK MODE

let darkModeToggle = document.getElementById('darkmode-toggle')

darkModeToggle.addEventListener('click', () => {
    darkModeToggle.classList.toggle('active')
})