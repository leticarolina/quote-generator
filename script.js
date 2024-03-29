const quoteContainer = document.getElementById("quote-container"); //create a variable to target the html element
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("twitter");
const newQuoteButton = document.getElementById("new-quote");

//Show a new quote
function newQuote() {
  //code to pick a random quote from api localQuotes
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  authorText.textContent = quote.author; //textContent is to pass in a string what is shown on the element
  if (quote.text.length > 140) {
    quoteText.classList.add("long-quote");
    //classList is to target a CSS declaration block
    //.add is to add the declaration and .remove to remove
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text; //quote.text is to target the class in the html code
}

//Function to tweet a quote
function tweetQuote() {
  const TweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(TweetUrl, "_blank");
  //${} for template string
  // window.open() to open on click and target link or variable in the brackets
}

//Events on button/Event listeners (usually comes at the bottom bcs first declare the function first because you call it)
//syntax variable.addEventListener( 'the event to target eg click' , the function);
newQuoteButton.addEventListener("click", newQuote);
twitterButton.addEventListener("click", tweetQuote);

//to load the function on the browser
newQuote();
