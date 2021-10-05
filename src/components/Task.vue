<template>
  <li @click="() => toggleDone(id)" class="task" :class="{'done': done}">{{name}}</li>
</template>

<script>
import useTaskHandling from '@/compositions/useTaskHandling'

export default {
  name: "Task",
  props: {
    id: Number,
    name: String,
    done: Boolean
  },
  emits: ["toggle-task-done"],
  setup() {
    const { toggleDone } = useTaskHandling();

    return {
      toggleDone
    };
  }
};
</script>

<style scoped>
.task {
  font-size: 1.3rem;
  cursor: pointer;
  user-select: none;
}

.task.done {
  text-decoration: line-through;
}
</style>