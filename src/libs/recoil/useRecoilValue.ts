import { useEffect, useState } from "react";
import { Atom } from "./Atom";

const useRecoilValue = <T>(atom: Atom<T>): T => {
  const [, setState] = useState({});

  useEffect(() => {
    const { disconnect } = atom.subscribe(() => setState({}));
    return () => disconnect();
  }, [atom]);

  return atom.snapshot();
};

export default useRecoilValue;
