import { useState } from "react";

export const UseForm = (initial) => {
  const [value, setValue] = useState(initial);

  return [
    value,
    (event) => {
      setValue({
        ...value,
        [event.target.name]: event.target.value,
      });
    },
  ];
};
