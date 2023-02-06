import {useState} from 'react';

export const useForm = (initialValue: any) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (type: any, params: any) => {
      if (type === 'reset') {
        return setValues(initialValue);
      }
      return setValues({...values, [type]: params});
    },
  ];
};
