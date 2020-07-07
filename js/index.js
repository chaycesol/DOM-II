// Your code goes here

//Create 10 unique Event Listners
// mouseover
// keydown
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
document.querySelector('a').addEventListener('click', function(evt){
    evt.preventDefault()
})