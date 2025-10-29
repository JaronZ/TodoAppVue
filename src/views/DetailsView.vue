<script setup lang="ts">
import type {TodoItemInfo} from "@/TodoItemInfo.ts";
import {useRoute, onBeforeRouteUpdate} from "vue-router";
import {ref, watchEffect} from "vue";
import {getTodoById} from "@/TodoService.ts";

const route = useRoute();
const todoItem = ref<TodoItemInfo | null>(null);

async function setTodoItem(id: number) {
  todoItem.value = await getTodoById(id);
}

onBeforeRouteUpdate(async (to, from) => {
  await setTodoItem(Number(to.params.id));
});

watchEffect(async () => {
  await setTodoItem(Number(route.params.id));
});
</script>

<template>
  <h1>{{todoItem?.name}}</h1>
  <p>Due by: {{ todoItem?.dueDate?.toDateString() }}</p>
  <p>{{todoItem?.description ?? ""}}</p>
</template>

<style scoped>

</style>