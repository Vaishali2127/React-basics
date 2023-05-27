import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

// setup
// const ControlledInputs = () => {
//   return <h1>controlled inputs</h1>;
// };

// final
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('form submitted successfully');
    // console.log(firstName, email);

    if (firstName && email) {
      // const person = {firstName:firstName , email:email}
      const person = { id: new Date().getTime().toString(), firstName, email };
      // console.log(person);

      // adding people in an array
      setPeople((people) => {
        console.log(people);
        // console.log(person);
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn" type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>

        {/* rendering add people in the array */}
        {people.map((person, index) => {
          const { firstName, email, id } = person;
          return (
            <>
              <div className="item" key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            </>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
