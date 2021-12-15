<template>
  <section>
    <label for="todoName">
      <b>Add your next task</b>
    </label>
    <input
      id="todoName"
      type="text"
      v-model="taskTitle"
      placeholder="Title of a task"
      @keyup.enter="add"
    />
    <button @click="add" type="button">Add</button>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Task from "../models/Task";

export default defineComponent({
  setup(_, context) {
    let taskTitle = ref("");
    const store = useStore();
    const router = useRouter();

    function add(): void {
      if (taskTitle.value !== "") {
        const newTask = new Task(taskTitle.value);
        store.commit("setTask", newTask);
        taskTitle.value = "";
        router.push("/");
      }
    }

    return {
      taskTitle,
      add,
    };
  },
});
</script>

<style scoped></style>
