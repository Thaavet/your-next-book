/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function searchBooks() {\r\n    let category = document.getElementById('category').value;\r\n    let url = 'https://openlibrary.org/subjects/' + category + '.json';\r\n  \r\n    fetch(url)\r\n      .then(response => response.json())\r\n      .then(data => {\r\n        let books = data.works;\r\n        let booksDiv = document.getElementById('books');\r\n        booksDiv.innerHTML = '';\r\n        \r\n        if (books.length === 0 ? alert('No books found in the selected category') : console.log(books.length)) {\r\n\r\n        }\r\n  \r\n        books.forEach(book => {\r\n          let title = book.title;\r\n          let authors = book.authors ? book.authors.map(author => author.name).join(', ') : 'N/A';\r\n          let coverUrl = 'https://covers.openlibrary.org/b/id/' + book.cover_id + '-M.jpg';\r\n  \r\n          let bookDiv = document.createElement('div');\r\n          bookDiv.className = 'book';\r\n  \r\n          let bookImg = document.createElement('img');\r\n          bookImg.src = coverUrl;\r\n          bookImg.style.marginTop = \"20px\";\r\n  \r\n          let bookTitle = document.createElement('h3');\r\n          bookTitle.textContent = title;\r\n  \r\n          let bookAuthors = document.createElement('p');\r\n          bookAuthors.textContent = 'Author(s): ' + authors;\r\n  \r\n          let addinfo = document.createElement('button');\r\n          addinfo.textContent =  'More information ';\r\n          addinfo.style.marginBottom = \"20px\";\r\n  \r\n          let extratext = document.createElement('div');\r\n          extratext.className = 'info';\r\n  \r\n          bookDiv.appendChild(bookImg);\r\n          bookDiv.appendChild(bookTitle);\r\n          bookDiv.appendChild(bookAuthors);\r\n          bookDiv.appendChild(addinfo);\r\n          bookDiv.appendChild(extratext);\r\n  \r\n          bookDiv.addEventListener('click', function() {\r\n            getBookDescription(book.key);\r\n          });\r\n  \r\n          booksDiv.appendChild(bookDiv);\r\n      });\r\n      })\r\n      .catch(error => {\r\n        console.error('An error occurred:', error);\r\n      });\r\n  }\r\n  function getBookDescription(key) {\r\n     let url = 'https://openlibrary.org' + key + '.json';\r\n  \r\n     fetch(url)\r\n    .then(response => response.json())\r\n    .then(data => {\r\n     let description = data.description ? data.description.value : 'Description not available';\r\n          alert (description);\r\n     })\r\n  .catch(error => {\r\n  console.error('An error occurred:', error);\r\n  });\r\n  }\r\n  document.querySelector('#search-button').addEventListener('click', searchBooks);\n\n//# sourceURL=webpack://your-next-bbok/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;