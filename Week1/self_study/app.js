console.log(11)
console.log(document.all.length)//44
console.log(document.all[document.all.length-1])  //<script src='app.js></script>

const elements=document.all //html collection but its not an array so   u cn iterate by for loop but
// you can not iteare by forEach  bcs its not an array
const elementsArray=Array.from(elements)
 // elementsArray.forEach( el=>console.log(el))
 console.log(elementsArray[43])   //<script src='app.js></script>
const bodyVAlue=document.body
console.log(bodyVAlue)
console.log(document.location.port)  //5500
console.log(document.location.hostname)  //127.0.0.1
console.log(document.URL)  //http://127.0.0.1:5500/Week1/self_study/index.html

//scripts
console.log(document.scripts[3])  //<script src='app.js></script>

//links
console.log(document.links)
console.log(document.links[document.links.length-1])
console.log(document.links[document.links.length-1].getAttribute('class'))  //btn btn-dark
console.log(document.links[document.links.length-1].className) // btn btn-dark
console.log(document.links[document.links.length-1].getAttribute('href'))  // #

//forms
console.log(document.forms.length) //1
console.log(document.forms[0])
console.log(document.forms[0].name)  

///select element by id
let element;
element=document.getElementById('todo-form')
console.log(element)

console.log(document.getElementsByClassName('list-group-item')[0])
divElements=document.getElementsByTagName('div')
console.log(divElements)


//best way to get an element   
//query selector  -css selector   it pick the first element
element=document.querySelector('#todo-form')
element=document.querySelector('#tasks-title')
element=document.querySelector('.list-group-item')//first group item
element=document.querySelector('li')// the first one
element=document.querySelector('div') //the  first div


//queryselectorAll
element=document.querySelectorAll('.list-group-item') //returns a node list of 4 elements
 element.forEach(el=>console.log(el))
 
console.log(element)

