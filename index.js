function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
    return response.json();
  })
  .then(function(books) {
    renderBooks(books);
  });
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

// // renders book titles into the DOM by passing a JSON object to renderBooks():
// function getPosts() {
//   fetchBooks();
// }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})