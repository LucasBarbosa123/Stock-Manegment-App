import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Stock from '../views/Stock.vue'
import Pessoas from '../views/Pessoas.vue'
import PessoasLst from '../views/PessoasLst.vue'
import PessoasAdd from '../views/PessoasAdd.vue'
import PessoasEdt from '../views/PessoasEdt.vue'
import AccountEdt from '../views/AccountEdt.vue'
import GeneralService from '../GeneralService'

async function sessionChecker(target){

  try{
    const sessionToken = await GeneralService.getSession()

    console.log(sessionToken.user)
    if(sessionToken.user){
      
      if(target.name==Login.name){
        router.push({name: 'home'})
      }

      return target     
    }

    return Login
  }catch(err){
    console.log(err)

    return Login
  }  
}


const routes = [
  {
    path: '/',
    name: 'url',
    component: sessionChecker(Home)
  },
  {
    path: '/home/',
    name: 'home',
    component: sessionChecker(Home)
  },
  {
    path: '/stock/',
    name: 'stock',
    component: sessionChecker(Stock)
  },
  {
    path: '/pessoas/',
    name: 'pessoas',
    component: sessionChecker(Pessoas)
  },
  {
    path: '/pessoas/lst/',
    name: 'pessoaslst',
    component: sessionChecker(PessoasLst)
  },
  {
    path: '/pessoas/add/',
    name: 'pessoasadd',
    component: sessionChecker(PessoasAdd)
  },
  {
    path: '/pessoas/edt/:edtId',
    name: 'pessoasedt',
    component: sessionChecker(PessoasEdt)
  },
  {
    path: '/account/edt/',
    name: 'accountedt',
    component: sessionChecker(AccountEdt)
  },
  {
    path: '/login',
    name: 'login',
    component: sessionChecker(Login)    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
