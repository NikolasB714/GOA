import React, { useState } from 'react';

function ColorPicker() {
  const [color, setColor] = useState('#000000');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <input type="color" value={color} onChange={handleChange} />
      <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
    </div>
  );
}

export default ColorPicker;
