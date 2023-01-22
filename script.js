var quotes = [];
var allQuotes = [];
function renderQuotes() {
  var parentElement = document.getElementById("list");
  parentElement.innerHTML = "";
  quotes.forEach(function (item, index) {
    var childEl = document.createElement("li");
    childEl.textContent =
      item.quoteText + " - " + item.quoteAuthor + " - " + item.quoteSource;
    parentElement.appendChild(childEl);
  });
}

fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    quotes = data;
    allQuotes = data;
    renderQuotes();
  })
  .catch(function (err) {
    console.log("err", err);
  });

document.getElementById("search").addEventListener("keyup", function () {
  var searchValue = document.getElementById("search").value;
  quotes = allQuotes.filter(function (item, index) {
    if (item.quoteText) {
      return item.quoteText.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return false;
    }
  });
  renderQuotes();
});
