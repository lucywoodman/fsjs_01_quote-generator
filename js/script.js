/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const quoteButton = document.getElementById('load-quote');
const playButton = document.querySelector('.play');
const stopButton = document.querySelector('.stop');
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
 * Updates --base-color to a random hue.
 *
 */
 const changeColors = () => {
  const hue = Math.floor(Math.random() * 360);
  document.body.style.setProperty('--base-color', hue);
}

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
  changeColors();
};

// Event listeners
quoteButton.addEventListener("click", printQuote, false);

playButton.onclick = () => {
  let interval = setInterval(printQuote, 5000);
  playButton.style.display = 'none';
  stopButton.style.display = 'inline-block';
  stopButton.onclick = () => {
    clearInterval(interval);
    playButton.style.display = 'inline-block';
    stopButton.style.display = 'none';
  }
}