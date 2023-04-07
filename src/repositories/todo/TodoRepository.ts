import { Todo } from "../../types/todo/todo.type";

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;

  postTodo({ todo }: postTodoParam): Promise<Todo>;
}

export interface postTodoParam {
  todo: string;
}
