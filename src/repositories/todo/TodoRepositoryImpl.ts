import { customAxios } from "../../libs/axios/customAxios";
import { Todo } from "../../types/todo/todo.type";
import {
  deleteTodoParam,
  postTodoParam,
  putTodoParam,
  TodoRepository,
} from "./TodoRepository";

class TodoRepositoryImpl implements TodoRepository {
  public async getTodos(): Promise<Todo[]> {
    const { data } = await customAxios.get("/todos");
    return data;
  }

  public async postTodo({ todo }: postTodoParam): Promise<Todo> {
    const { data } = await customAxios.post("/todos", { todo });
    return data;
  }

  public async putTodo({
    todo,
    isCompleted,
    todoId,
  }: putTodoParam): Promise<Todo> {
    const { data } = await customAxios.put(`/todos/${todoId}`, {
      todo,
      isCompleted,
    });

    return data;
  }

  public async deleteTodo({ todoId }: deleteTodoParam): Promise<void> {
    const { data } = await customAxios.delete(`/todos/${todoId}`);
    return data;
  }
}

export default new TodoRepositoryImpl();
