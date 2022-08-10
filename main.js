
const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const quot_btn = document.getElementById('quote-btn');
let realData=" ";

const getNewQuotes = ()=>{
    let rnum = Math.floor(Math.random()*10);
    quotes.innerText = `${realData[rnum].text}`;
    author.innerText = `${realData[rnum].author}`;
};

const getQuotes = async ()=>{
    const api ="https://type.fit/api/quotes";
try {
    
    let data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
} catch (error) {}
}


quot_btn.addEventListener("click",getNewQuotes);
getQuotes();