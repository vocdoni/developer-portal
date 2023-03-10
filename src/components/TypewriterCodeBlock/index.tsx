import React, {useState, useEffect, useRef} from 'react';
import CodeBlock from '@theme/CodeBlock';
import styled from "styled-components";

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
        <CustomCodeBlock
            className={className}
            language={language}
            title={title}

        >
            {code}
        </CustomCodeBlock>
    );
};

const CustomCodeBlock = styled(CodeBlock)`
  & code {
    padding-top: 0.65rem;
  }
`

export default TypewriterCodeBlock;