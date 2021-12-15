<template>
  <div>
    <h1>Tasks</h1>
    <div class="tasks-block">
      <div v-for="task in tasks" :key="task.name">
        <h2>{{ task.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import Task from "../models/Task";

export default defineComponent({
  setup() {
    const store = useStore();
    let tasks = ref([]);

    function setTaskComplete(task: Task): void {
      store.commit("completeTask", task);
    }

    function deleteTask(task: Task) {
      store.commit("deleteTask", task);
    }

    function getTasks() {
      tasks.value = store.state.tasks;
    }

    onMounted(getTasks);

    return {
      tasks,
    };
  },
});
</script>

<style scoped></style>
