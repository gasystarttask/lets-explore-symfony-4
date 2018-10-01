/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
import '../css/app.scss';

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
import $ from 'jquery';
import greet from './greet';

// JS is equivalent to the normal "bootstrap" package
// no need to set this to a variable, just require it
require('bootstrap');

// // require the JavaScript
// require('bootstrap-star-rating');
// // require 2 CSS files needed
// require('bootstrap-star-rating/css/star-rating.css');
// require('bootstrap-star-rating/themes/krajee-svg/theme.css');

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

$(document).ready(function() {
  $('[data-toggle="popover"]').popover();
});