import React from "react";
import styled from "styled-components";

import { RiDiscordFill, RiTwitterFill, RiLinkedinBoxFill } from "react-icons/ri";

const currentYear = new Date().getFullYear()

export const FooterOfFooter = () => {
    return (
        <FFWrapper>
            <div>
                Copyright © {currentYear} Vocdoni, Inc. All rights reserved.
            </div>
            <div>
                Terms of Use & Privacy Polity
            </div>
            <IconsWrapper>
                <RiDiscordFill size={"1.75em"} />
                <RiTwitterFill size={"1.75em"} />
                <RiLinkedinBoxFill size={"1.75em"} />
            </IconsWrapper>
        </FFWrapper>
    )
}

const FFWrapper = styled.div.attrs({
    className:
        'pt-5 pb-3 px-3 text-xs text-monospace items-center content-center flex sm:flex-row justify-between flex-col'
})`
`

const IconsWrapper = styled.div.attrs({
    className:
        'flex gap-3 flex-row'
})`
`