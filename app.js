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

red.addEventListener('click', () => {
    color.style.backgroundColor = '#f57f6a';
});

yellow.addEventListener('click', () => {
    color.style.backgroundColor = '#ebdd26';
});

blue.addEventListener('click', () => {
    color.style.backgroundColor = '#62aeda';
});