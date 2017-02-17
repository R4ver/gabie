// DO NOT DELETE LINES INSIDE

//Import styles
import '../scss/master.scss'

//Import jQuery
import $ from "jquery"

// DO NOT DELETE LINES INSIDE

// Test if everything worked
let hero = document.getElementById('front-hero');
let pageTitle = document.getElementById('page-title');
let pageSubTitle = document.getElementById('page-subtitle');
hero.classList.remove('is-danger');
hero.classList.add('is-primary');
pageTitle.innerHTML = 'It worked!';
pageSubTitle.innerHTML = 'You are now ready to develop amazing products!';