let currentQuestionIndex=0
import { initWelcomePage } from "./pages/welcomePage"
import { questions } from "./questions"     //!!!!!!!!!!!!
import { createQuestionPAge } from "./views/questionPageView"
import { createWelcomePage } from "./views/welcomePageView"

const loadApp=()=>{
initWelcomePage()
}
window.addEventListener('load',loadApp)
const showQuestions=()=>{


}