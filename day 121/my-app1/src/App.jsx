import React, { useState } from 'react';

function CharacterLimit() {
  const [text, setText] = useState('');
  const charLimit = 100;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} maxLength={charLimit} />
      <p>{charLimit - text.length} characters remaining</p>
      {charLimit - text.length <= 10 && <p style={{ color: 'red' }}>Approaching character limit!</p>}
    </div>
  );
}

export default CharacterLimit;
