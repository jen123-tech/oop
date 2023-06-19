class book {
    constructor(title, author){
    this.title=title;
    this.author=author;
    this.myBook="null"
    }
}

var myBook = new book ("Java","John");
        myBook.price=300;
    
        var tag = document.createElement('h1');
        var text = document.createTextNode('Book title is : ' + myBook.title);
        tag.appendChild(text);
        var element = document.getElementById('data');
        element.appendChild(tag);

        var tag = document.createElement('p');
        var text = document.createTextNode('Book author is : ' + myBook.author);
        tag.appendChild(text);
        var element = document.getElementById('data');
        element.appendChild(tag);

        var tag = document.createElement('p');
        var text = document.createTextNode('Book price is : ' + myBook.price);
        tag.appendChild(text);
        var element = document.getElementById('data');
        element.appendChild(tag);


        