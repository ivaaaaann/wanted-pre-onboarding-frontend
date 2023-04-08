export interface Todo {
  readonly id: number;
  todo: string;
  isCompleted: boolean;
  readonly userId: number;
}
