//Get Quotes API

const newQuote = document.querySelector("#new-quote");
const quoteText = document.querySelector("#quote");
const author = document.querySelector("#author");
const twitter = document.querySelector("#twitter");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

newQuote.addEventListener("click", async () => {
  const quoteData = await fetch("https://type.fit/api/quotes");
  const data = await quoteData.json();
  console.log(data);
  const maxNumber = getRandomInt(data.length);
  console.log(maxNumber);
  //  quoteText.innerHTML = "";
  quoteText.textContent = data[maxNumber].text;
  if (data[maxNumber].author) {
    author.textContent = data[maxNumber].author;
  } else {
    author.textContent = "Unknown";
  }
});

let apiQuotes = [];
async function getQuotes() {
  const Url = "https://type.fit/api/quotes";
  try {
    if (!response.ok) alert(`${response.data.message}`);
    const response = await fetch(Url);
    const data = await response.json();
    const maxNumber = getRandomInt(data.length);
    quoteText.innerHTML = "";
    quoteText.innerHTML = data[maxNumber].text;
    author.innerHTML = data[maxNumber].author;
  } catch {}
}
