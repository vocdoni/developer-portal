import React, {useState, useEffect, useRef} from 'react';
import CodeBlock from '@theme/CodeBlock';

const TypewriterCodeBlock = (
    { language = '', title = '', timeout = 50, className = '', children }
) => {
    const [code, setCode] = useState('');
    const childrenRef = useRef(children);

    useEffect(() => {
        if (timeout > 0) {
            let index = 0;
            const type = () => {
                if(index === 0) {
                    setCode(children.charAt(index));
                    index++;
                    setTimeout(type, timeout);
                }
                else if (index < children.length) {
                    // Check if children has changed before updating code
                    if (childrenRef.current === children) {
                        setCode(code => code + children.charAt(index));
                        index++;
                        setTimeout(type, timeout);
                    }
                }
            };
            type();
        } else {
            setCode(children );
        }
        // Update the childrenRef whenever children changes
        childrenRef.current = children;
    }, [children]);

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