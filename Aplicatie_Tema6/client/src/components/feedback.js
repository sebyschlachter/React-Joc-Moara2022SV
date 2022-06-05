import { useState } from "react";

const Feedback = ({ socket, selectedBox, selectedBoxId }) => {
    const [feedback, setFeedback] = useState("");
    const [error, setError] = useState("");
    const [feedbackSent, setFeedbackSent] = useState(false);

    const sendFeedback = () => {
        if (feedback.length) {
            socket.emit("new-feedback", selectedBoxId + ":" + feedback);
            setFeedback("");
            setFeedbackSent(true);
        } else {
            setError("Feedback is required");
        }

    }
    const handleFeedbackInputChange = (e) => {
        setFeedback(e.target.value);
        setError();
    }
    return (
        <>
            {!feedbackSent ?
                <div className="question-form">
                    <h3>Give me a feedback!</h3>
                    <input
                        value={feedback}
                        placeholder="Enter a feedback"
                        type="text"
                        onChange={handleFeedbackInputChange}
                    ></input>
                    <button onClick={sendFeedback} disabled={!selectedBox}>Feedback</button>
                </div> : <div className="question-form">Mulțumim pentru feedback!</div>
            }
            {error ? <p className="error">{error}</p> : null}
        </>
    )
}
export default Feedback;