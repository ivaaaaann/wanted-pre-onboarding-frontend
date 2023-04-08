import { useEffect } from "react";
import useRecoilState from "../../libs/recoil/useRecoilState";
import TodoRepositoryImpl from "../../repositories/todo/TodoRepositoryImpl";
import { todosAtom } from "../../stores/todo.store";
import { Todo } from "../../types/todo/todo.type";

const useGetTodos = () => {
  const [, setTodos] = useRecoilState<Todo[]>(todosAtom);

  const request = async () => {
    try {
      const data = await TodoRepositoryImpl.getTodos();
      setTodos(data);
    } catch (error) {
      window.alert("");
    }
  };

  useEffect(() => {
    request();
  }, []);
};

export default useGetTodos;
