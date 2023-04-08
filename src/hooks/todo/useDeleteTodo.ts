import useRecoilState from "../../libs/recoil/useRecoilState";
import TodoRepositoryImpl from "../../repositories/todo/TodoRepositoryImpl";
import { todosAtom } from "../../stores/todo.store";

interface Props {
  todoId: number;
}

const useDeleteTodo = ({ todoId }: Props) => {
  const [todos, setTodos] = useRecoilState(todosAtom);

  const onDeleteTodo = async () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }

    await TodoRepositoryImpl.deleteTodo({ todoId });

    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return {
    onDeleteTodo,
  };
};

export default useDeleteTodo;
