import { Suspense } from "react";
import * as S from "./style";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";
import TodoList from "./TodoList";
import ErrorBoundary from "../common/ErrorBoundary";
import TodoCreateModal from "./TodoCreateModal";
import { useNavigate, useParams } from "react-router-dom";
import TodoModifyModal from "./TodoModifyModal";
import useRecoilState from "../../libs/recoil/useRecoilState";
import { isCreateTodoModalOpenAtom } from "../../stores/client/main.store";

const Main = () => {
  const [isTodoInsertModalOpen, setIsTodoInsertModalOpen] = useRecoilState(
    isCreateTodoModalOpenAtom
  );

  const navigate = useNavigate();
  const { todoid } = useParams();

  return (
    <>
      <S.Container>
        <S.Wrap>
          <S.TopWrap>
            <S.Date>Wednesday, 22 Nov</S.Date>
            <S.AddButton onClick={() => setIsTodoInsertModalOpen(true)}>
              <BsPlus />
            </S.AddButton>
          </S.TopWrap>
          <ErrorBoundary fallback={<>에러 발생 </>}>
            <Suspense fallback={<>로딩중...</>}>
              <TodoList />
            </Suspense>
          </ErrorBoundary>
        </S.Wrap>
      </S.Container>
      <TodoCreateModal
        isOpen={isTodoInsertModalOpen}
        onClose={() => setIsTodoInsertModalOpen(false)}
      />
      <TodoModifyModal isOpen={!!todoid} onClose={() => navigate("/todo")} />
    </>
  );
};

export default Main;
