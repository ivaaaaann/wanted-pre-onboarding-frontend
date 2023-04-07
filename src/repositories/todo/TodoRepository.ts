import { Todo } from "../../types/todo/todo.type";

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;

  postTodo({ todo }: postTodoParam): Promise<Todo>;

  putTodo({ todo, isCompleted, id }: putTodoParam): Promise<Todo>;
}

export interface postTodoParam {
  todo: string;
}

export interface putTodoParam {
  isCompleted: boolean;
  todo: string;
  id: number;
}
