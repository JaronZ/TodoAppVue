<script setup lang="ts">

</script>

<template>
  <div class="title">
    <h1>Tasks</h1>
    <button class="button">Add task</button>
  </div>
  <ul class="todo-list">
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