import { useState } from "react";

const CustomHook = ({ counterDefVal }) => {
  const [counter, setCounter] = useState(counterDefVal);

  return { counter, setCounter };
};
export default CustomHook;
