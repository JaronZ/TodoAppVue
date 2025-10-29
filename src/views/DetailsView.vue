<script setup lang="ts">
import type {TodoItemInfo} from "@/TodoItemInfo.ts";
import {useRoute, onBeforeRouteUpdate} from "vue-router";
import {ref} from "vue";

const route = useRoute();

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

const todoItem = ref<TodoItemInfo | null>(null);

function setTodoItem(id: number) {
  todoItem.value = items.find(item => item.id === id) || null;
}

onBeforeRouteUpdate((to, from) => {
  setTodoItem(Number(to.params.id));
});

setTodoItem(Number(route.params.id));
</script>

<template>
  <h1>{{todoItem?.name}}</h1>
  <p>Due by: {{ todoItem?.dueDate?.toDateString() }}</p>
  <p>{{todoItem?.description ?? ""}}</p>
</template>

<style scoped>

</style>