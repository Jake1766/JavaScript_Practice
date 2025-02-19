const container = document.querySelector("#container");

var content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the text content of div #container";
container.appendChild(content);


content = document.createElement("p");
content.classList.add("content");
content.textContent = "Hey, I'm red!";
content.style.color = 'red';
container.appendChild(content);

content = document.createElement('h3');
content.classList.add("content");
content.textContent = 'I\'m a blue h3';
content.style.color = 'blue';
container.appendChild(content);

content = document.createElement('div');
content.classList.add("mainDiv");
content.style.borderStyle = 'solid';
content.style.borderColor = 'black';
content.style.backgroundColor = 'pink';

var subcontent = document.createElement('h1');
subcontent.classList.add('content');
subcontent.textContent = 'I\'m a div!';
content.appendChild(subcontent);

subcontent = document.createElement('p');
subcontent.textContent = 'Me too!';
content.appendChild(subcontent);

container.appendChild(content);

