let libraryModule = (function () {

    const bookTableBody = document.querySelector('.book-table-body');

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

    let renderModule = (function() {
        bookArray.forEach(book => {
          const bookHtml = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>${book.read}</td>
            </tr>
          `
          bookTableBody.insertAdjacentHTML("beforeend", bookHtml)
        });
    })();

    return {bookArray, BookClass, renderModule}

})();