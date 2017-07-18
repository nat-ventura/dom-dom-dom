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