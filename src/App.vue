<script setup lang="ts">
import Header from "@/components/Header.vue";
import TodoView from "@/views/TodoView.vue";
</script>

<template>
  <main>
    <Header />
    <section class="content">
      <TodoView />
      <RouterView/>
    </section>
  </main>
</template>

<style scoped>
.content {
  padding: 15px 20rem;
}
</style>
