import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Actions from '../views/actions/Actions.vue'
import ActionDetails from '../views/actions/ActionDetails.vue'
import Horrors from '../views/horrors/Horrors.vue'
import HorrorDetails from '../views/horrors/HorrorDetails.vue'
import Familials from '../views/familials/Familials.vue'
import FamilialDetails from '../views/familials/FamilialDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/actions',
    name: 'Actions',
    component: Actions
  },
  {
    path: '/actions/:id',
    name: 'ActionDetails',
    component: ActionDetails,
    props: true
  },
  {
    path: '/horrors',
    name: 'Horrors',
    component: Horrors
  },
  {
    path: '/horrors/:id',
    name: 'HorrorDetails',
    component: HorrorDetails,
    props: true
  },
  {
    path: '/familials',
    name: 'Familials',
    component: Familials
  },
  {
    path: '/familials/:id',
    name: 'FamilialDetails',
    component: FamilialDetails,
    props: true
  },
  // {
  //   path: '/all actions'
  //   redirect: '/actions'
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
