import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrarUsuario from '@/components/Login/RegistrarUsuario.vue'
import { getAuth } from "firebase/auth";


Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    props: true,
    meta: {
      authUser: true
    }
  },
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registrar',
    name: 'registrarUsuario',
    component: RegistrarUsuario
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let usuario = getAuth().currentUser;
  console.log("User"  + usuario);
  let autorizacion = to.matched.some(record => record.meta.authUser);

  if(autorizacion && !usuario) {
    next('login');
  }else if(!autorizacion && usuario){
    next('home');
  }else{
    next();
  }
})


export default router
