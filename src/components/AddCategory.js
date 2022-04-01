import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({categories = [], setCategories}) => {

  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {

        //Forma mas eficiente, ya que no hay que mandar los categories como props
        //setCategories ( cats => [...categories, inputValue])

        setCategories([inputValue, ...categories]);
        setinputValue('');
    }

  };

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <p>{inputValue}</p>
        <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} />
      </form>
    </>
  );
};

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}
 