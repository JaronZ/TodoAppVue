<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import type {TodoItemInfo} from "@/TodoItemInfo.ts";

const items: TodoItemInfo[] = [
  {
    id: 1,
    name: "Buy groceries",
    dueDate: new Date('2024-07-01'),
    description: "Milk, Bread, Eggs"
  },
  {
    id: 2,
    name: "Walk the dog",
    dueDate: new Date('2024-07-02')
  }
];
</script>

<template>
  <div class="title">
    <h1>Tasks</h1>
    <RouterLink class="button" to="/add">Add task</RouterLink>
  </div>
  <ul class="todo-list">
    <li v-for="item in items" :key="item.id">
      <TodoItem v-bind="item" />
    </li>
  </ul>
</template>

<style scoped>
.title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-list > li {
  margin-bottom: 10px;
}
</style>