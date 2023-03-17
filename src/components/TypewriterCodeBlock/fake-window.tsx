import React from 'react';
import styled from 'styled-components';

export const FakeWindow = ({className = '', children}) => {
    return <Window className={className}>
        <WindowControls>
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
                <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                    <circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" strokeWidth=".5"></circle>
                    <circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" strokeWidth=".5"></circle>
                    <circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" strokeWidth=".5"></circle>
                </g>
            </svg>
        </WindowControls>
        <WindowContent>
            {children}
        </WindowContent>
    </Window>
}

const Window = styled.div.attrs({className: "rounded drop-shadow-lg"})`
  background-color: #282A36;
`;

const WindowControls = styled.div.attrs({className: "pl-5 py-2"})`
`;

const WindowContent = styled.div.attrs({className: ""})`

`;
