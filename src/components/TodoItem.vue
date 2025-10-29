<script setup lang="ts">
import type {TodoItemInfo} from "@/TodoItemInfo.ts";

defineProps<TodoItemInfo>();
</script>

<template>
  <div class="todo-item">
    <p>{{name}}</p>
    <p>{{ dueDate?.toDateString() ?? "" }}</p>
    <div class="todo-buttons">
      <button class="button">Edit</button>
      <button class="button">Delete</button>
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 30px;
}

.todo-buttons {
  display: flex;
  gap: 10px;
}
</style>