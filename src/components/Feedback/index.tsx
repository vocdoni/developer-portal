import React, {useState} from 'react';

const FeedbackComponent = ({ id } : { id: string }) => {
    const [haveVoted, setHaveVoted] = useState(false);
    const vote = () => setHaveVoted(true)

    return (
        <div className="feedback-wrapper">
            {haveVoted ? (
                <div className="confirmation-content">
                  <span className="confirmation-message">
                    <span>Thanks for your feedback! </span>
                  </span>
                </div>
            ) : (
                <div className="cta-content" >
                  <span className="cta-text">
                    <span>Was this helpful?</span>
                  </span>
                    <ul className="feedback-options">
                        <li>
                        {/*Thumbs up*/}
                            <button
                                  onClick={vote}
                                  className={ "feedback-button " +
                                "plausible-event-name=feedback-component-vote-up plausible-event-page="+id}
                            >
                                <i className="far fa-thumbs-up fa-lg"></i>
                            </button>
                        </li>
                        {/*Thumbs down*/}
                        <li>
                            <button
                                  onClick={vote}
                                  className={ "feedback-button " +
                                      "plausible-event-name=feedback-component-vote-down plausible-event-page="+id}
                            >
                                <i className="far fa-thumbs-down fa-lg"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}


export default function Feedback({ id } : { id: string }) {
    return (
        <FeedbackComponent id={id} />
    );
}