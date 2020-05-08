import React from 'react';
import { TextField } from '@material-ui/core';
import commonFunctions from '../../services/commonFunctions.service';

const Input = (props) => {
  const commonFuncs = new commonFunctions();

  const handleChangeValue = e => {
    if (props.onChange)
      props.onChange(e.target.value);
  };

  const inputClassName = commonFuncs.getComponentClass("mainInput", props.className);

  return (
    <div className={inputClassName}>
      <TextField {...props} onChange={handleChangeValue} />
    </div>
  );
};

export default Input;

