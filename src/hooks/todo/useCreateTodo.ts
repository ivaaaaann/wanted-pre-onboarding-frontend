import React, { useState } from "react";
import TodoRepositoryImpl from "../../repositories/todo/TodoRepositoryImpl";

const useCreateTodo = () => {
  const [content, setContent] = useState("");

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmitTodo = async () => {
    try {
      const data = await TodoRepositoryImpl.postTodo({ todo: content });
      console.log(data);
    } catch (error) {
      window.alert("에러가 발생하였습니다.");
    }
  };

  return { content, onChangeContent, onSubmitTodo };
};

export default useCreateTodo;
