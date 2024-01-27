import "./style/styles.css";
function searchBooks() {
    let category = document.getElementById('category').value;
    let url = 'https://openlibrary.org/subjects/' + category + '.json';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let books = data.works;
        let booksDiv = document.getElementById('books');
        booksDiv.innerHTML = '';
        
        if (books.length === 0 ? alert('No books found in the selected category') : console.log(books.length)) {

        }
  
        books.forEach(book => {
          let title = book.title;
          let authors = book.authors ? book.authors.map(author => author.name).join(', ') : 'N/A';
          let coverUrl = 'https://covers.openlibrary.org/b/id/' + book.cover_id + '-M.jpg';
  
          let bookDiv = document.createElement('div');
          bookDiv.className = 'book';
  
          let bookImg = document.createElement('img');
          bookImg.src = coverUrl;
          bookImg.style.marginTop = "20px";
  
          let bookTitle = document.createElement('h3');
          bookTitle.textContent = title;
  
          let bookAuthors = document.createElement('p');
          bookAuthors.textContent = 'Author(s): ' + authors;
  
          let addinfo = document.createElement('button');
          addinfo.textContent =  'More information ';
          addinfo.style.marginBottom = "20px";
  
          let extratext = document.createElement('div');
          extratext.className = 'info';
  
          bookDiv.appendChild(bookImg);
          bookDiv.appendChild(bookTitle);
          bookDiv.appendChild(bookAuthors);
          bookDiv.appendChild(addinfo);
          bookDiv.appendChild(extratext);
  
          bookDiv.addEventListener('click', function() {
            getBookDescription(book.key);
          });
  
          booksDiv.appendChild(bookDiv);
      });
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }
  function getBookDescription(key) {
     let url = 'https://openlibrary.org' + key + '.json';
  
     fetch(url)
    .then(response => response.json())
    .then(data => {
     let description = data.description ? data.description.value : 'Description not available';
          alert (description);
     })
  .catch(error => {
  console.error('An error occurred:', error);
  });
  }
  document.querySelector('#search-button').addEventListener('click', searchBooks);