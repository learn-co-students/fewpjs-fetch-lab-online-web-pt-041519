function fetchBooks() { 
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
    return response.json();
  })
  // .then(function(json){
  //   renderBooks(json);
  // });
  .then(function(json) {
    renderBooks(json)
    fifthBook(json);
    allPages(json);
    someCharacter(json);
  // console.log(json)
  });

}

//5th book in series
function fifthBook(json) {
  const main = document.querySelector('main');
  const h2 = document.createElement('h2');
  h2.innerHTML = `<h2>This is the fifth book: ${json[5].name}</h2>`
  main.appendChild(h2)
}
//Total Pages
function allPages(json){
  let total = 0;
  json.forEach(book => {
    total += book.numberOfPages;
  });
  const h3 = document.createElement('h3');
  const main = document.querySelector('main');
  h3.innerHTML = `Total pages = ${total}`;
  main.appendChild(h3);
}

//1031st character in the series
function someCharacter(json){
  const h3 = document.createElement('h3');
  const main = document.querySelector('main');

}

function renderBooks(json) {
  const main = document.querySelector('main');
  json.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2);
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
