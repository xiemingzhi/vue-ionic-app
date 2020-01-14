<template>
  <ion-page>
    
    <ion-header>
      <ion-toolbar class="toolbar-md-primary" color="primary">
        <ion-title>TodoList</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <!-- <ion-content class="content"> -->
      <ion-list>
        <ion-item v-for="todo in todos" :key="todo.id">
          <ion-label>{{todo.title}}</ion-label>
        </ion-item>
      </ion-list>

      <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    <!-- </ion-content> -->

  </ion-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.$router.push({path: '/todos/add'})
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.todos = res.data)
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log('todos length', this.todos.length)
  },
}</script>

<style lang="scss" scoped>
.todo-fab {
  position: fixed;
  bottom: 25px;
  right: 15px;
  font-size: 30px;
}

.content {
  padding: 10px 10px 10px 0px
}
</style>
