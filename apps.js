let root = document.documentElement;
let range = document.getElementById('volume')
let rangeVal = document.getElementById('range-val')

range.addEventListener ('input', () => {
    rangeVal.innerHTML = range.value
    root.style.setProperty('--color', range.value)
})