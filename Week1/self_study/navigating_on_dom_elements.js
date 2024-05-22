let value;
 const todoList=document.querySelector('.list-group')
 const secondTodo=document.querySelector('.list-group-item:nth-child(2')
 const cardrow=document.querySelector('.card.row')   //we have 2 classess thats why we have 2 points in the selector

value=todoList
value=secondTodo
value=cardrow

//childNodes returns everything includoing text
//children returns only the elements
value=todoList.children   //its 4 elements
value=todoList.children[0]  //first todo
const firstChild=todoList.firstElementChild
const lastChild=todoList.lastElementChild
todoList.children[1].textContent='i m updating todo'

//children of cardrow
//we will get the 2nd index child of cardrow and then first index child 
value=cardrow.children[2].children[1] //   <h5 class="card-title" id = "tasks-title">Todos</h5>
      cardrow.children[2].children[1].textContent=' Im updating grandchild of cardrow'

  const numOfElementOfTodoList=todoList.children.length//4
  const countElementOfTodoList=todoList.childElementCount;//4

  //now lets navigate to parent element
  //parent of cardrow
  value=cardrow
  value=cardrow.parentElement  // <div class="container" style ="margin-top:20px;">
  value=cardrow.parentElement.parentElement  //<body>...</body>

//now lets nagivate to sister elements from one element to another element
value=secondTodo   //2nd todo element
value=secondTodo.previousElementSibling  //first todo
value=secondTodo.nextElementSibling    //third todo

console.log(111)
console.log(value)
