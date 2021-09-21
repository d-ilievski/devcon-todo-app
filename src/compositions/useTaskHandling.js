import { ref } from "vue";

const initialTasks = [
  {
    id: 1,
    name: "Present Vue 3 on devcon",
    date: "2021-07-22",
    done: false
  },
  {
    id: 2,
    name: "Do some shopping",
    date: "2021-07-21",
    done: true
  }
];

export default () => {
  const tasks = ref(initialTasks);

  const addTask = ({ task, date }) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      name: task,
      date,
      done: false
    };

    tasks.value.push(newTask);
  };

  const toggleCompleteTask = id => {
    const task = tasks.value.find(t => t.id === id);
    task.done = !task.done;
  };

  return { tasks, addTask, toggleCompleteTask };
};
