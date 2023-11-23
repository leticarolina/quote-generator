# Quote Generator

## Table of contents

- [Overview](#overview)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## Overview

The Quote Generator project marks my initial venture into implementing JavaScript. It's a webpage designed to display and share quotes sourced from a local API that I manage personally. This API is regularly updated with handpicked quotes, often suggested by friends or sourced from quotes I find compelling. The generator not only renders these quotes dynamically but also offers users the convenience of sharing them directly to X(Twitter), adding a social interaction element to the experience.

### Links

- Live Site URL: [https://leticarolina.github.io/quote-generator/](https://leticarolina.github.io/quote-generator/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Vanilla Javascript

### What I learned

Adding and removing a class

```javascript
quoteText.classList.add("long-quote");
quoteText.classList.remove("long-quote");
```

Implement a X(Twitter) share option

```javascript
function tweetQuote() {
  const TweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(TweetUrl, "_blank");
  //${} for template string
  // window.open() to open on click and target link or variable in the brackets
}
```

## Author

- Leticia Azevedo
