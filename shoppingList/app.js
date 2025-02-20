const inputText = document.querySelector("#inputText");
const button = document.querySelector("#btn")

const list = document.querySelector("#list")

button.addEventListener('click', addItem)


function addItem(){
    var text = inputText.value;
    console.log("adding item", text);
    inputText.value = '';

    var listItem = document.createElement('li');
    listItem.textContent = text;
    list.appendChild(listItem);
    
} 