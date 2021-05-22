/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
      quote: `We are what we repeatedly do. Excellence, then, is not an act, but a habit.`,
      source: `Will Durant on Aristotle`,
      citation: `The Story of Philosophy`,
      year: 1926
  },
  {
    quote: `I am the master of my fate, I am the captain of my soul.`,
    source: `William Ernest Henley`,
    citation: `Invictus`,
    year: 1875
  },
  {
    quote: `A man is but the product of his thoughts. What he thinks, he becomes.`,
    source: `Mahatma Gandhi`,
    citation: `Ethical Religion`,
    year: 1922
  },
  {
    quote: `Be careful how you are talking to yourself, because you are listening.`,
    source: `Lisa M. Hayes`,
    citation: `The Power of Self Talk`,
    year: 2017
  },
  {
    quote: `Life is a matter of choices, and every choice you make makes you.`,
    source: `John C. Maxwell`,
    citation: `Beyond Talent: Become Someone Who Gets Extraordinary Results`,
    year: 2011
  },
];


/***
 * `getRandomQuote` function
***/

/**
 * Calculates a random number and uses it to get an object from the quotes array.
 *
 * @returns {object} Random quote from quotes array.
 */

const getRandomQuote = () => {
  
  // get random index value
  const randomNumber = Math.floor( Math.random() * quotes.length );
  
  // get random quote from quotes array
  return quotes[randomNumber];
};

/***
 * `printQuote` function
***/

/**
 * Prints output from getRandomQuote() to the browser.
 *
 */

const printQuote = () => {
  // save output of getRandomQuote to a variable
  const randomQuote = getRandomQuote();

  // create HTML for the quote
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  // check if the citation exists and add to HTML
  if ( randomQuote.citation) {
    html = html + `
      <span class="citation">${randomQuote.citation}</span>
    `;
  }
  // check if the year exists and add to HTML
  if (randomQuote.year) {
    html = html + `
      <span class="year">${randomQuote.year}</span>
    `;
  }
  // close HTML paragraph
  html = html + `</p>`;

  // add HTML to the page
  document.getElementById('quote-box').innerHTML = html;

  // update button text
  document.getElementById('load-quote').innerHTML = `Show another quote`;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);