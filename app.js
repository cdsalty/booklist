// BEFORE ES6

// Book Constructor (will handle creating the book object)
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}


// UI Constructor (Will be a set of prototype methods such as adding the book, delete the book, etc.)
    // will simply be an empty function while everything else will go within the prototype

function UI () {};
  UI.prototype.addBookToList = function(book){  //the UI must be capitalized here.
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="x" class='delete'>X</td>
    `;

    list.appendChild(row); // I forgot to append it and WILL CAUSE A HEADACHE!
  }
// Create a way to clear out the input fields AFTER user clicks the submit button.
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

/*
 Event Listeners 
     - e.preventDefault() will stop the form from actually submitting; will stop the inital behavior.
     - e is the event taken place.
     - when the user submits, WHAT NEEDS/DO YOU WANT TO HAPPEN? 
            1) get the fields from the form (const title = document.getElementById('title').value;)
                - by adding the comma and indenting, you can skip adding const each time.

** SIDE NOTE: Could not get querySelector to log to the console;

*/


document.getElementById('book-form').addEventListener('submit', 
  function(e){ // at one point, it wouldn't work with it and then it wouldn't work without it...
    // GET FORM VALUES, & ASSIGN EACH TO A VARIABLE
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    
    // Instantiating a new book
    const book = new Book(title, author, isbn);

    // Instantiate a UI object(so we can store and delete books via the UI)
    const ui = new UI();
    
    // Create a way to add the book to the list created. Make a function then define it. 
    ui.addBookToList(book); // after creating the function, I then go and define it.

    // Clear the fields after user submits book entry.
    ui.clearFields();  // Must do this and then define the function and what it will do, etc above.

    e.preventDefault();
  })