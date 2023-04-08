import useChangeTodoCheck from "../../../hooks/todo/useChangeTodoChek";
import { Todo } from "../../../types/todo/todo.type";
import * as S from "./style";
import { HiOutlinePencil } from "@react-icons/all-files/hi/HiOutlinePencil";
import { CgTrashEmpty } from "@react-icons/all-files/cg/CgTrashEmpty";
import useDeleteTodo from "../../../hooks/todo/useDeleteTodo";

interface Props extends Omit<Todo, "userId"> {}

const TodoItem = ({ id, todo, isCompleted }: Props) => {
  const { onToggleCheck } = useChangeTodoCheck({ todoId: id });

  const { onDeleteTodo } = useDeleteTodo({ todoId: id });

  return (
    <S.Container>
      <S.CheckBox
        type="checkbox"
        checked={isCompleted}
        onChange={() => onToggleCheck()}
      />
      <S.Content checked={isCompleted}>{todo}</S.Content>
      <S.ButtonWrap>
        <S.Button>
          <HiOutlinePencil />
        </S.Button>
        <S.Button onClick={onDeleteTodo}>
          <CgTrashEmpty />
        </S.Button>
      </S.ButtonWrap>
    </S.Container>
  );
};

export default TodoItem;
