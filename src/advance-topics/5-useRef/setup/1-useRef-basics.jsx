import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// setup
// const UseRefBasics = () => {
//   return <h2>useRef</h2>;
// };

// final
const UseRefBasics = () => {
  const refContainer = useRef(null);
  const passContainer = useRef(null);

  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // useRef DOES NOT trigger re-render so to prevent this we need to use useRef inside useEffect
    console.log(refContainer.current.value);
    console.log(passContainer.current.value);

    // console.log(divContainer.current);
    // console.log(divContainer.current.innerHTML);
    // console.log(divContainer.current.textContent);
  };

  useEffect(() => {
    console.log(refContainer.current.value);
    console.log(passContainer.current.value);
    refContainer.current.focus();
    passContainer.current.focus();

    console.log(divContainer.current);
  });
  // console.log(refContainer);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input type="text" ref={refContainer} />
          </label>
          <br />
          <label>
            Password
            <input type="password" ref={passContainer} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  );
};

export default UseRefBasics;

// Create a multi-step form in React. This form should be broken down into three steps:

// User Details (Name, Email)
// Address Details (Address line, City, State, ZIP code)
// Confirmation (A summary of all the input data)

// Next and Back button should be there.
// Each step should be a separate component. The user should be able to navigate to the next step only after filling the current step's form. At the final step (confirmation), a summary of all the entered data should be displayed.
// Use local state to manage the data input from the user across the different steps. Also, implement validation at each step to ensure that fields are not left empty and that the email field, in particular, match

// const UserForm = () => {
//   return (
//     <form style={{ width: '60%', margin: 'auto' }}>
//       <div style={{ display: 'flex', flexDirection: 'column' }}>
//         <label htmlFor="name">
//           {/* Name */}
//           <input placeholder="Name" type="text" />
//         </label>
//         <label htmlFor="name">
//           {/* Email */}
//           <input placeholder="Email" type="text" />
//         </label>
//       </div>

//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <button>back</button>
//         <button>next</button>
//       </div>
//     </form>
//   );
// };

// export default UserForm;
