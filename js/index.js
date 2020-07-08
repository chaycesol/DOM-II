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
// declaring element
const log = document.querySelector('footer p')
// adding event listener
document.addEventListener('keypress', logKey);
// function to execute log of what keys are pressed
function logKey(ev) {
    log.textContent += `${ev.code}`;
}

// +++++ #4  scroll +++++ 

// declaring variables for color and the area I want to change the background
const [red, green, blue] = [190, 135, 0]
const sectionColor = document.querySelector('body')


// initiating scroll event listener
window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  sectionColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

// +++++ #5  keydown +++++ 
// adding keydown function to 
window.addEventListener('keydown', function(event) {
    if (event.keyCode === 40) {
       alert("You're dimming the lights");
    } else if (event.keyCode === 38) {
        alert("It's getting brighter")
    }
})

// +++++ #6 mousedown + #7 mouseup +++++

const headerz = document.querySelector('.intro h2')

window.addEventListener('mousedown', event =>{
    headerz.innerText = "Release the button! We need Gas!"
})

window.addEventListener('mouseup', event =>{
    headerz.innerText = "We're going to make it outta here!"
})
 
// +++++ #8 onload +++++

// declare onload event to trigger playing an audio clip of brakes screeching
document.addEventListener('onload', event => {
    document.getElementById("my_audio").onplay();
})

// +++++ #9 dblclick +++++

document.addEventListener('dblclick', function (e) {
   event.target.style.color = "red";
});


// +++++ #10 select +++++
function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }

const input = document.createElement('input')
const introDiv = document.querySelector('.intro')
introDiv.appendChild(input);
input.value = "Type in here and select the text to see it elsewhere."

const inputs = document.querySelector('#input')
inputs.addEventListner('select', textSelect);
// Nest two similar events somewhere in the site and prevent the event propagation properly

//Stop the navigation items from refreshing the page by using `preventDefault()
document.querySelector('a').addEventListener('click', function(evt){
    evt.preventDefault()
})