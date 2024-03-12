const books = [];

function displayBooks() {
  const booksList = document.getElementById("books");
  booksList.innerHTML = "";
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author} - $${book.price}`;
    booksList.appendChild(li);
  });
}

function addBook() {
  const title = prompt("Enter the title of the book:");
  const author = prompt("Enter the author of the book:");
  const price = parseFloat(prompt("Enter the price of the book:"));
  if (title && author && !isNaN(price)) {
    books.push({ title, author, price });
    displayBooks();
  } else {
    alert("Please enter valid details for the book.");
  }
}

function searchBook() {
  const searchTerm = prompt("Enter the title of the book you're searching for:");
  if (searchTerm) {
    const searchResults = books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
    if (searchResults.length > 0) {
      alert("Search Results:\n\n" + searchResults.map(book => `${book.title} by ${book.author} - $${book.price}`).join("\n"));
    } else {
      alert("No matching books found.");
    }
  }
}


books.push({ title: "Book 1", author: "Author 1", price: 10 });
books.push({ title: "Book 2", author: "Author 2", price: 15 });

displayBooks();
