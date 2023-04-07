import { useEffect, useState } from "react";
import TodoRepositoryImpl from "../../repositories/todo/TodoRepositoryImpl";
import { Todo } from "../../types/todo/todo.type";

const useGetTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

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

  return {
    todos,
  };
};

export default useGetTodos;
