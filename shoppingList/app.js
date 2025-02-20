const inputText = document.querySelector("#inputText");
const button = document.querySelector("#btn");

const list = document.querySelector("#list");

button.addEventListener('click', addItem);

function deleteItem(item){
    console.log('deleting: ', item);
    var item = document.querySelector(`#${item}`);
    item.remove();
}


function addItem(){
    var text = inputText.value;
    console.log("adding item", text);
    inputText.value = '';

    

    //create delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    //add event listener to delete button 
    deleteButton.addEventListener('click', deleteItem(text));



    //create list item 
    var listItem = document.createElement('li');
    listItem.textContent = text;
    listItem.id = listItem.textContent;


    //add list item to list
    list.appendChild(listItem);

    //add delete button to list item
    listItem.appendChild(deleteButton);
    
} 