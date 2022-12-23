import React, {useEffect} from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from "./styles.module.css";

export default function Feedback({}) {
    const { colorMode } = useColorMode();

    // useEffect(() => {
    //     document.getElementById('comments').contentDocument.querySelector("h1#firstHeading").style.color = "red";
    // }, [])
    return (
        <div
            className={"comments-wrapper"}
        >
            <div className={styles.kk}>Our feedback component for page </div>
            <div >

                <button aria-label="Add +1 reaction" type="button" className="gsc-emoji-button no-token" disabled="">
                    <span className="gsc-emoji">👍</span></button>
                <button aria-label="Add -1 reaction" type="button" className="gsc-emoji-button no-token" disabled="">
                    <span className="gsc-emoji">👎</span></button>
                <button aria-label="Add Laugh reaction" type="button" className="gsc-emoji-button no-token" disabled="">
                    <span className="gsc-emoji">😄</span></button>
                <button aria-label="Add Hooray reaction" type="button" className="gsc-emoji-button no-token"
                        disabled=""><span className="gsc-emoji">🎉</span></button>
                <button aria-label="Add Confused reaction" type="button" className="gsc-emoji-button no-token"
                        disabled=""><span className="gsc-emoji">😕</span></button>
                <button aria-label="Add Love reaction" type="button" className="gsc-emoji-button no-token" disabled="">
                    <span className="gsc-emoji">❤️</span></button>
                <button aria-label="Add Rocket reaction" type="button" className="gsc-emoji-button no-token"
                        disabled=""><span className="gsc-emoji">🚀</span></button>
                <button aria-label="Add Eyes reaction" type="button" className="gsc-emoji-button no-token" disabled="">
                    <span className="gsc-emoji">👀</span></button>
            </div>
            <Giscus
                id="comments"
                repo="vocdoni/developer-portal"
                repoId="R_kgDOIWy9aQ"
                category="Announcements"
                categoryId="DIC_kwDOIWy9ac4CTH36"
                mapping="pathname"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                // theme="/styles.css"
                lang="en"
                loading="lazy"

            />
        </div>
    );
}