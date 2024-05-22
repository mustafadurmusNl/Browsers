import { createWelcomePage } from "../views/questionPageView"
import { initQuestionPage } from "./questionPage"
export const initWelcomePage=()=>{
    const userInterface=document.querySelector('#user-interface')
userInterface.innerHTML=''
userInterface.innerHTML=createWelcomePage()
document.querySelector('#start-quiz').addEventListener('click',initQuestionPage())
}