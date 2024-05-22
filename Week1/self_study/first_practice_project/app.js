//selecting elements
const form=document.querySelector('#todo-form')
const todoInput=document.querySelector('#todo')
const todoList=document.querySelector('.list-group')
const firstCardBody=document.querySelectorAll('.card-body')[0]
const secondCardBody=document.querySelectorAll('.card-body')[1]
const filter=document.querySelector('#filter')
const clearButton=document.querySelector('#clear-todos')

eventListeners()
function eventListeners(){  //all events are here 
    form.addEventListener('submit',addTodo)
  document.addEventListener('DOMContentLoaded',loadAllTodosUI)
   secondCardBody.addEventListener('click',deleteTodo)
   filter.addEventListener('keyup',filterTodos)
   clearButton.addEventListener('click',clearAllTodos)

}
function clearAllTodos(e){
    //first remove all todos from UI
    if(confirm('are u sure u want to delete all?')){
                  //todoList.innerHTML=''//it works but slow and not recommended
        while(todoList.firstElementChild!=null){
            todoList.removeChild(todoList.firstElementChild)
        }   
        localStorage.removeItem('todos')       
    }
}
function filterTodos(e){
const filteredValue=e.target.value.toLowerCase()
const listedItems=document.querySelectorAll('.list-group-item')
listedItems.forEach(function(listedItem){
    const text=listedItem.textContent.toLowerCase()
    if(text.indexOf(filteredValue)===-1){
        listedItem.setAttribute('style','display:none !important')
    }else{
        listedItem.setAttribute('style','display:block')
    }
})
}
function deleteTodo(e){
    if(e.target.className==='fa fa-remove'){
e.target.parentElement.parentElement.remove()
deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)
showAlert('success','todo is deleted successfully')
    }
}
function deleteTodoFromStorage(deletetodo){
let todos=getTodosFromStorage()
todos.forEach(function(todo,index){
    if(todo===deletetodo)
        todos.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(todos))
})
}
function loadAllTodosUI(){
      let todos=getTodosFromStorage()
      todos.forEach(function(todo) {                    
addTodoUI(todo)        
      });
}
function addTodo(e){
  const newTodo=todoInput.value.trim()
  if(newTodo===''){
   
    showAlert('danger','please input a todo')
  }else{
    addTodoUI(newTodo)
    addTodoStorage(newTodo)
    showAlert('success',` "${newTodo}" todo is added successfully`)

  }
     
    e.preventDefault()
}
function getTodosFromStorage(){  
    let todos;
    if(localStorage.getItem('todos')===null){
      todos=[]
    }else{
      todos=JSON.parse(localStorage.getItem('todos'))   //converting into an array
    }
    return todos
}
function addTodoStorage(newTodo){
   let todos=getTodosFromStorage()
   todos.push(newTodo)
   localStorage.setItem('todos',JSON.stringify(todos)) ///convers array into a string
}
function showAlert(type,message){
 const alert=document.createElement('div')
 alert.className=`alert alert-${type}`
 alert.textContent=message
 firstCardBody.appendChild(alert)
 setTimeout(function(){
alert.remove()
 },1500)  //it works after 1.5second waiting

}

function addTodoUI(newTodo){
/*
     <!-- <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>-->             
*/
const listItem=document.createElement('li')
const link=document.createElement('a')
link.href='#'
link.className='delete-item'
link.innerHTML='<i class = "fa fa-remove"></i>'
listItem.className='<li class="list-group-item d-flex justify-content-between">'
//adding text Node  : todo1
listItem.appendChild(document.createTextNode(newTodo))
//adding the link
listItem.appendChild(link) 
todoList.appendChild(listItem)
console.log(listItem)
todoInput.value=''   //keep the input box empty after adding the input  
//the above adding are all adding UI  not into storage so they all disappear when u refresh the page
}