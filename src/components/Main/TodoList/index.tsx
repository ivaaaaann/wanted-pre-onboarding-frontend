import useGetTodos from "../../../hooks/todo/useGetTodos";
import TodoItem from "../TodoItem";
import * as S from "./style";

const TodoList = () => {
  const { todos } = useGetTodos();

  return (
    <S.Container>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </S.Container>
  );
};

export default TodoList;
