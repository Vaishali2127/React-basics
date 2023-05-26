import { useState } from 'react';

// setup
// const UseStateCounter = () => {
//   return <h2>useState counter example</h2>;
// };

// final
const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const [complexCount, setComplexCount] = useState(0);

  const handleIncrease = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const complexIncrease = () => {
    if (complexCount < 10) {
      setTimeout(() => {
        //  in seTimeout if we do this then the value will only be increase by 1 after 2s,
        //  no matter how many time we'll click the button , it'll take only past value
        // setComplexCount(count + 1);

        // to prevent above situation we need to use the arrow function to get the actually updated value
        setComplexCount((prev) => {
          return prev + 1;
        });
      }, 2000);
    }
  };
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const complexDecrease = () => {
    if (complexCount > 0) {
      setTimeout(() => {
        //  in seTimeout if we do this then the value will only be decrease by 1 after 2s,
        //  no matter how many time we'll click the button , it'll take only past value
        // setComplexCount(count - 1);

        // to prevent above situation we need to use the arrow function to get the actually updated value
        setComplexCount((prev) => {
          return prev - 1;
        });
      }, 2000);
    }
  };

  const resetBtn = () => {
    setCount(0);
    setComplexCount(0);
  };

  return (
    <>
      <section className="container" style={{ margin: '4rem 0' }}>
        <h2>React Simple Counter</h2>
        <h1>{count}</h1>
        <button className="btn" onClick={handleDecrease}>
          -
        </button>
        <button className="btn" onClick={resetBtn}>
          Reset
        </button>
        <button className="btn" onClick={handleIncrease}>
          +
        </button>
      </section>
      {/* complex counter */}
      <section className="container" style={{ margin: '4rem 0' }}>
        <h2>React Complex Counter</h2>
        <h1>{complexCount}</h1>
        <button className="btn" onClick={complexDecrease}>
          -
        </button>
        <button className="btn" onClick={resetBtn}>
          Reset
        </button>
        <button className="btn" onClick={complexIncrease}>
          +
        </button>
      </section>
    </>
  );
};
export default UseStateCounter;
