/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

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
    year: 1922
  },
  {
    quote: `Be careful how you are talking to yourself, because you are listening.`,
    source: `Lisa M. Hayes`,
    citation: `The Power of Self Talk`,
  },
  {
    quote: `Life is a matter of choices, and every choice you make makes you.`,
    source: `John C. Maxwell`,
  },
];

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

/**
 * Prints output from getRandomQuote() to the browser.
 *
 */

const printQuote = () => {
  const randomQuote = getRandomQuote();

  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  if ( randomQuote.citation ) {
    html = html + `
      <span class="citation">${randomQuote.citation}</span>
    `;
  }

  if ( randomQuote.year ) {
    html = html + `
      <span class="year">${randomQuote.year}</span>
    `;
  }
  html = html + `</p>`;

  document.getElementById('quote-box').innerHTML = html;
  document.getElementById('load-quote').innerHTML = 'Show another quote';
};

document.getElementById('load-quote').addEventListener("click", printQuote, false);