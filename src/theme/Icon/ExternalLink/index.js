import React from 'react';
import styles from './styles.module.css';
export default function IconExternalLink({width = 13.5, height = 13.5}) {
  return (
      <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          aria-hidden="true"
          viewBox="0 0 15 15"
          height={height}
          width={width}
          xmlns="http://www.w3.org/2000/svg"
          className={styles.iconExternalLink}>

          <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
      </svg>
  );
}

