import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';

const TypewriterCodeBlock = (
    { language = '', title = '', timeout = 50, className = '', children }
) => {
    const [code, setCode] = useState('');

    useEffect(() => {
        if (timeout > 0) {
            let index = 0;
            const type = () => {
                if (index < children.length) {
                    setCode(code => code + children.charAt(index));
                    index++;
                    setTimeout(type, timeout);
                }
            };
            type();
        } else {
            setCode(children );
        }
    }, []);

    return (
        <CodeBlock
            className={className}
            language={language}
            title={title}
        >
            {code}
        </CodeBlock>
    );
};

export default TypewriterCodeBlock;