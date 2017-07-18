var body = document.querySelector('body');
// looks for stuff in the dom that matches this
// stuff as in collections-- classes-- things with tags
// be careful with above, because can sometimes give you things
// that you're not expecting
var theContainer = document.querySelectorAll('.container');
// you do not want your behavior and (... idk.. stylings?)
// to be locked together

// avoid this mysterious thing by using data attributes!

// write your own functions to fetch from the DOM for you
// you'll write things that write DOM elements, configure them

// all this assuming that you have an array of `navs` right before this
var navContainer = document.querySelector('.nav-selector');
navs.forEach(function (nav) {
    var navElement = document.createElement('a');
    navElement.setAttribute('href',nav.href);
    navElement.textContent = nav.text;
    navContainer.appendChild(navElement);
});

// adding
var nav = document.querySelectorAll('.navContainer a')[0];
nav.classList.add('active');

// removing
var navs = document.querySelectorAll('.navContainer a');
navs.forEach(function (nav) {
    nav.classList.remove('active');
});

// toggling
var nav = document.querySelectorAll('.navContainer a')[0];
nav.classList.toggle('active');

// LISTENING FOR EVENTS

var navs = document.querySelectorAll('.navContainer a');
var target = document.querySelector('[data-target="main-image"]');
navs.forEach(function (nav) {
    nav.addEventListener('click', function (event) {
        event.preventDefault();
        target.setAttribute('src', nav.getAttribute('href'));
    });
});
// first you want to make sure that the default element,
// like going to another page-- DOESN'T HAPPEN
// you stop that 'dead in it\'s tracks' by .preventDefault()
// stops the browser from doing what it would normally do

// later will do this with forms-- tell the DOM not to send this to a server

// with a anchor tags, we're telling them NOT to follow the link

// you also set the source attribute to the attribute of the nav
// when you have a reference to an element, you use eventListener
// to create an association between the event and ______
// what were coordinates of the mouse? did they right click?