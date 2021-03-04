/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
  * Quotes array stores 5 quote objects with properties:
    * quote - string - actual quote
    * source - string - person/character who said it
    * citation - string - reference to source (book, tv, etc)
    * year - int - year published/originated
***/

let quotes = [
  {
    quote: "I'm not superstitious, but I am a little stitious",
    source: 'Michael Scott (Steve Carrell)',
    citation: 'The Office'
  },
  {
    quote: "I would know him in death, at the end of the world.",
    source: 'Madeline Miller',
    citation: 'The Song of Achilles',
    year: 2011
  },
  {
    quote: "Si el corazón pensara dejaría de latir.",
    source: 'Alberto Méndez',
    citation: 'Los girasoles ciegos',
    year: 2008
  },
  {
    quote: "I can accept failure, everyone fails at something. But I can't accept not trying.",
    source: 'Michael Jordan'
  },
  {
    quote: "I have asked you THRICE...",
    source: 'David Rose (Daniel Levy)',
    citation: "Schitt's Creek"
  }
];


/***
 * `getRandomQuote` function
  * Generates random number between 0 and last index of quotes array
  * Returns random quote OBJECT from quotes array
  * 
***/
function getRandomQuote (){
  let randomNum = Math.floor(Math.random()*quotes.length)
  return quotes[randomNum];
}

/***
 * `printQuote` function
  * calls `getRandomQuote` function
  * creates string of HTML with quote and source from quote OBJECT
  * adds citation and year to string if applicaple
  * diplays HTML string in browser
***/
function printQuote () {
  let displayQuote = getRandomQuote();
  let htmlString = '';
  htmlString += `
    <p class="quote"> ${displayQuote.quote} </p>
    <p class="source"> ${displayQuote.source} 
    `;
  if(displayQuote.citation) {
    htmlString += `<span class="citation">${displayQuote.citation}</span>`;
  }
  if(displayQuote.year) {
    htmlString += `<span class="year">${displayQuote.year}</span>`;
  }
  htmlString += `</p>`;
  document.getElementById('quote-box').innerHTML = htmlString; 
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);