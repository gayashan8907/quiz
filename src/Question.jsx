import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"
export default function Question({questionText,answers,onSelect,selectedAnswer,answerState,onSkipAnswer}){
    return(
       
            <div id="question">
    <QuestionTimer  timeOut={10000} onTimeOut={onSkipAnswer}/>
    <h2>{questionText}</h2>
    <Answers  answers={answers} selectedAnswer={selectedAnswer} answerState={answerState} onSelect={onSelect}/>
    </div>
        
    )
}