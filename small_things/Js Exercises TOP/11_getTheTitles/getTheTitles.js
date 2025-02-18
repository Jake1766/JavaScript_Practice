const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(books) {
    var titles = [];
    for(i in books){
        book = books[i];
        console.log(book);
        titles.push(book.title);
    }
    console.log(titles);
    return titles;
};

getTheTitles(books);


// Do not edit below this line
module.exports = getTheTitles;
