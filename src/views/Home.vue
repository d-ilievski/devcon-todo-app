<template>
  <div class="container">
    <div class="app">
      <app-header
        @toggle-add-task="toggleAddTask"
        :showAddTask="showAddTask"
      ></app-header>
      <add-task :open="showAddTask"></add-task>
      <task-list :tasks="tasks"></task-list>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AddTask from "../components/AddTask.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import TaskList from "../components/TaskList.vue";
import useTaskHandling from "@/compositions/useTaskHandling";

import { ref } from "@vue/reactivity";

export default {
  name: "Home",
  components: {
    "app-header": Header,
    "add-task": AddTask,
    "task-list": TaskList,
    "app-footer": Footer,
  },
  setup() {
    const { tasks, addTask } = useTaskHandling();

    const showAddTask = ref(false);

    const toggleAddTask = () => {
      showAddTask.value = !showAddTask.value;
    };

    return { tasks, addTask, showAddTask, toggleAddTask };
  },
};
</script>
