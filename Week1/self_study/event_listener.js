console.log(99)
const filterInput=document.getElementById('filter')
const todoForm=document.getElementById('todo-form')
console.log(todoForm)

console.log(filterInput)

console.log(23)
filterInput.addEventListener('focus',(e)=>{    //e   stands for event object
    console.log('heyyyyy')
    console.log(e)  //event object
    console.log(e.type) //focus
    console.log(e.target)  //<input class="form-control" type="text" name="filter" id="filter" placeholder="Search a ToDo">lder)  //Search ToDo
    console.log(e.target.className)

})
console.log(23)

const submitForm=(e)=>{   //arrow function must be defined after before i call it like java
    console.log('hoi')
   e.preventDefault()   
    }
 //if u define the function as arrow function then  it must be defined before u call it
todoForm.addEventListener('submit',submitForm) 

//****************** 

 //keyboard events

  //keypress:  only numbers and letters 
//  const run=(e)=>{
//     console.log('keypress event in action')
//     console.log(e.which) //gives ascii value of the key u press
//     console.log(e.key) //gives the key you press
// }
// document.addEventListener('keypress',run)

 //  ***
 //keydown   it is activated as soon as u press any key included non numeric and non alphabetic keys
//   const keydownFuntion=(e)=>{
//     console.log(e.key)
//   }
// document.addEventListener('keydown',keydownFuntion)
 //   ***

//keyup   it is activated right after u left the keyboard and  included non numeric non alphabetic keys
// const keyupFuntion=(e)=>{
//     console.log(e.key)
//   }
// document.addEventListener('keyup',keyupFuntion)

const header=document.querySelector('.card-header')
const todoInput=document.querySelector('#todo')
function changeText(e){
    console.log(e.target.value)
}
todoInput.addEventListener('keyup',changeText)


//  mouse event
   const cardBody=document.querySelector('.card-body')
   const title=document.querySelector('#tasks-title')
   title.addEventListener('click',run)

   function run(e){
    console.log(e.type)  //click
   }
   //double click
   function doublerun(e){
    console.log(e.type)  //dblclick 
   }
   title.addEventListener('dblclick',doublerun)

   // mouse down event
 //mouseup event
 //mouseover event


 //  ****
   //  input EventS
   const filter=document.querySelector('#filter')
   console.log(filter)
   document.addEventListener('DOMContentLoaded',load)
   function load(e){
  console.log('page is being loaded')
   }
   filter.addEventListener('focus',run1)
   function run1(e){
    console.log(e.type)//focus
   }
   //blur
   filter.addEventListener('blur',run1)

   //paste event
   filter.addEventListener('paste',run1)

   //copy event
   filter.addEventListener('copy',run1)

   //event bubling
   const containerElement=document.querySelector('.container')
   containerElement.addEventListener('click',(e)=>console.log('div container is bubling'))
   const firstCardBody=document.querySelectorAll('.card-body')[1]
   firstCardBody.addEventListener('click',(e)=>console.log('card-body is bubling'))
   console.log(firstCardBody)

   // event capturing or delegation
   const run2=(e)=>{
    console.log(e.type)
    console.log('deleted')
    console.log(e.target)
    if(e.target.className==='fa fa-remove'){
        console.log('its been deleted')
    }
   }
   containerElement/addEventListener('click',run2)
