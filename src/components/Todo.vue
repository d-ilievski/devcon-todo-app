<template>
  <div class="todo">
    <h1>DevCon Todo App</h1>
    <AddTask></AddTask>
    <TaskList :tasks="tasks"></TaskList>
  </div>
</template>

<script>
import AddTask from "@/components/AddTask.vue";
import TaskList from "@/components/TaskList.vue";
import useTaskHandling from '@/compositions/useTaskHandling'

export default {
  name: "Todo",
  components: {
    AddTask,
    TaskList
  },
  setup() {
    
    const {tasks} = useTaskHandling();
    
    return {
      tasks
    }
  }
};
</script>

<style scoped>
.todo {
    max-width: 350px;
    margin: 56px auto;
    padding: 32px;
    border: 1px solid #2c3e50;
    border-radius: 8px
}
</style>