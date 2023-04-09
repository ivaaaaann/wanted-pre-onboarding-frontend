import React, { useState } from "react";
import useRecoilState from "../../libs/recoil/useRecoilState";
import TodoRepositoryImpl from "../../repositories/todo/TodoRepositoryImpl";
import { isCreateTodoModalOpenAtom } from "../../stores/client/main.store";
import { todosAtom } from "../../stores/server/todo.store";

const useCreateTodo = () => {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const [, setIsTodoInsertModalOpen] = useRecoilState(
    isCreateTodoModalOpenAtom
  );

  const [content, setContent] = useState("");

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmitTodo = async () => {
    try {
      const data = await TodoRepositoryImpl.postTodo({ todo: content });
      setContent("");
      setTodos([...todos, data]);
      setIsTodoInsertModalOpen(false);
    } catch (error) {
      window.alert("에러가 발생하였습니다.");
    }
  };

  return { content, onChangeContent, onSubmitTodo };
};

export default useCreateTodo;
