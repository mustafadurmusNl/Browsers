console.log(11)
const todoList=document.querySelector('.list-group')
console.log(todoList.parentNode)//parent
todoList.parentNode.style.background='lightgrey'
console.log(todoList.children[1])
todoList.children[1].style.background='yellow'
console.log(todoList.firstElementChild)
todoList.firstElementChild.textContent='hello1'
todoList.lastElementChild.textContent='hello 4'
todoList.lastElementChild.style.color='red'


//next sibling
console.log(todoList.nextSibling)

//create
//create a div
const newDiv=document.createElement('div')
newDiv.className='hello-new-class'
newDiv.id='new-id'
console.log(newDiv)
console.log(6779)
newDiv.setAttribute('title','hello div')
//create new rext node
const newText=document.createTextNode('hello new text')
newDiv.appendChild(newText)
console.log(newDiv)
