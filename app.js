const button = document.querySelector('button')
const h1 = document.querySelector('h1')

h1.style.textAlign = 'center'
button.style.position = 'absolute'
button.style.left = '50%'
button.style.transform = 'translateX(-50%)' // these 3 are how to center button in JS

button.addEventListener('click', () => {
    // document.body.style.backgroundColor = 'olive' -- to test if it works
    // const r = Math.floor(Math.random() * 255) //to pick a random # from 0-255
    // const g = Math.floor(Math.random() * 255)
    // const b = Math.floor(Math.random() * 255) 
    const newColor = makeRandColor()
    document.body.style.backgroundColor = newColor //updating new color of body
    h1.innerText = newColor // changes innerText to the newColor output
})

//create random colors in a new separate function so you can use elsewhere
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255) //to pick a random # from 0-255
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}