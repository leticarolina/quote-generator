let apiQuotes = [];

//Get quotes from API
//created a function called GetQuotes
async function getQuotes() {
  //logged the api inside the function thru a variable
  const apiUrl = "https://type.fit/api/quotes";
  try {
    //response and apiQuotes are variables declared
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //error here
  }
}

//on load , to get the quotes running as soon as the page loads
getQuotes();

//Show a new quote
function newQuote() {
  //code to pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}
