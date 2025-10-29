import type {APITodoItemInfo, TodoItemInfo} from "@/TodoItemInfo.ts";

const BASE_URL = "http://localhost:3000/tasks";

function mapTaskFromAPI(task: APITodoItemInfo): TodoItemInfo {
    return {
        id: Number(task.id),
        name: task.name,
        dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
        description: task.description,
    };
}

function mapTaskToAPI(task: TodoItemInfo): APITodoItemInfo {
    return {
        id: String(task.id),
        name: task.name,
        dueDate: task.dueDate ? task.dueDate.toISOString() : undefined,
        description: task.description,
    };
}

async function getLastId(): Promise<number> {
    const task = await fetch(`${BASE_URL}?_sort=-id&_limit=1`)
        .then((res) => res.json())
        .then<APITodoItemInfo[]>((data) => data ?? []);
    return task.length > 0 ? Number(task[0]!.id) : -1;
}

export async function getAllTodos(): Promise<TodoItemInfo[]> {
    const tasks = await fetch(BASE_URL)
        .then((res) => res.json())
        .then<APITodoItemInfo[]>((data) => data ?? []);
    return tasks.map(mapTaskFromAPI);
}

export async function getTodoById(id: number): Promise<TodoItemInfo | null> {
    const task = await fetch(`${BASE_URL}/${id}`)
        .then<APITodoItemInfo>((res) => res.json());
    return task ? mapTaskFromAPI(task) : null;
}

export async function createTodo(todo: TodoItemInfo): Promise<void> {
    todo.id = await getLastId() + 1;
    await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(mapTaskToAPI(todo))
    });
}
