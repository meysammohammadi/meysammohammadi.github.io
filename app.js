class ToggleButton extends HTMLElement {
    constructor() {

        super();

        // I don't need a shadow element attach to my new element because we can't style its content via an external css so I comment it out!
        // //var shadow = this.attachShadow({mode: 'open'});
        // //shadow.appendChild(new created elements);
        
        // ###############################################

        var wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        var bullet = document.createElement('span');
        bullet.setAttribute('class', 'bullet');

        wrapper.appendChild(bullet);
        this.appendChild(wrapper);

        // ###############################################

        wrapper.addEventListener('click', () => {
            this.classList.toggle('active');
        });
    }
}

customElements.define('toggle-button', ToggleButton);


// #########################################################
// DARK MODE CONFIG
// #########################################################

const body = document.querySelector('body');
const ul = document.querySelector('ul');
const darkmode = document.getElementById('darkmode').querySelector('toggle-button');

darkmode.addEventListener ('click', () => {
    body.classList.toggle('darkmodeActive');
    ul.classList.toggle('darkmodeActive');
});



// ##########################################################
// Colors config
// ##########################################################

const color = document.getElementById('colors');
const colorstooltip = document.getElementById('choosecolors');

// toggle colors tooltip
color.addEventListener('click', () => {
    colorstooltip.classList.toggle('activecolortooltip');
});


const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
// where colors will aplly to
var header = document.getElementsByClassName('header')[0];
// page color change function
var togglebuttons = document.querySelectorAll('toggle-button');
var donebutton = document.querySelector('button');
function pageColorChange() {
    header.children[0].style.color = color.style.backgroundColor;
    header.children[1].style.color = color.style.backgroundColor;
    header.children[2].style.color = color.style.backgroundColor;
    donebutton.style.backgroundColor = color.style.backgroundColor;
}

red.addEventListener('click', () => {
    color.style.backgroundColor = '#f57f6a';
    pageColorChange();
    // toggle-button #1
    if ( togglebuttons[0].children[0].classList.contains("yellow") ) {
        togglebuttons[0].children[0].classList.replace("yellow", "red");
    } else if ( togglebuttons[0].children[0].classList.contains("blue") ) {
        togglebuttons[0].children[0].classList.replace("blue", "red");
    } else if ( togglebuttons[0].children[0].classList.contains("red") ) {
        togglebuttons[0].children[0].classList.replace("red", "red");
    } else togglebuttons[0].children[0].classList.add("red");
    // toggle-button #2
    if ( togglebuttons[1].children[0].classList.contains("yellow") ) {
        togglebuttons[1].children[0].classList.replace("yellow", "red");
    } else if ( togglebuttons[1].children[0].classList.contains("blue") ) {
        togglebuttons[1].children[0].classList.replace("blue", "red");
    } else if ( togglebuttons[1].children[0].classList.contains("red") ) {
        togglebuttons[1].children[0].classList.replace("red", "red");
    } else togglebuttons[1].children[0].classList.add("red");
    // toggle-button #3
    if ( togglebuttons[2].children[0].classList.contains("yellow") ) {
        togglebuttons[2].children[0].classList.replace("yellow", "red");
    } else if ( togglebuttons[2].children[0].classList.contains("blue") ) {
        togglebuttons[2].children[0].classList.replace("blue", "red");
    } else if ( togglebuttons[2].children[0].classList.contains("red") ) {
        togglebuttons[2].children[0].classList.replace("red", "red");
    } else togglebuttons[2].children[0].classList.add("red");
});

yellow.addEventListener('click', () => {
    color.style.backgroundColor = '#ebdd26';
    pageColorChange();
    // toggle-button #1
    if ( togglebuttons[0].children[0].classList.contains("red") ) {
        togglebuttons[0].children[0].classList.replace("red", "yellow");
    } else if ( togglebuttons[0].children[0].classList.contains("blue") ) {
        togglebuttons[0].children[0].classList.replace("blue", "yellow");
    } else if ( togglebuttons[0].children[0].classList.contains("yellow") ) {
        togglebuttons[0].children[0].classList.replace("yellow", "yellow");
    } else togglebuttons[0].children[0].classList.add("yellow");
    // toggle-button #2
    if ( togglebuttons[1].children[0].classList.contains("red") ) {
        togglebuttons[1].children[0].classList.replace("red", "yellow");
    } else if ( togglebuttons[0].children[0].classList.contains("blue") ) {
        togglebuttons[1].children[0].classList.replace("blue", "yellow");
    } else if ( togglebuttons[1].children[0].classList.contains("yellow") ) {
        togglebuttons[1].children[0].classList.replace("yellow", "yellow");
    } else togglebuttons[1].children[0].classList.add("yellow");
    // toggle-button #3
    if ( togglebuttons[2].children[0].classList.contains("red") ) {
        togglebuttons[2].children[0].classList.replace("red", "yellow");
    } else if ( togglebuttons[0].children[0].classList.contains("blue") ) {
        togglebuttons[2].children[0].classList.replace("blue", "yellow");
    } else if ( togglebuttons[0].children[0].classList.contains("yellow") ) {
        togglebuttons[2].children[0].classList.replace("yellow", "yellow");
    } else togglebuttons[2].children[0].classList.add("yellow");
});

blue.addEventListener('click', () => {
    color.style.backgroundColor = '#62aeda';
    pageColorChange();
    // toggle-button #1
    if ( togglebuttons[0].children[0].classList.contains("yellow") ) {
        togglebuttons[0].children[0].classList.replace("yellow", "blue");
    } else if ( togglebuttons[0].children[0].classList.contains("red") ) {
        togglebuttons[0].children[0].classList.replace("red", "blue");
    } else if ( togglebuttons[0].children[0].classList.contains("blue") ) {
        togglebuttons[0].children[0].classList.replace("blue", "blue");
    } else togglebuttons[0].children[0].classList.add("blue");
    // toggle-button #2
    if ( togglebuttons[1].children[0].classList.contains("yellow") ) {
        togglebuttons[1].children[0].classList.replace("yellow", "blue");
    } else if ( togglebuttons[1].children[0].classList.contains("red") ) {
        togglebuttons[1].children[0].classList.replace("red", "blue");
    } else if ( togglebuttons[1].children[0].classList.contains("blue") ) {
        togglebuttons[1].children[0].classList.replace("blue", "blue");
    } else togglebuttons[1].children[0].classList.add("blue");
    // toggle-button #3
    if ( togglebuttons[2].children[0].classList.contains("yellow") ) {
        togglebuttons[2].children[0].classList.replace("yellow", "blue");
    } else if ( togglebuttons[2].children[0].classList.contains("red") ) {
        togglebuttons[2].children[0].classList.replace("red", "blue");
    } else if ( togglebuttons[2].children[0].classList.contains("blue") ) {
        togglebuttons[2].children[0].classList.replace("blue", "blue");
    } else togglebuttons[2].children[0].classList.add("blue");
});


// close button (remove ul)
header.children[2].addEventListener ('click', () => {
    ul.remove();
});
// open again (get back ul)
body.addEventListener('keypress', (e) => {
    console.log(e.code);
    if(e.code == 'Enter') body.appendChild(ul);
});