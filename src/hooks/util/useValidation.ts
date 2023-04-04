import { useRef } from "react";

const useValidation = () => {
  const isValid = useRef<boolean>(false);

  const validator = (conditions: boolean[]): void => {
    isValid.current = conditions.every((condition) => condition);
  };

  return { isValid: isValid.current, validator };
};

export default useValidation;
