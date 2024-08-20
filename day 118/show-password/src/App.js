import React, { useState } from 'react';

function ShowPassword() {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div>
      <input
        type={show ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <input type="checkbox" checked={show} onChange={() => setShow(!show)} />
        Show Password
      </label>
    </div>
  );
}

export default ShowPassword;
