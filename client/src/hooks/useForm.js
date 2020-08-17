// write your custom hook here to control your checkout form

import { useState } from 'react';

const useForm = (callback) => {
   
    const [showSuccessMessage, setShowSuccessMessage]= useState(false);
  const [values, setValues] = useState(initialValue);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setShowSuccessMessage(true);
      callback();
  };

  const handleChanges = (event) => {
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChanges,
    handleSubmit,
    values,
    
  }
};

export default useForm;
