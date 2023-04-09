import { useEffect, useState } from "react";
import useRecoilState from "../../libs/recoil/useRecoilState";
import TodoRepositoryImpl from "../../repositories/todo/TodoRepositoryImpl";
import { todosAtom } from "../../stores/server/todo.store";
import { Todo } from "../../types/todo/todo.type";

interface Props {
  todoId: number;
}

const useChangeTodoCheck = ({ todoId }: Props) => {
  const [todos, setTodos] = useRecoilState<Todo[]>(todosAtom);
  const [changeTodoIdx, setChangeTodoIdx] = useState(-1);
  const [changeTodo, setChangeTodo] = useState({
    todo: "",
    isCompleted: false,
  });

  useEffect(() => {
    const seletedTodo = todos.find((todo) => todo.id === todoId);
    const seletedTodoIdx = todos.findIndex((todo) => todo.id === todoId);

    if (seletedTodo && seletedTodoIdx !== -1) {
      setChangeTodo({ ...seletedTodo });
      setChangeTodoIdx(seletedTodoIdx);
    }
  }, [todoId, todos]);

  const onToggleCheck = async () => {
    const { todo, isCompleted } = changeTodo;

    if (changeTodoIdx === -1) {
      return;
    }

    try {
      const data = await TodoRepositoryImpl.putTodo({
        todoId,
        todo,
        isCompleted: !isCompleted,
      });
      setChangeTodo((prev) => ({ ...prev, isCompleted: data.isCompleted }));

      const copyTodos = todos;
      copyTodos.splice(changeTodoIdx, 1, data);
      setTodos(copyTodos);
    } catch (error) {}
  };

  return { onToggleCheck };
};

export default useChangeTodoCheck;
