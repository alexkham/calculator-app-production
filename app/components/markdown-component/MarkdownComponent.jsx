import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';  // Ensure styles are applied

const MarkdownComponent = ({ article }) => {
  return (
    <div className='outer-container' >
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      className='markdown'
    >
      {article}
    </ReactMarkdown>
    </div>
  );
};

export default MarkdownComponent;
