import { useEffect, useState } from "react";

const useValidation = (conditions: boolean[]) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(conditions.every((condition) => condition));
  }, [conditions]);

  return { isValid };
};

export default useValidation;
