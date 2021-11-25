<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>TODO List</h2>
    <form v-on:submit.prevent>
      <input type="text" v-model="task" />
      <ul>
        <li v-for="item in todos" :key="item.item">
          <input type="checkbox" v-model="item.isDone">
          <span>{{ item.item }}</span>
          </li>
      </ul>
      <button v-on:click="addItem">Add</button>
    </form>
    <div>
      {{ $data }}
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import isEmpty from "./js/utils/isEmpty";

export default {
  name: "App",
  data: () => ({
    task: '',
    todos: []
  }),
  methods: {
    addItem: function () {
      console.log('clicked!');

      if(isEmpty(this.task)) return;

      let todo = {
        item: this.task,
        isDone: false
      };
      this.todos.push(todo);
      this.task = '';
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
