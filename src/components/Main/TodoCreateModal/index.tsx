import useCreateTodo from "../../../hooks/todo/useCreateTodo";
import useValidation from "../../../hooks/util/useValidation";
import Modal from "../../common/Modal";
import TextInput from "../../common/TextInput";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const TodoCreateModal = ({ isOpen, onClose }: Props) => {
  const { content, onChangeContent, onSubmitTodo } = useCreateTodo();

  const { isValid, validator } = useValidation();

  validator([content !== ""]);

  return (
    <>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <Modal.Title>투두 추가하기</Modal.Title>
          <TextInput.LabelWrap customStyle={{ margin: "50px 0px" }}>
            <TextInput.Label>내용</TextInput.Label>
            <TextInput
              value={content}
              data-testid="new-todo-input"
              autoFocus
              customStyle={{ width: "100%" }}
              placeholder="내용을 입력해주세요"
              onChange={onChangeContent}
            />
          </TextInput.LabelWrap>
          <Modal.Buttons>
            <button className="cancel" onClick={onClose}>
              취소
            </button>
            <button
              data-testid="new-todo-add-button"
              className="submit"
              disabled={!isValid}
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

export default TodoCreateModal;
