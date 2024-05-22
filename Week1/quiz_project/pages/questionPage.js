export const initQuestionPage=()=>{
    const userInterface=document.querySelector('#user-interface')
    const currentQuestion=questions[currentQuestionIndex]
    userInterface.innerHTML=createQuestionPAge(currentQuestion.text)
    const asnwerListElement=document.querySelector('#answer-list')
    for(const [key,answerText] of Object.entries(currentQuestion.answers)){
      const asnwerElement=document.createElement('li')
      asnwerElement.textContent=answerText
      asnwerListElement.appendChild(asnwerElement)
    }
  document.querySelector('#next-question').addEventListener('click',()=>{
  currentQuestionIndex++
  showQuestions()
  })
}