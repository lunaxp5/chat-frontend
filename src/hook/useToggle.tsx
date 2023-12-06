import { useState } from "react";

const useToggle = (): [boolean, (value?: boolean) => void] => {
  const [active, setActive] = useState(false);

  const toggle = (value?: boolean) => {
    setActive(value ?? !active);
  };
  return [active, toggle];
};

export default useToggle;
