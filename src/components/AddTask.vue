<template>
  <form class="add-task" @submit.prevent="submitTask">
    <label for="task-name">Task</label>
    <input type="text" name="task-name" id="task-name" v-model="taskName" />
    <input class="submit-button" type="submit" value="Add Task" :disabled="!taskName.trim()" />
  </form>
</template>

<script>
import useTaskHandling from "@/compositions/useTaskHandling";
import { ref } from "vue";

export default {
  name: "Add Task",
  setup() {
    const { addTask } = useTaskHandling();
    const taskName = ref("");

    const submitTask = () => {
      if(taskName.value) {
        addTask(taskName.value);
        taskName.value = ''
      }
    };

    return {
      submitTask,
      taskName
    };
  }
};
</script>

<style scoped>
.add-task {
  text-align: left;
}
#task-name {
  width: 100%;
  margin: 8px 0;
}
</style>