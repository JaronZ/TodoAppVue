<script setup lang="ts">
import { ref } from "vue";
import {createTodo} from "@/TodoService.ts";
import {useRouter} from "vue-router";

const router = useRouter();

const name = ref("");
const dueDate = ref<string>();
const description = ref<string>();

async function submitTodo() {
  await createTodo({
    id: -1,
    name: name.value,
    dueDate: dueDate.value ? new Date(dueDate.value) : undefined,
    description: description.value,
  });
  await router.push("/");
}
</script>

<template>
  <h1>Add Todo</h1>
  <form @submit.prevent="submitTodo">
    <label for="name">Name</label>
    <input id="name" type="text" v-model="name" />

    <label for="due-date">Due Date</label>
    <input id="due-date" type="date" v-model="dueDate" />

    <label for="description">Description</label>
    <textarea id="description" v-model="description"></textarea>

    <button type="submit" class="button">Create</button>
  </form>
</template>

<style scoped>

</style>