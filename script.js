// array of colors to random
var currentQuote = '',
currentAuthor = '';

//list of color to fill
var colors = [
'#d2691e',
'#dc143c',
'#008b8b',
'#556b2f',
'#cd5c5c',
'#483d8b',
'#daa520',
'#f08080',
'#ffa07a',
'#778899',
'#008080'];


//First, a variable that has an array of objects - quotes and its authors
const quotes = [
{ "quote": "Life isn’t about getting and having, it’s about giving and being.", "author": "Kevin Kruse" },
{ "quote": "Whatever the mind of man can conceive and believe, it can achieve.", "author": "Napoleon Hill" },
{ "quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein" },
{ "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "author": "Robert Frost" },
{ "quote": "I attribute my success to this: I never gave or took any excuse.", "author": "Florence Nightingale" },
{ "quote": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky" },
{ "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "author": "Michael Jordan" }];


//function to random the quotes
function getRandomQuote() {
  return quotes[
  Math.floor(Math.random() * quotes.length)];

}

//function to take the random quote
function getQuote() {

  //inserting de object properties in the named variables to change in the layout
  let randomQuote = getRandomQuote();
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  //changing the quotes in the layout
  $(".quote-text").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#text").text(currentQuote);
  });

  //changing the author in the layout
  $(".quote-author").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#author").text(currentAuthor);
  });

  //changing the colors with random
  let color = Math.floor(Math.random() * colors.length);
  $("html body").animate({
    backgroundColor: colors[color],
    color: colors[color] },
  1000);
  $(".button").animate({
    backgroundColor: colors[color] },
  1000);

  //Twitter web intent
  $("#tweet-quote").attr(
  "href",
  "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
  encodeURIComponent('"' + currentQuote + '"' + currentAuthor));

}

//starting the front and setting the work to alterate it
$(document).ready(function () {
  getQuote();
  $("#new-quote").on("click", getQuote);
});