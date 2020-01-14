<template>
  <ion-page>
    <ion-header class="toolbar-md-primary">

      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Add Item</ion-title>
      </ion-toolbar>

    </ion-header>
    <ion-content class="content">

      <ion-item>
        <ion-input :value="name" ref="newTodoItem" @input="updateTodoName" placeholder="Todo Name"></ion-input>
      </ion-item>

      <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="checkmark"></ion-icon>
      </ion-fab-button>

    </ion-content>
  </ion-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    addTodo() {
      const newTodo = { name: this.name }
      axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
        .then(res => {
          // eslint-disable-next-line no-console
          console.log('addtodo', res)
          this.$router.push({path: '/todos'})
        })
    },
    updateTodoName() {
      this.name = this.$refs.newTodoItem.value
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-fab {
  position: fixed;
  bottom: 25px;
  right: 15px;
  font-size: 30px;
}
</style>