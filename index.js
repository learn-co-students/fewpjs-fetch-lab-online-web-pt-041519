function fetchBooks() {
   return fetch('https://anapioficeandfire.com/api/books')
      .then(resp => resp.json())
      .then(json => renderBooks(json))
}


function renderBooks(json) {
   // want to add to the main
   const main = document.querySelector('main')

   // want to loop thru the json, create a new h1, get the title name, set that as the h1 inner text, and append to the main
   json.forEach(book => {
      const h1 = document.createElement('h1')
      h1.innerHTML = `<h1>${book.name}</h1>`
      main.appendChild(h1)
   })
   

}


document.addEventListener('DOMContentLoaded', function() {
   fetchBooks()
 })