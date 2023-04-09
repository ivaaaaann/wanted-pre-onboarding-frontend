import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRecoilState from "../../libs/recoil/useRecoilState";
import TodoRepositoryImpl from "../../repositories/todo/TodoRepositoryImpl";
import { todosAtom } from "../../stores/todo.store";

interface Props {
  todoId: number;
}

const useModifyTodo = ({ todoId }: Props) => {
  const navigate = useNavigate();

  const [todos, setTodos] = useRecoilState(todosAtom);
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

  const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setChangeTodo((prev) => ({ ...prev, todo: e.target.value }));
  };

  const onSubmitTodo = async () => {
    const { todo, isCompleted } = changeTodo;

    if (todo === "") {
      return;
    }

    try {
      const data = await TodoRepositoryImpl.putTodo({
        todo,
        isCompleted,
        todoId,
      });

      const copyTodos = todos;
      copyTodos.splice(changeTodoIdx, 1, data);
      setTodos(copyTodos);
      navigate("/todo");
    } catch (error) {}
  };

  return { changeTodo, onChangeContent, onSubmitTodo };
};

export default useModifyTodo;
