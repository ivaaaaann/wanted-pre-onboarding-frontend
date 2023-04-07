import { customAxios } from "../../libs/axios/customAxios";
import { Todo } from "../../types/todo/todo.type";
import { postTodoParam, putTodoParam, TodoRepository } from "./TodoRepository";

class TodoRepositoryImpl implements TodoRepository {
  public async getTodos(): Promise<Todo[]> {
    const { data } = await customAxios.get("/todos");
    return data;
  }

  public async postTodo({ todo }: postTodoParam): Promise<Todo> {
    const { data } = await customAxios.post("/todos", { todo });
    return data;
  }

  public async putTodo({ todo, isCompleted, id }: putTodoParam): Promise<Todo> {
    const { data } = await customAxios.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });

    return data;
  }
}

export default new TodoRepositoryImpl();
