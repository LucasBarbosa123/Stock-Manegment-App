import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Stock from '../views/Stock.vue'
import Pessoas from '../views/Pessoas.vue'
import PessoasLst from '../views/PessoasLst.vue'
import PessoasAdd from '../views/PessoasAdd.vue'
import PessoasEdt from '../views/PessoasEdt.vue'

const routes = [
  {
    //because if
    path: '/',
    name: 'url',
    component: Login
  },
  {
    path: '/home/:id',
    name: 'home',
    component: Home
  },
  {
    path: '/stock/:id',
    name: 'stock',
    component: Stock
  },
  {
    path: '/pessoas/:id',
    name: 'pessoas',
    component: Pessoas
  },
  {
    path: '/pessoas/lst/:id',
    name: 'pessoaslst',
    component: PessoasLst
  },
  {
    path: '/pessoas/add/:id',
    name: 'pessoasadd',
    component: PessoasAdd
  },
  {
    path: '/pessoas/edt/:id/:edtId',
    name: 'pessoasedt',
    component: PessoasEdt
  },
  {
    path: '/login',
    name: 'login',
    component: Login    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
