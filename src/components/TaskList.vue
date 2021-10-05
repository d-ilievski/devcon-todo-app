<template>
  <ul class="task-list">
    <Task v-for="task in tasks" :key="task.id" :name="task.name" :done="task.done" :id="task.id"></Task>
  </ul>
</template>

<script>
import Task from "@/components/Task.vue";
export default {
  name: "Task List",
  components: {
    Task
  },
  props: {
    tasks: Array
  }
};
</script>

<style scoped>
.task-list {
  text-align: left;
  margin: 25px 0;
}
</style>