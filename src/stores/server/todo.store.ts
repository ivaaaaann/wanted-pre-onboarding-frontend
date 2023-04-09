import { atom } from "../../libs/recoil/Atom";
import { Todo } from "../../types/todo/todo.type";

export const todosAtom = atom<Todo[]>({
  default: [],
});
