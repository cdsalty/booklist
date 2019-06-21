// Practicing the lesson again


// Create a Book Constructor (to handle creating a book object)
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
};

// UI Constructor (where are prototypes for adding, deleting, etc to books)
function UI() {};

UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // Create a TR Element
  const row = document.createElement("tr"); // will then need to take this <tr></tr> and append data into it
// Insert Columns(which are actually the column, the <td>'s)
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "#" class = "delete">x<a></td>
  `
// For it to show up, we need to append it.
  list.appendChild(row);
}

// Show Alert (remember, we already called on it and created the parameters, a message and a class for it to go in)
// UI.prototype.showAlert = (message, className) => {}
UI.prototype.showAlert = function(message, className) {
  // Step 1: Create a <div> tag, a spot for our Alert to render/display at.
  const div = document.createElement('div');
  // Step 2: Add classes:
  div.className = `alert ${className}`;
  // Step 3: Add Text (remember, createTextNode)
  div.appendChild(document.createTextNode(message));
  // Step 4: Get Parent Element
  const container = document.querySelector('.container');
  // Step 5: Get the form  
  const form = document.querySelector('#book-form');

  // Step 6: Insert Alert: by calling container, the parent element, and then call insertBefore(what we want to insert, what we want to insert before, which is the form)
  container.insertBefore(div, form);

  // Step 7: Remove alert after 'x' amount of time. 
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Clear the fields after user presses submit:
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

}

// Event Listners
document.getElementById('book-form').addEventListener('submit', 
  function(e){
    // Get the values from the form
    const title  = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Istantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();   
    
    // VALIDATE VALIDATE
    if(title === ''  || author === '' || isbn === ''){
      // alert("BLANK ITEMS LEFT!!!")
      // ERROR ALERT: show alert takes in 2 things, the message and then the class, which in this case will be error
      ui.showAlert('All fields are required. Please fill out completely and then submit', 'error'); // error has a css class
      // After writing showAlert(), next is to go up top and create the prototype method.
    } else {
      // Bring in addBookToList and clearFields
      ui.addBookToList(book);
      ui.clearFields();
    };
    e.preventDefault();
  });
/*

   ui.addBookToList(book); // Placed inside our validation
    // after I do this, need to create the function that will pass in the book to add.
    // Don't forget to pass in book
   
    ui.clearFields(); // Placed inside our validation
    // console.log(title, book, isbn);

    

  TAKEAWAYS: 
  Always verify getElement is correctly 
  picking up the element. Spent tireless tine looking for an error when I used querySelector 
  but didn't call it right.

  */