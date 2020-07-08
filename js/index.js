// Your code goes here
// console.log("hello im working!");
//Create 10 unique Event Listners
// +++++ #1  mouseover +++++ 
//add mouseenter event to change text color
const mainNav = document.querySelector(".main-navigation")
//adding event listner on mouseover
mainNav.addEventListener("mouseover", function(event){
    event.target.style.color="orange";
    //reset color if no activity
    setTimeout(function() {
        event.target.style.color = " ";
    }, 500);
}, false);

// +++++ #2  click +++++
// declaring button 
const button = document.querySelectorAll(".btn")
// for each loop where each item in the btn array changes the text that they are all signed up when clicking to sign up for the button
button.forEach(item => {
    item.addEventListener("click", event => {
        item.innerText = "You're signed up!";
    })
})

// +++++ #3  keypress +++++ 
const log = document.querySelector('footer p')

document.addEventListener('keypress', logKey);

function logKey(ev) {
    log.textContent += `${ev.code}`;
}

// +++++ #4  scroll +++++ 
const [red, green, blue] = [190, 135, 0]
const section1 = document.querySelector('body')

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

// +++++ #5  keydown +++++ 

window.onkeydown = function(event) {
    if (event.keyCode === 40) {
       alert("You're dimming the lights");
    } else if (event.keyCode === 38) {
        alert("It's getting brighter")
    }
 };

// +++++ #6 onmousedown +++++

const headerz = document.querySelector('.intro h2')

window.addEventListener('mousedown', event =>{
    headerz.innerText = "Release the button! We need Gas!"
})

window.addEventListener('mouseup', event =>{
    headerz.innerText = "We're going to make it outta here!"
})
 
// Nest two similar events somewhere in the site and prevent the event propagation properly

//Stop the navigation items from refreshing the page by using `preventDefault()
document.querySelector('a').addEventListener('click', function(evt){
    evt.preventDefault()
})