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
  {
    path: '/tabs',
    component: () => import('@/views/Tabs.vue'),
    children: [
      { 
        path: 'todos', 
        name: 'todos',
        //component: TodoList 
        components: { session: () => import('@/components/TodoList.vue') }
      },
      { 
        path: 'todos/add', 
        name: 'todos-add',
        //component: AddTodoItem
        components: { session: () => import('@/components/AddTodoItem.vue') }
      }
    ]
  },
  { path: '/', redirect: 'tabs/todos'}
]

export default new IonicVueRouter({ 
  mode: 'history',
  base: '/',
  routes 
})