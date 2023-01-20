
/**
 * Split navbar items by left/right. at right there are the links
 */
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
