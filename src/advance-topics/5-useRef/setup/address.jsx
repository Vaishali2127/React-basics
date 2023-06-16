import React from 'react';

const Address = () => {
  return (
    <form>
      <label htmlFor="name">Address</label>
      <textarea name="Address line"></textarea>

      <label htmlFor="name">
        <input placeholder="City" type="text" />
      </label>
      <label htmlFor="name">
        <input placeholder="State" type="text" />
      </label>
      <label htmlFor="name">
        <input placeholder="Zip Code" type="text" />
      </label>
    </form>
  );
};

export default Address;
