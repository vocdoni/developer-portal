import NavbarItem from "@theme/NavbarItem";
import React from "react";
import styled from "styled-components";

export function useNavBarCenterLinks<T extends {href?: string}>(
    items: T[],
): [leftItems: T[], rightItems: T[]] {
    function isLink(item: T): boolean {
        return item.href?.length > 0 ?? false
    }

    const leftItems = items.filter((item) => !isLink(item));
    const rightItems = items.filter(isLink);

    return [leftItems, rightItems];
}

export function CenterNavbarItems({items, isMobile}) {
    const [leftItems, rightItems] = useNavBarCenterLinks(items);
    return (
        <>
            {leftItems.map((item, i) => (
                <NavbarItem {...item} key={i} />
            ))}
            {!isMobile && <VerticalLine/>}
            {rightItems.map((item, i) => (
                <NavbarItem {...item} key={i} />
            ))}
        </>
    );
}

const VerticalLine = styled.div`
  width: 1px; 
  height: 80%; 
  background-color: black; 
`
