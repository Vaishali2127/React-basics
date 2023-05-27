import { useState, useEffect } from 'react';

// setup
const url = 'https://api.github.com/users/QuincyLarson';
// const MultipleReturns = () => {
//   return <h2>multiple returns</h2>;
// };

// final
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('Default User');

  useEffect(() => {
    // setIsLoading(true);
    fetch(url)
      .then((resp) =>
        //  resp.json()
        {
          if (resp.status >= 200 && resp.status <= 299) {
            return resp.json();
          } else {
            setIsLoading(false);
            setIsError(true);
          }
        }
      )
      .then((user) => {
        // console.log(user);
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading.. .</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
