import { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

// we can not place react hook in any conditional flow eg : if else or while
// but we can place conditional flow with a hook to return something

// setup
// const UseEffectBasics = () => {
//   return <h2>useEffect Basics</h2>;
// };

// final
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('component rendered');

    if (value >= 1) {
      document.title = `New messages(${value})`;
    }
  }, [value]);
  useEffect(() => {
    console.log('second useeffect');
  }, []);

  const handleChange = () => {
    setValue((prev) => {
      return prev + 1;
    });
  };
  console.log('hi there');
  return (
    <section className="container" style={{ margin: '4rem 0' }}>
      <h2>{value}</h2>
      <button className="btn" onClick={handleChange}>
        click here
      </button>
    </section>
  );
};

export default UseEffectBasics;
