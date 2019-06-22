/*
Start by creating two classes instead of constructors, Book & UI
Book: title, author, isbn
UI: will handle all the methods and deal with the user interface.
    - addBookToList(),showAlert(), deleteBook(), clearFields()
      - then carry over the parameters used for each method
        - add the contents the functions consist of

*/
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book){
    const list = document.getElementById('book-list');
    const row = document.createElement("tr"); // will then need to take this <tr></tr> and append data into it
    // Insert Columns
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href = "#" class = "delete">X<a></td>
      `
    // append for the row to render
    list.appendChild(row);
  }

  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    // Get Parent Element
    const container = document.querySelector('.container');
    // Get the form  
    const form = document.querySelector('#book-form');
    // nsert Alert: Need to call the container class, the parent element, then call insertBefore(what we want to insert, what we want to insert before, which is the form)
    container.insertBefore(div, form);
    // Time-Out after 3 secs; Remove alert after 'x' amount of time. 
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteBook(target) { 
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove(); 
        //first parentElement is the <td>, we need the next parentElement, the <tr> table row
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Need to carry over Event Listeners
