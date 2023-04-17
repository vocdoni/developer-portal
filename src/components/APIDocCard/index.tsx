import React from 'react';
import clsx from 'clsx';
import {
    useCurrentSidebarCategory,
    filterDocCardListItems,
} from '@docusaurus/theme-common';
import DocCardList from "../../theme/DocCardList";
// @ts-ignore
import {useDocById} from "@docusaurus/theme-common/internal";
import styles from "../../theme/DocCard/styles.module.css";
import Link from "@docusaurus/Link";

function CardContainer({href, children}) {
    return (
        <Link
            href={href}
            className={clsx('card padding--md', styles.cardContainer)}>
            {children}
        </Link>
    );
}

const DocCard = ({item}: {item: any}) =>{
    const { description } = useDocById(item.docId ?? undefined);
    return(
        <CardContainer href={item.href}>
            <div className={`${item.className}`}>
                <a
                    className={'menu__link'}
                    style={{paddingLeft: 0}}
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


function DocCardListForCurrentSidebarCategory({className}) {
    const category = useCurrentSidebarCategory();
    return <DocCardList items={category.items} className={className} />;
}
export default function APIDocCard(props) {
    const {items, className} = props;
    if (!items) {
        return <DocCardListForCurrentSidebarCategory {...props} />;
    }
    const filteredItems = filterDocCardListItems(items);
    return (
        <section className={clsx('row', className)}>
            {filteredItems.map((item, index) => (
                <article key={index} className="col col--6 margin-bottom--lg">
                    <ul className={'api_tag_page'}>
                        <DocCard item={item} />
                    </ul>
                </article>
            ))}
        </section>
    );
}
