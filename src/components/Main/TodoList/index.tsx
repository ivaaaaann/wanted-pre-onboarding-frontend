import useGetTodos from "../../../hooks/todo/useGetTodos";
import useRecoilValue from "../../../libs/recoil/useRecoilValue";
import { todosAtom } from "../../../stores/server/todo.store";
import TodoItem from "../TodoItem";
import * as S from "./style";

const TodoList = () => {
  useGetTodos();
  const todos = useRecoilValue(todosAtom);

  return (
    <S.Container>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </S.Container>
  );
};

export default TodoList;
