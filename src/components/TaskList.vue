<template>
  <main>
    <div class="toolbar">
      <h3>Tasks</h3>
      <button
        class="btn text"
        @click="toggleFilter"
      >{{ filter === "all" ? "Show Incomplete" : "Show All" }}</button>
    </div>
    <ul v-if="filteredTasks.length">
      <task v-for="task in filteredTasks" :key="task.id" :task="task"></task>
    </ul>
    <h4
      class="no-tasks-message"
      v-else
    >You don't have any tasks. Start adding by clicking "New Task"</h4>
  </main>
</template>

<script>
import { ref, computed } from "vue";
import Task from "./Task.vue";
import useTaskHandling from "../compositions/useTaskHandling";

export default {
  components: { Task },
  name: "TaskList",
  setup() {
    const filter = ref("all");
    
    const { tasks } = useTaskHandling();

    const filteredTasks = computed(() => {
      if (filter.value === "incomplete") {
        return tasks.value.filter(task => !task.done);
      } else if (filter.value === "all") {
        return tasks.value;
      }
      return tasks.value;
    });

    const toggleFilter = () => {
      filter.value === "all"
        ? (filter.value = "incomplete")
        : (filter.value = "all");
    };

    return { filter, filteredTasks, toggleFilter, tasks };
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  max-height: 250px;
  overflow: hidden auto;
}
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.no-tasks-message {
  text-align: center;
}
</style>