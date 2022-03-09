import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export function Code({ className, ...props }: { className: string } & { [key: string]: unknown }) {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : 'javascript';
  return (
    <SyntaxHighlighter language={language} style={docco} {...props} customStyle={{ borderLeft: '5px solid #a5d6a7', paddingTop: '5px', paddingLeft: '16px', paddingRight: '16px' }}/>
  );
}