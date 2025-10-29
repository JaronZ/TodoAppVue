<script setup lang="ts">
import type {TodoItemInfo} from "@/TodoItemInfo.ts";

const emit = defineEmits(["delete"]);
defineProps<TodoItemInfo>();

function deleteItem() {
  emit("delete");
}
</script>

<template>
  <div class="todo-item">
    <p>{{name}}</p>
    <p>{{ dueDate?.toDateString() ?? "" }}</p>
    <div class="todo-buttons">
      <RouterLink class="button" :to="`/details/${id}`">View</RouterLink>
      <RouterLink class="button" :to="`/edit/${id}`">Edit</RouterLink>
      <button class="button" @click="deleteItem">Delete</button>
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