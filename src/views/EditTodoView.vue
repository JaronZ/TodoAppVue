<script setup lang="ts">
import {ref, watchEffect} from "vue";
import {useRoute, useRouter} from "vue-router";
import * as todoService from "@/TodoService.ts";

const route = useRoute();
const router = useRouter();

const todoId = parseInt(route.params.id as string, 10);
const name = ref("");
const dueDate = ref<string>();
const description = ref<string>();

watchEffect(async () => {
  const todoItem = await todoService.getTodoById(todoId);
  if (todoItem) {
    name.value = todoItem.name;
    dueDate.value = todoItem.dueDate ? todoItem.dueDate.toISOString().substring(0, 10) : undefined;
    description.value = todoItem.description ?? "";
  }
});

async function editTodo() {
  await todoService.editTodo({
    id: todoId,
    name: name.value,
    dueDate: dueDate.value ? new Date(dueDate.value) : undefined,
    description: description.value,
  });
  await router.push("/");
}
</script>

<template>
  <h1>Edit Todo</h1>
  <form @submit.prevent="editTodo">
    <div class="form-group">
      <label for="name" class="form-label">Name</label>
      <input type="text" id="name" class="form-control" v-model="name" />
    </div>

    <div class="form-group">
      <label for="due-date" class="form-label">Due Date</label>
      <input type="date" name="due-date" id="due-date" class="form-control" v-model="dueDate" />
    </div>

    <div class="form-group">
      <label for="description" class="form-label">Description</label>
      <textarea name="description" id="description" rows="20" class="form-control" v-model="description"></textarea>
    </div>

    <button type="submit" class="button">Edit</button>
  </form>
</template>
