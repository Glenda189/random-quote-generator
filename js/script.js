/*** 
 * `quotes` array -
 * created an array with five objects inside of array
***/

const quotes = [
{quote:'We cannot solve problems with the kind of thinking we employed when we came up with them.',
source:'Albert Einstein'
},
{quote:'Learn as if you will live forever, live like you will die tomorrow.',
source:'Mahatma Gandhi'
},
{quote:'Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.',
source:'Oprah Winfrey'
},
{quote:'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
source:'Helen Keller'
},
{quote:'I am not afraid of storms, for I am learning how to sail my ship.',
source:'Louis Alcott',
citation: 'Book',
year: 1868
 }
];

/***
 * `getRandomQuote` function - created a function 
 *function getRandomQuote - will give a random quote within the array
* randomQuote - 
* quoteIndex - Stores the information from randQuotes
***/
function getRandomQuote(){
  let randomQuote = Math.floor(Math.random() * quotes.length);
  let quoteIndex = quotes[randomQuote];

  return quoteIndex;
};
// console.log(getRandomQuote());

/***
 * `printQuote` function
***/
 // *Created variable that calls the getRandomQuote() 
  // function
  function printQuote() {
    let quoteIndex = getRandomQuote();
    console.log(quotes);
    console.log(quoteIndex);

  // *Created a variable that initiates HTML string with paragraph tags
  let html = `<p class = 'quote'>${quoteIndex.quote}</p>`;
      html += `<p class = 'source'> ${quoteIndex.source}`; 
    console.log(quoteIndex.quote);

  // * created an if statement to check if the citation property 
  // exists
    if (quoteIndex.citation){
       html += `<span class = 'citation'>${quoteIndex.citation} </span>`; 
      
    }
  // * created an if statement to check of the year property exists
  // 
    if (quoteIndex.year){
      html += `<span class= 'year'> ${quoteIndex.year}</span>`;

    }

  // * closed paragraph tag
    html += `</p>`;
  // * set the innerHTML of the quote-box div to equal the 
  // complete HTML string
    console.log(html);
  document.getElementById('quote-box').innerHTML = html;
} 

// printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
