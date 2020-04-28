const input = document.querySelector('.todo-input')
const  submit = document.querySelector('.icon ')
const todolist = document.querySelector('.todo-ul')
submit.addEventListener('click',addTodo);

function addTodo(){

    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    let todo2 =document.createElement('li');
    todo2.innerText = input.value;
    todo2.classList.add('todo-item');
    todoDiv.appendChild(todo2)

    let markButton = document.createElement('button');
    markButton.classList.add('complete')
    markButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    todoDiv.appendChild(markButton);
    markButton.addEventListener('click',completeTodo);

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
    todoDiv.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteTodo);


    todolist.appendChild(todoDiv)

    input.value = ''

}
function deleteTodo(e){
    console.log(e.target.parentElement)
    const Todo = e.target.parentElement;
    Todo.classList.add('fall')
    Todo.addEventListener('transitionend',function(){
        Todo.remove();
    })
    }
    

function completeTodo(e){
    e.target.parentElement.classList.add('completed');
}