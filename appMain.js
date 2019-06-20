// Practicing the lesson again
// BECAUSE WHY NOT GET BETTER

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
    ui.addBookToList(book); 
    // after I do this, need to create the function that will pass in the book to add.
    // Don't forget to pass in book
    ui.clearFields();
    // console.log(title, book, isbn);

    e.preventDefault()
  });

  // TAKEAWAYS: Always verify getElement is correctly 
  // picking up the element. Spent tireless tine looking for an error when I used querySelector 
  // but didn't call it right.