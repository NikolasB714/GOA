import React, { useState } from 'react';

function ShowHide() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Show/Hide</button>
      {visible && <p>This is a paragraph of text.</p>}
    </div>
  );
}

export default ShowHide;
