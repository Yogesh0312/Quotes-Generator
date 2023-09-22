AOS.init();
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
let realData = "";
let quotesData = "";

const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
  window.open(tweetPost);
};
const getNewQuotes = () => {
  let rNum = Math.floor(Math.random() * 10);
  quotesData = realData[rNum];
  quotes.innerText = `${quotesData.text}`;
  author.innerText = `${quotesData.author}`;
};

const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();

    getNewQuotes();
    console.log(realData);
  } catch (error) {
    console.log(error);
  }
};
const tweetMe = document.getElementById("tweetMe");
tweetMe.addEventListener("click", tweetNow);
const button = document.getElementById("button");
button.addEventListener("click", getNewQuotes);
getQuotes();
