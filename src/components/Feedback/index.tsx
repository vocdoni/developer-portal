import React from 'react';
import "@ramseyinhouse/feedback-component/dist/index.umd.js"
import styles from "./styles.module.css"

export default function Feedback({ id } : { id: string }) {
    return (
        <div className="feedback">
            {/*@ts-ignore*/}
            <feedback-component>
                <span slot="cta">Was this helpful?</span>
                <span slot="confirmation">Thanks for your feedback! </span>
                {/*Thumbs up*/}
                <span slot="option-icon:0" className={"plausible-event-name=feedback-component-vote-up plausible-event-page="+id}>
                    <i className="far fa-thumbs-up fa-2x"></i>
                </span>
                {/*Thumbs down*/}
                <span slot="option-icon:1" className={"plausible-event-name=feedback-component-vote-down plausible-event-page="+id}>
                    <i className="far fa-thumbs-down fa-2x"></i>
                </span>
                {/*@ts-ignore*/}
            </feedback-component>
        </div>
    );
}