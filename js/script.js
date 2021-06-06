/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const quoteButton = document.getElementById('load-quote');
const autoplayButton = document.getElementById('autoplay');
const quoteBox = document.getElementById('quote-box');

const quotes = [
  {
    quote: `We are what we repeatedly do. Excellence, then, is not an act, but a habit.`,
    source: `Will Durant on Aristotle`,
    citation: `The Story of Philosophy`,
    year: 1926,
    tags: `productivity`
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
 * Returns random quote from the quotes array.
 *
 * @return {object} random quote from quotes array.
 */

const getRandomQuote = () => {
  const randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];
};

/**
 * Concatenates and prints output from getRandomQuote() 
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

  if ( randomQuote.tags ) {
    html = html + `
      </p>
      <p class="tags">${randomQuote.tags}
    `;
  }

  html = html + `</p>`;

  quoteBox.innerHTML = html;
};

const changeColors = () => {
  const hue = Math.floor(Math.random() * 360);
  document.body.style.setProperty('--base-color', hue);
}

const startInterval = () => {
  setInterval(printQuote, 5000);
  setInterval(changeColors, 5000);
  autoplayButton.innerHTML = `
  Stop autoplay <svg width="24" height="24" fill="none" viewBox="0 0 24 16"><rect width="12.5" height="12.5" x="5.75" y="5.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="1"></rect></svg>
  `;
}

const stopInterval = () => {
  clearInterval();
}

// Event listeners
quoteButton.addEventListener("click", printQuote, false);
autoplayButton.addEventListener("click", startInterval, false);