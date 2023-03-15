// let apiQuotes = [];

//Get quotes from API
//created a function called GetQuotes
// async function getQuotes() {
//   //logged the api inside the function thru a variable
//   const apiUrl = "https://type.fit/api/quotes";
//   try {
//     //response and apiQuotes are variables declared
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     //error here
//   }
// }

//on load , to get the quotes running as soon as the page loads
// getQuotes();

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("twitter");
const newQuoteButton = document.getElementById("new-quote");

//Show a new quote
function newQuote() {
  //code to pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  authorText.textContent = quote.author;
  quoteText.textContent = quote.text;
}

//to load the function on the browser
newQuote();
