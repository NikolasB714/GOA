import React, { useState } from 'react';

function ChangeColor() {
  const [color, setColor] = useState('white');

  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

  return (
    <div style={{ backgroundColor: color, height: '100px', width: '100px' }}>
      <button onClick={() => setColor(colors[Math.floor(Math.random() * colors.length)])}>Change Color</button>
    </div>
  );
}

export default ChangeColor;
