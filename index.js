function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(function(json) {
    renderBooks(json)
    fifthBook(json)
    thousandCharacter(json)
    addPages(json)
  // console.log(json)
  });
}

// Render all books in series
function renderBooks(json) {
  const main = document.querySelector('main')
  const h1 = document.createElement('h1')
  h1.innerText = "Books in series"
  main.appendChild(h1)
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

// Render 5th book in series
function fifthBook(json) {
  const main = document.querySelector('main')
  const h2 = document.createElement('h2')
  h2.innerHTML = `<h2>${json[5].name}</h2>`
  main.appendChild(h2)
}

// Show 1031st character in series
function thousandCharacter(json) {
  json.forEach(book => {
    if (book.characters.length > 1030) {
      console.log(`Character is ${book.characters[1031]}`)
    }
  })
}

// Add all pages in series
function addPages(json) {
  let sum = 0
  json.forEach(book => {
    sum = sum + book.numberOfPages
  })
  console.log(`Total pages in series: ${sum}`)
}

let myData

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
