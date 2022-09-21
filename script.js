let libraryModule = (function () {
    
    const bookTableBody = document.querySelector('.book-table-body');
    const addBook = document.querySelector('.add-book');
    const modalContainer = document.querySelector('.modal-container');
    const close = document.querySelector('.close');
    const bookTitle = document.querySelector('#book-title');
    const bookAuthor = document.querySelector('#book-author');
    const bookPages = document.querySelector('#book-pages');
    const bookRead = document.querySelector('#book-read');
    const form = document.querySelector('form').addEventListener('submit', (e) => {
        addBookToLibrary();
        e.preventDefault();
        console.log(e);
        renderModule();
        clearForm();

        modalContainer.style.display = 'none';
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
            createBookItem(book, index)
        });

    };

    function createBookItem(book, index) {
        const bookRow = document.createElement('tr');
        bookRow.setAttribute('id', index);
        bookRow.setAttribute('class', 'book-row');
        bookRow.setAttribute('key', index);

        bookRow.appendChild(createBookElement('td', `${book.title}`, 'book-title'));
        bookRow.appendChild(createBookElement('td', `${book.author}`, 'book-author'));
        bookRow.appendChild(createBookElement('td', `${book.pages}`, 'book-pages'));
        bookRow.appendChild(createBookElement('td', `${book.read}`, 'book-read' ))
        

        
        
       
        const readBtn = createBookElement('button', 'read', 'read');
        bookRow.appendChild(readBtn)
    
        readBtn.addEventListener('click', () => {
            bookArray[index].read = !bookArray[index].read
            renderModule();
        })

        bookTableBody.insertAdjacentElement('afterbegin', bookRow)

    }



    function createBookElement(element, content, className) {
        const ele = document.createElement(element);
        ele.textContent = content;
        ele.setAttribute('class', className)
        return ele;
    }



    addBook.addEventListener('click', () => {
        modalContainer.style.display = 'block'
    });
    
    close.addEventListener('click', () => {
        modalContainer.style.display = 'none'
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
    }


    

    renderModule();



    return {bookArray, BookClass, renderModule}

})();