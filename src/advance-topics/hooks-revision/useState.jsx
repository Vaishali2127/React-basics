import React, { useState } from 'react';

const UseStateHookRevision = () => {
  const [state, setState] = useState(0);

  const twoParameters = useState(0, () => {
    setState(() => {
      state + 1;
      //   alert('how are you');
    });
  });

  console.log(
    // useState(null, () => {
    //   setState(() => {
    //     alert('how are you');
    //   });
    // })
    twoParameters
  );

  const handleClick = () => {
    setState(() => {
      return state + 1;
      //   alert('how are you');
    });
  };

  return (
    <div>
      <h1>hi there</h1>
      <p>{state}</p>
      <button onClick={handleClick}>Click here</button>
    </div>
  );
};

export default UseStateHookRevision;
