//Get Quotes API

const newQuote = document.querySelector("#new-quote");
const quoteContainer = document.querySelector("#Quote-container");
const quoteText = document.querySelector("#quote");
const author = document.querySelector("#author");
const twitter = document.querySelector("#twitter");
const loader = document.querySelector("#loader");
let apiQuotes = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function loaded() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}
async function getQuotes() {
  loading();
  const Url = "https://type.fit/api/quotes";
  try {
    const response = await fetch(Url);
    const data = await response.json();
    const maxNumber = getRandomInt(data.length);
    quoteText.textContent = data[maxNumber].text;
    if (author.textContent) {
      author.textContent = data[maxNumber].author;
    } else {
      author.textContent = "Udefined";
    }
    loaded();
  } catch (err) {
    alert(err.message);
  }
}

loaded();
newQuote.addEventListener("click", getQuotes);

// Tweet Code
function tweetCode() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent}`;
  window.open(twitterUrl, "_blank");
}

twitter.addEventListener("click", tweetCode);
