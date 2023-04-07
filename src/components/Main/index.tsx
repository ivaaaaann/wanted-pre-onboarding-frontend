import { useState } from "react";
import * as S from "./style";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";
import TodoInsertModal from "./TodoInsertModal";

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
