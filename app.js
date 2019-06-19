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
  function(e){
    // GET FORM VALUES, ASSIGN EACH TO A VARIABLE
    const title = document.getElementById('.title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    console.log(title, author, isbn);
    e.preventDefault();
  })