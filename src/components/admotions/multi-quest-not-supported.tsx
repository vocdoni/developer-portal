import React from 'react';
import Link from "@docusaurus/Link";
import Admonition from '@theme/Admonition';

const MultiQuesNotSupportedAdmotion = () => {
  return <>
      <Admonition type="danger"  title="Multiple questions not supported">
          <p>
              <strong>This election type not support multiple questions</strong>: the current Vocdoni implementation restricts this
              kind of elections to a single question. To create an election with multiple questions check <Link>multi
              question election </Link>
          </p>
      </Admonition>
  </>
}

export default MultiQuesNotSupportedAdmotion

