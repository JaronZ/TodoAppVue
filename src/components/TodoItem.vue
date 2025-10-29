<template>
  <div class="todo-item">
    <p>Task Name</p>
    <p>Wednesday Nov 11 2023</p>
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