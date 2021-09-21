<template>
  <li :class="{ done: task.done }">
    <div>
      <h3>{{ task.name }}</h3>
      <small>{{ task.date }}</small>
    </div>
    <button class="btn text" @click="() => toggleCompleteTask(task.id)">
      {{ !task.done ? "Done" : "Undo" }}
    </button>
  </li>
</template>

<script>
import useTaskHandling from "@/compositions/useTaskHandling";

export default {
  name: "Task",
  props: {
    task: Object,
  },
  setup() {
    const { toggleCompleteTask } = useTaskHandling();

    return {
      toggleCompleteTask,
    };
  },
};
</script>

<style scoped>
li {
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  visibility: hidden;
}

h3 {
  color: teal;
}

li:hover button,
li.done button {
  visibility: visible;
}

small {
  color: grey;
}

li.done small,
li.done h3 {
  color: lightgrey;
}

li.done h3 {
  text-decoration: line-through;
}
</style>