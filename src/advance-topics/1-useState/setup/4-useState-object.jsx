import { useState } from 'react';

// setup
// const UseStateObject = () => {
//   return <h2>useState object example</h2>;
// };

// final
const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  const handleChangeMsg = () => {
    // if we write like this then onClick it will only change the message
    setPerson({ message: 'hey how are you' });

    // using spread operator
    // setPerson({ ...person, message: 'hey how are you' });

    if (person.message == 'random message') {
      setPerson({ ...person, message: 'hey how are you' });
    } else {
      setPerson({ ...person, message: 'random message' });
    }
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button onClick={handleChangeMsg}>change message</button>
    </>
  );
};

export default UseStateObject;
