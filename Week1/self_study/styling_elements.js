const element1=document.querySelector('#clear-todos')
console.log(element1)
//features od the element
console.log(element1.id)
console.log(element1.classList)// 
console.log(element1.textContent) //Delete all task
console.log(1)
console.log(element1.innerHTML)// 
console.log(element1.style)

//lets update style and update properties of element
element1.className='btn btn-warning'  //can make the color yellow  which notify warning
element1.style.color='red'  //the text is now red color
element1.style.marginLeft='30px'
element1.href='https://www.google.com'
element1.target='_blank'
//i can edit the text content
element1.textContent='delete all bro'

//if u want to add some html
element1.innerHTML="<span style= 'color:green'>delete yoo</span>"

const elementsOfList=document.querySelectorAll('.list-group-item')
elementsOfList.forEach(list=>{
    
    list.style.color='red'
    list.style.background='lightgrey'
})

let firstElement=document.querySelector('li')
console.log(firstElement)
let firstElement1=document.querySelector('li:first-child')
console.log(firstElement1)
//last child
let lastElement=document.querySelector('li:last-child')
console.log(lastElement)
//lets get 2nd list elemenet
let secondElement=document.querySelector('li:nth-child(2)')
console.log(secondElement)
//odd number elements
oddNumberElements=document.querySelectorAll('li:nth-child(odd')
console.log(oddNumberElements)
oddNumberElements.forEach(odd=>{
    odd.style.background='orange'
    odd.style.color='green'
})
