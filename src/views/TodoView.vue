<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import * as todoService from "@/TodoService.ts";
import {ref, watchEffect} from "vue";
import type {TodoItemInfo} from "@/TodoItemInfo.ts";

const items = ref<TodoItemInfo[]>([]);

watchEffect(async () => {
  items.value = await todoService.getAllTodos();
});

async function deleteTodo(id: number) {
  await todoService.deleteTodo(id);
  items.value = items.value.filter((item) => item.id !== id);
}
</script>

<template>
  <div class="title">
    <h1>Tasks</h1>
    <RouterLink class="button" to="/add">Add task</RouterLink>
  </div>
  <ul class="todo-list">
    <li v-for="item in items" :key="item.id">
      <TodoItem v-bind="item" @delete="deleteTodo(item.id)" />
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