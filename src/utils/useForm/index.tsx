import {useState} from 'react';

export const useForm = (initialValue: any) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (type: any, params: any) => {
      return setValues({...values, [type]: params});
    },
  ];
};
