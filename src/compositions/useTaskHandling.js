import { ref } from "@vue/reactivity";

const initialTasks = [
    {
      id: 1,
      name: 'Present on DevCon',
      done: true
    },
    {
      id: 2,
      name: 'Buy groceries',
      done: false
    }
  ]

export default () => {

    const tasks = ref(initialTasks);

    const toggleDone = id => {
        const task = tasks.value.find(task => task.id === id);
        if(task) 
            task.done = !task.done
    }

    const addTask = (name) => {
        const task = {
            id: Math.floor(Math.random() * 10000),
            name,
            done: false
        }

        tasks.value.unshift(task);
    }

    return {
        tasks,
        toggleDone,
        addTask
    }
}