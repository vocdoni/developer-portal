import Link from "@docusaurus/Link";
import clsx from "clsx";
import {useDocById} from "@docusaurus/theme-common/internal";
import styles from "./styles.module.css";
import React from "react";
import ReactMarkdown from 'react-markdown';

function CardContainer({href, children}) {
    return (
        <Link
            href={href}
            className={clsx('card padding--md', styles.cardContainer)}>
            {children}
        </Link>
    );
}

export const ApiDocCard = ({item}) =>{
    const { description } = useDocById(item.docId ?? undefined);
    return(
        <CardContainer href={item.href}>
            <div className={`${item.className}`} style={{minHeight: "90px"}}>
                <div
                    className={'menu__link'}
                    style={{paddingLeft: 0, backgroundColor: "transparent"}}
                >{item.label}</div>
                {description && (
                        <ReactMarkdown
                            className={clsx('text--truncate', styles.cardDescription)}
                            components={{
                                p: ({node, ...props}) => <p className={'text--truncate'} {...props} />
                            }}
                        >
                            {description}</ReactMarkdown>
                )}
            </div>
        </CardContainer>)

}
