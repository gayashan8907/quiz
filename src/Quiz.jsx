import Question from "./Question.jsx";
import { useState,useCallback} from "react"
import QUESTIONS from './question'
import completeImg from './assets/quiz-complete.png'

export default function Quiz(){
    
    const[userAnswers,setUserAnswers]= useState([]);
    const [answerState,setAnswerState] = useState('')
    const [rightAnswer,setRightAnswer] = useState(0)
    const activeIndex = answerState === '' ? userAnswers.length:userAnswers.length-1
    
    const quizComplete = activeIndex===QUESTIONS.length

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setAnswerState('answered')
        setUserAnswers(prevAnswers =>{
            return [...prevAnswers, selectedAnswer ]
        })
        setTimeout(()=>{
            if(selectedAnswer===QUESTIONS[activeIndex].answers[0]){
                setAnswerState('correct')
                setRightAnswer(rightAnswer+1)
            }else{
                setAnswerState('wrong')
            }
            setTimeout(()=>{
                setAnswerState('');
            },2000)
        },1000)
    },[activeIndex] )


    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null),[])

    if(quizComplete){
        return <div id="summary">
            <img src={completeImg }/>
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
            <p >
                <span className="number">{rightAnswer}/20</span>
                <span className="text"> Answered Correctly </span>
            </p>
            </div>
        </div>
    }
    
    
    return <div id="quiz"> 
     <Question key={activeIndex} questionText={QUESTIONS[activeIndex].text} 
     answers={QUESTIONS[activeIndex].answers} 
     onSelect={handleSelectAnswer}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length-1]}
        onSkipAnswer={handleSkipAnswer}
     />
    </div>
}