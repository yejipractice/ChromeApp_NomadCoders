const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let ToDoArray = [];


function hadleDelBtn(event) {
    const target = event.target;
    const li = target.parentNode;
    toDoList.removeChild(li);
    const cleanArray = ToDoArray.filter(function(toDo){
        return toDo.id !==parseInt(li.id);
    });
    ToDoArray = cleanArray;
    saveToDo();
}

function saveToDo() {
    localStorage.setItem(TODOS_LS,JSON.stringify(ToDoArray));
}

function paintToDos(text) {
    const li = document.createElement("li");
    const deletebtn = document.createElement("button");
    const span = document.createElement("span");
    deletebtn.innerText = "delete";
    span.innerText=text;
    deletebtn.addEventListener("click", hadleDelBtn);
    let newId = ToDoArray.length+1;
    li.appendChild(span);
    li.appendChild(deletebtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text :text,
        id : newId
    };
    ToDoArray.push(toDoObj);
    saveToDo();
}



function handleSubmit(event) {
    event.preventDefault();
    const inputvalue = toDoInput.value;
    paintToDos(inputvalue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedTodos = JSON.parse(loadedToDos);
        parsedTodos.forEach(function(todo){
            paintToDos(todo.text);
        });
    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}   

init();