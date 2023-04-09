import { useParams } from "react-router-dom";
import useModifyTodo from "../../../hooks/todo/useModifyTodo";
import Modal from "../../common/Modal";
import TextInput from "../../common/TextInput";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TodoModifyModal = ({ isOpen, onClose }: Props) => {
  const { todoid } = useParams();

  const { changeTodo, onChangeContent, onSubmitTodo } = useModifyTodo({
    todoId: Number(todoid),
  });

  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <Modal.Title>투두 추가하기</Modal.Title>
          <TextInput.LabelWrap customStyle={{ margin: "50px 0px" }}>
            <TextInput.Label>내용</TextInput.Label>
            <TextInput
              value={changeTodo.todo}
              data-testid="modify-input"
              autoFocus
              customStyle={{ width: "100%" }}
              placeholder="내용을 입력해주세요"
              onChange={onChangeContent}
            />
          </TextInput.LabelWrap>
          <Modal.Buttons>
            <button
              data-testid="cancel-button"
              className="cancel"
              onClick={onClose}
            >
              취소
            </button>
            <button
              data-testid="submit-button"
              className="submit"
              onClick={onSubmitTodo}
            >
              추가
            </button>
          </Modal.Buttons>
        </Modal>
      )}
    </>
  );
};

export default TodoModifyModal;
