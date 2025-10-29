<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import type {TodoItemInfo} from "@/TodoItemInfo.ts";

const task: TodoItemInfo = {
  id: 1,
  name: "Homework",
  dueDate: new Date()
};
</script>

<template>
  <div class="title">
    <h1>Tasks</h1>
    <button class="button">Add task</button>
  </div>
  <ul class="todo-list">
    <li><TodoItem v-bind="task" /></li>
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
</style>