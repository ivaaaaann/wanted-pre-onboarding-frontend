import { useCallback } from "react";
import { Atom } from "./Atom";
import useRecoilValue from "./useRecoilValue";

const useRecoilState = <T>(atom: Atom<T>): [T, (value: T) => void] => {
  const value = useRecoilValue(atom);

  return [value, useCallback((value: T) => atom.update(value), [atom])];
};

export default useRecoilState;
