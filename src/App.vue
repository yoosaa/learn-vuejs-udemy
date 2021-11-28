<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>TODO List</h2>
    <form v-on:submit.prevent>
      <input type="text" v-model="task" />
      <ul>
        <li v-for="(item, index) in todos" :key="item.item">
          <input type="checkbox" v-model="item.isDone">
          <span v-cloak v-bind:class="{ done: item.isDone }">{{ item.item.split('').reverse().join('') }}</span>
          <button v-on:click="removeItem(index)">Remove</button>
        </li>
      </ul>
      <button v-on:click="addItem">Add</button>
      <button v-on:click="removeItem()">Remove</button>
    </form>
    <div>
      {{ $data }}
    </div>
  </div>
</template>

<script>
import isEmpty from "./js/utils/isEmpty";

export default {
  name: "App",
  data: () => ({
    task: '',
    todos: []
  }),
  methods: {
    addItem: function () {
      if(isEmpty(this.task)) return;

      let todo = {
        item: this.task,
        isDone: false
      };
      this.todos.push(todo);
      this.task = '';
    },
    removeItem: function (e) {
      if(e === undefined){
        this.todos = this.todos.filter((todo)=>{
          return todo.isDone !== true;
        });
      }else{
        this.todos.splice(e, 1);
      }
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
  li {
    span.done{
      text-decoration: line-through;
    }
  }
}
</style>
