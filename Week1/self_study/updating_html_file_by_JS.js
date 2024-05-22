console.log(191)
//     <a id = "clear-todos" class="btn btn-dark" href="#">Delete all tasks</a>
//CREATING A NEW ELEMENT IN HTML FILE
const newLink=document.createElement('a')
const cardbody=document.getElementsByClassName('card-body')[1]  //in total we have 2 card body elements
   const a=document.querySelectorAll('.card-body')[1]//yhis and above are both exatly same
newLink.id='clear-todos'
newLink.className='btn-btn-danger'
newLink.href='https://www.youtube.com'
newLink.target='_blank'

newLink.appendChild(document.createTextNode('navigate youtube'))//adding text
cardbody.appendChild(newLink)
console.log(newLink)
console.log(cardbody)

//deleting html ele,ment dynamically
 const todoList=document.querySelector('ul.list-group')
// const todoList=document.querySelector('.list-group') //this line and above line are both same
 console.log(Array.isArray(todoList))//false 
const todos=document.querySelectorAll('li.list-group-item')
console.log(todos[1].className)//
console.log(todos)//nodeList(4)[...]
// ttodos[0].remove()  removes first ttodo
//deleting last child
// ttodoList.removeChild(todoList.lastElementChild)   todolist last element is deleted
 console.log(todoList)


 //exchanging elements  //replacing  --> <h5 class="card-title" id = "tasks-title">Todos</h5>
 //replacing h5 element by h3 element
 const secondCardbody=document.querySelectorAll('.card-body')[1]
const newElement=document.createElement('h3')
newElement.className='card-title'
newElement.id='tasks-title'
newElement.textContent='new todo replaced'
const oldElement=document.querySelector('#tasks-title')
secondCardbody.replaceChild(newElement,oldElement)
 console.log(secondCardbody)


 // changing attribute dynamically     attributes : class, type, name,id, placeholder
//      <input class="form-control" type="text" name="todo" id = "todo" placeholder="Input a Todo">
 const todoInput=document.getElementById('todo')
let element=todoInput
element=todoInput.classList// there is one class   it is :class="form-control"
//we can add more class attributes
 todoInput.classList.add('newClass1')
 todoInput.classList.add('newClass2')
 console.log(todoInput)  //<input class="form-control newClass1 newClass2" type="text" name="todo" id="todo" placeholder="Input a Todo">
todoInput.classList.remove('form-control')
console.log(todoInput)  //<input class="newClass1 newClass2" type="text" name="todo" id="todo" placeholder="Input a Todo">


//we can replace the tect content
const placeholderElement=todoInput.getAttribute('placeholder')
console.log(placeholderElement) //
console.log(111)
console.log(document.URL)
console.log(33443)
const m=5
if(m>1) console.log(99)
 console.log(5111) 