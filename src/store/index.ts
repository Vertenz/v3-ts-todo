import { createStore } from "vuex";
import Task from "../models/Task";
import { findIndex } from "lodash";

export default createStore({
  state: {
    tasks: [
      {
        name: "Try TypeScript",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: false
      },
      {
        name: "Try TypeScript with Vue3",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: false
      }
    ] as Task[]
  },
  mutations: {
    setTask: (state, task) => state.tasks.push(task),
    deleteTask(state, task) {
      let taskIndex = findIndex(state.tasks, task);
      state.tasks.splice(taskIndex, ++taskIndex);
    },
    completeTask(state, task) {
      const taskIndex = findIndex(state.tasks, task);
      state.tasks[taskIndex].completed = true;
    }
  },
  actions: {},
  modules: {},
});
