// write your custom hook here to control your checkout form

import { useState } from "react";

const useForm = (initialValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  const handleChanges = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return [
    //return array

    values,
    showSuccessMessage,
    handleChanges,
    handleSubmit,
  ];
};

export default useForm;
