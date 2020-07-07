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



// wheel
// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick


// Nest two similar events somewhere in the site and prevent the event propagation properly

//Stop the navigation items from refreshing the page by using `preventDefault()
// document.querySelector('a').addEventListener('click', function(evt){
//     evt.preventDefault()
// })