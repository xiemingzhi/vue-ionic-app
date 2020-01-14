import Vue from 'vue'
//import VueRouter from 'vue-router';
import { IonicVueRouter } from '@ionic/vue';
import TodoList from '../components/TodoList';
import AddTodoItem from '../components/AddTodoItem';

//Vue.use(VueRouter);
Vue.use(IonicVueRouter);

const routes = [
  { path: '/todos', component: TodoList },
  { path: '/todos/add', component: AddTodoItem},
  { path: '/', redirect: '/todos'}
]

export default new IonicVueRouter({ 
  mode: 'history',
  base: '/',
  routes 
})