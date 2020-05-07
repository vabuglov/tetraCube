import React from 'react';
import { TextField } from '@material-ui/core';

const Input = (props) => {
  const handleChangeValue = e => {
    if (props.onChange)
      props.onChange(e.target.value);
  };

  return (
    <TextField {...props} onChange={handleChangeValue} />
  );
};

export default Input;

