import Link from "@docusaurus/Link";
import clsx from "clsx";
// @ts-ignore
import {useDocById} from "@docusaurus/theme-common/internal";
import styles from "./styles.module.css";
import React from "react";


function CardContainer({href, children}) {
    return (
        <Link
            href={href}
            className={clsx('card padding--md', styles.cardContainer)}>
            {children}
        </Link>
    );
}

export const ApiDocCard = ({item}: {item: any}) =>{
    const { description } = useDocById(item.docId ?? undefined);
    return(
        <CardContainer href={item.href}>
            <div className={`${item.className}`}>
                <a
                    className={'menu__link'}
                    style={{paddingLeft: 0, backgroundColor: "transparent"}}
                >{item.label}</a>
                {description && (
                    <p
                        className={clsx('text--truncate', styles.cardDescription)}
                        title={description}>
                        {description}
                    </p>
                )}
            </div>
        </CardContainer>)

}
