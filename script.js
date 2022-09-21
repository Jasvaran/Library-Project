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
        bookArray.forEach(book => { 
          const bookHtml = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.read}</td>
                <td><button class="read" id="read">Read</button></td>
            </tr>
          `
          

          bookTableBody.insertAdjacentHTML("beforeend", bookHtml)

        });

    };

    // function createBookItem(book, index) {
    //     const bookRow = document.createElement('tr')

    // }


    // function createReadElement() {
    //     const readEle = document.createElement('td');
    //     const readBtn = document.createElement('button');
    //     readBtn.setAttribute('class', 'read')

    //     readEle.appendChild(readBtn);
     
    // }



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