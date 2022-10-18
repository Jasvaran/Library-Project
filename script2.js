let libraryModule = (function () {
    
    const bookTableBody = document.querySelector('.book-table-body');
    const addBook = document.querySelector('.add-book');
    const modalContainer = document.querySelector('.modal-container');
    const close = document.querySelector('.close');
    const bookTitle = document.querySelector('#book-title');
    const bookAuthor = document.querySelector('#book-author');
    const bookPages = document.querySelector('#book-pages');
    const bookRead = document.querySelector('#book-read');
    const titleError = document.querySelector('.titleError');
    const authorError = document.querySelector('.authorError');
    const pageError = document.querySelector('.pagesError');
    const readError = document.querySelector('.readError');

    const form = document.querySelector('form').addEventListener('submit', (e) => {
        if (!bookTitle.validity.valid || !bookAuthor.validity.valid || !bookPages.validity.valid
            || !bookPages.validity.valid || !bookRead.validity.valid){
                e.preventDefault();
                showError();
            } else {
                e.preventDefault();
                addBookToLibrary();
                console.log(e);
                renderModule();
                clearForm();
                modalContainer.style.visibility = 'hidden';
            }
            


        
    })

    

    let bookArray = [
        {
            title: 'Jesse',
            author: 'Mann',
            pages: 10,
            read: false,
        },

        {
            title: 'Mano',
            author: 'Toor',
            pages: 10,
            read: false
        }
    ]

    class BookClass {
        constructor (title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }
    }

    console.log(bookArray[0].title)

    function renderModule() {
        bookTableBody.textContent = ""; 
        bookArray.forEach((book, index) => { 
          const bookHtml = `
            <tr class=${index} id=${index}>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.read}</td>
            </tr>
          `;
          

          bookTableBody.insertAdjacentHTML("beforeend", bookHtml)

        });
        for (let i = 0; i < bookArray.length; i++) {
            let rowRef = document.getElementById(i);
            // let tdRead = document.createElement('td');
            
            
           
            let readButton = document.createElement('button');
            readButton.textContent = 'Read';
            readButton.setAttribute('class', i);
            // tdRead.appendChild(readButton)
            rowRef.appendChild(readButton);

            readButton.addEventListener('click', () => {
                bookArray[i].read = !bookArray[i].read
                renderModule();

            
                
            });
            // let tdDelete = document.createElement('td');
            let delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            // tdDelete.appendChild(delBtn)
            rowRef.appendChild(delBtn);
            delBtn.addEventListener('click', () => {
                bookArray.splice(i, 1);
                renderModule();
            })

        }


    };


    addBook.addEventListener('click', () => {
        modalContainer.style.visibility = 'visible'
    });
    
    close.addEventListener('click', () => {
        modalContainer.style.visibility = 'hidden'
    });

    function addBookToLibrary() {
        if (bookTitle.value.length === 0 || bookAuthor.value.length === 0) {
            alert('Please fill out the form')
        }
        if (bookRead.checked === true) {
            bookRead.value = 'true';
        } else if (bookRead.checked === false) {
            bookRead.value = 'false';
        } else {
            return;
        }

        const newBook = new BookClass(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value)
        bookArray.push(newBook);
    }

    function clearForm() {
        bookTitle.value = "";
        bookAuthor.value = "";
        bookPages.value = "";
        bookRead.checked = false;
        titleError.innerHTML = "";
        authorError.innerHTML = "";
        pageError.innerHTML = "";
    }


    

    renderModule();


    function showError() {
        if (bookTitle.validity.valueMissing) {
            titleError.innerHTML = 'Please enter a title'
        } 
        if ( bookAuthor.validity.valueMissing) {
            authorError.innerHTML = "please enter a author"
        }
        if (bookPages.validity.valueMissing) {
            pageError.innerHTML = "Please enter # of pages"
        } else {
            titleError.innerHTML = "";
            authorError.innerHTML = "";
            pageError.innerHTML = "";
        }
    }
    


    return {bookArray, BookClass, renderModule}

})();



