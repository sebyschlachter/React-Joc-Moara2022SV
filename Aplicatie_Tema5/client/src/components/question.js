import { useState } from "react";

const Question = ({socket}) =>{
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState("");
    const [answerSent, setAnswerSent] = useState(false);

    const sendAnswer = () =>{
        if(answer.length){
            socket.emit("new-answer", answer );
            setAnswer("");
            setAnswerSent(true);
        }else{
            setError("Answer is required")
        }
        
    }
    const handleAnswerInputChange = (e) =>{
        setAnswer(e.target.value);
        setError();
    }
    return (
        <>
            {!answerSent ?
            <div className="question-form">
                <h3>Are you a developer?</h3>
                <input
                    value={answer}
                    placeholder="Enter your answer"
                    type="text"
                    onChange={handleAnswerInputChange}
                ></input>
                <button onClick={sendAnswer}>Answer</button>
            </div> : <div className="question-form">Mulțumim pentru răspuns!</div>
            }
            {error ? <p className="error">{error}</p> : null }
        </>
    )
}
    export default Question;