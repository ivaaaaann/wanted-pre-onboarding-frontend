import { Todo } from "../../../types/todo/todo.type";
import * as S from "./style";

interface Props extends Omit<Todo, "userId"> {}

const TodoItem = ({ id, todo, isCompleted }: Props) => {
  return (
    <S.Container>
      <S.CheckBox type="checkbox" checked={isCompleted} />
      <S.Content checked={isCompleted}>{todo}</S.Content>
    </S.Container>
  );
};

export default TodoItem;
