import { useRef } from "react";
export default function Answers({answers,selectedAnswer,answerState,onSelect}){
    const shuffleAnswers = useRef();
    if(!shuffleAnswers.current){
        shuffleAnswers.current = [...answers]
        shuffleAnswers.current.sort(()=>Math.random()-0.5)

    }

    return (
        <ul id="answers">
        {shuffleAnswers.current.map((answer)=>{
            const isSlelected = selectedAnswer===answer;
            let cssClasses = '';
            if(answerState==='answered' && isSlelected){
                cssClasses = 'selected'
            }

            if((answerState==='correct' || answerState==='wrong') && isSlelected){
                cssClasses= answerState
            }
            return (<li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClasses}>{answer}</button>
        </li>)} )}
    </ul>
    )
}