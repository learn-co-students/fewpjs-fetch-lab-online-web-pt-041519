function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

function countCharacters(json) {
  const main = document.querySelector('main')
  let x = 0
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.characters.length}</h2>`
    main.appendChild(h2)
    x = x + book.characters.length
  })
  let h2 = document.createElement('h2')
  h2.innerHTML = `<h2>The entire series contains ${x} Characters</h2>`
  main.appendChild(h2)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
