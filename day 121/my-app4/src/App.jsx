import React, { useState } from 'react';

function TextExpander({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <p>{isExpanded ? text : `${text.substring(0, 100)}...`}</p>
      <button onClick={toggleExpand}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default TextExpander;
