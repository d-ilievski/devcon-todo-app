<template>
  <form class="section" v-if="open" @submit.prevent="submitTask">
    <div class="form-control">
      <label for="task">Task</label>
      <input type="text" id="task" v-model="task" />
    </div>
    <div class="form-control">
      <label for="date">Date</label>
      <input type="date" id="date" v-model="date" />
    </div>
    <input type="submit" class="btn" value="Add Task" :disabled="!task.trim()" />
  </form>
</template>

<script>
import { ref } from "vue";
import useTaskHandling from '../compositions/useTaskHandling';

export default {
  name: "AddTask",
  props: {
    open: Boolean
  },
  setup() {
    const { addTask } = useTaskHandling();

    const task = ref("");
    const date = ref("");

    const submitTask = () => {
      if (task.value.trim()) {
        addTask({ task: task.value, date: date.value });
        task.value = "";
        date.value = "";
      }
    };

    return {
      task,
      date,
      submitTask
    };
  }
};
</script>

<style scoped>
.section {
  margin-bottom: 32px;
}
</style>