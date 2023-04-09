import { Todo } from "../../types/todo/todo.type";

export interface TodoRepository {
  getTodos(): Promise<Todo[]>;

  postTodo({ todo }: postTodoParam): Promise<Todo>;

  putTodo({ todo, isCompleted, todoId }: putTodoParam): Promise<Todo>;

  deleteTodo({ todoId }: deleteTodoParam): Promise<void>;
}

export interface postTodoParam {
  todo: string;
}

export interface putTodoParam {
  isCompleted: boolean;
  todo: string;
  todoId: number;
}

export interface deleteTodoParam {
  todoId: number;
}
