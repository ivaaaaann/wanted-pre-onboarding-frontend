import { Suspense, useState } from "react";
import * as S from "./style";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";
import TodoInsertModal from "./TodoInsertModal";
import TodoList from "./TodoList";
import ErrorBoundary from "../common/ErrorBoundary";

const Main = () => {
  const [isTodoInsertModalOpen, setIsTodoInsertModalOpen] = useState(false);

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
      <TodoInsertModal
        isOpen={isTodoInsertModalOpen}
        onClose={() => setIsTodoInsertModalOpen(false)}
      />
    </>
  );
};

export default Main;
