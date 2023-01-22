document.getElementById("addnew").addEventListener("click", function () {
  var text = document.getElementById("quoteText").value;
  var author = document.getElementById("quoteAuthor").value;
  var source = document.getElementById("quoteSource").value;

  var newQuote = {
    quoteText: text,
    quoteAuthor: author,
    quoteSource: source,
  };
  fetch("https://js-course-server.onrender.com/quotes/add-quote", {
    method: "POST",
    body: JSON.stringify(newQuote),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(function (res) {
      return res.json;
    })
    .then(function (data) {
      console.log("the quote is created", data);
      document.getElementById("quoteSource").value = "";
      document.getElementById("quoteText").value = "";
      document.getElementById("quoteAuthor").value = "";
      alert("vas citat je uspesno dodat");
    });
});
document.getElementById("search").addEventListener("keydown", function () {
  var searchValue = document.getElementById("search").value;
  quotes = allQuotes.filter(function (index, item) {
    if (item.quoteText) {
      return item.quoteText.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return false;
    }
    return item.quoteText;
  });
  renderQuotes();
});
