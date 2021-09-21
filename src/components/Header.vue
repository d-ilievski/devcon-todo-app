<template>
  <header>
    <h2>DevCon Todo App</h2>
    <button
      class="btn"
      :class="{ close: showAddTask }"
      @click="$emit('toggle-add-task')"
    >{{ !showAddTask ? "New Task" : "Close" }}</button>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    showAddTask: Boolean
  },
  emits: ["toggle-add-task"]
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
h2 {
  color: teal;
}
</style>