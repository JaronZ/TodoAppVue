import type {APITodoItemInfo, TodoItemInfo} from "@/TodoItemInfo.ts";

const BASE_URL = "http://localhost:3000/tasks";

function mapTask(task: APITodoItemInfo): TodoItemInfo {
    return {
        id: task.id,
        name: task.name,
        dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
        description: task.description,
    };
}

export async function getAllTodos(): Promise<TodoItemInfo[]> {
    const tasks = await fetch(BASE_URL)
        .then((res) => res.json())
        .then<APITodoItemInfo[]>((data) => data ?? []);
    return tasks.map(mapTask);
}

export async function getTodoById(id: number): Promise<TodoItemInfo | null> {
    const task = await fetch(`${BASE_URL}/${id}`)
        .then<APITodoItemInfo>((res) => res.json());
    return task ? mapTask(task) : null;
}

export function createTodo(todo: TodoItemInfo): void {
    console.log(todo);
}
