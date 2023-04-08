import useChangeTodoCheck from "../../../hooks/todo/useChangeTodoChek";
import { Todo } from "../../../types/todo/todo.type";
import * as S from "./style";

interface Props extends Omit<Todo, "userId"> {}

const TodoItem = ({ id, todo, isCompleted }: Props) => {
  const { onToggleCheck } = useChangeTodoCheck({ todoId: id });

  return (
    <S.Container>
      <S.CheckBox
        type="checkbox"
        checked={isCompleted}
        onChange={() => onToggleCheck()}
      />
      <S.Content checked={isCompleted}>{todo}</S.Content>
    </S.Container>
  );
};

export default TodoItem;
