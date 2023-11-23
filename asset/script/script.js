
function searchBooks() {
    var category = document.getElementById('category').value;
    var url = 'https://openlibrary.org/subjects/' + category + '.json';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        var books = data.works;
        var booksDiv = document.getElementById('books');
        booksDiv.innerHTML = '';

        books.forEach(book => {
          var title = book.title;
          var authors = book.authors ? book.authors.map(author => author.name).join(', ') : 'N/A';
          var coverUrl = 'https://covers.openlibrary.org/b/id/' + book.cover_id + '-M.jpg';

          var bookDiv = document.createElement('div');
          bookDiv.className = 'book';


          var bookImg = document.createElement('img');
          bookImg.src = coverUrl;
          bookImg.style.marginTop = "20px"

          var bookTitle = document.createElement('h3');
          bookTitle.textContent = title;

          var bookAuthors = document.createElement('p');
          bookAuthors.textContent = 'Autore(i): ' + authors;

          var addinfo = document.createElement('button')
          addinfo.textContent =  'Maggiori informazioni '
          addinfo.style.marginBottom = "20px"

          var extratext = document.createElement('div');
          bookDiv.className = 'info'


          bookDiv.appendChild(bookImg);
          bookDiv.appendChild(bookTitle);
          bookDiv.appendChild(bookAuthors);
          bookDiv.appendChild(addinfo)
          bookDiv.appendChild(extratext)

          bookDiv.addEventListener('click', function() {
            getBookDescription(book.key);
          });

          booksDiv.appendChild(bookDiv);
        });
      })
      .catch(error => {
        console.error('Si è verificato un errore:', error);
      });
  }
  function getBookDescription(key) {
     var url = 'https://openlibrary.org' + key + '.json';

     fetch(url)
    .then(response => response.json())
    .then(data => {
     var description = data.description ? data.description.value : 'Descrizione non disponibile';
          alert (description)
     })
 .catch(error => {
console.error('Si è verificato un errore:', error);
 });
}