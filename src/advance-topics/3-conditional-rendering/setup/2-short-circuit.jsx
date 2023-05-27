import { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1> */}

      {/* if text is not exist then it will return 'hello world' */}
      <h1>{text || 'hello world'}</h1>

      {/* if text is not exist then it will not return anything , to return 2nd text text should be exist */}
      <h1>{text && 'how are you'}</h1>

      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle Error
      </button>
      {isError && <h1>Error toggle text</h1>}

      {/* ternary operator */}
      {isError ? <div>there is an error</div> : <div>there is no error </div>}
    </>
  );
};

export default ShortCircuit;
