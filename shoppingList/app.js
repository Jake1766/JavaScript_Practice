const inputText = document.querySelector("#inputText");
const button = document.querySelector("#btn");

const list = document.querySelector("#list");

button.addEventListener('click', addItem);




function addItem(){
    var text = inputText.value;
    console.log("adding item", text);
    inputText.value = '';

    //create list item 
    var listItem = document.createElement('li');
    listItem.textContent = text;
    listItem.id = text;

    //create delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    //add event listener to delete button 
    deleteButton.addEventListener('click', deleteItem);





    //add list item to list
    list.appendChild(listItem);

    //add delete button to list item
    listItem.appendChild(deleteButton);
    
} 

function deleteItem(item){
    console.log('deleting: ', item);
    item.remove();
}