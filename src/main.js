import Vue from 'vue'
import App from './App.vue'

// Pour utiliser un Single File Component : on l'importe puis on le déclare.
// La doc nous montre d'autres façons de le faire, mais on peut déjà utiliser celle-ci

import Wall from './components/Wall.vue'
Vue.component('my-wall', Wall)

import Header from './components/Header.vue'
Vue.component('my-header', Header)

import WallAside from './components/WallAside.vue'
Vue.component('wall-aside', WallAside)

import UserAccount from './components/UserAccount.vue'
Vue.component('user-account', UserAccount)

import AccountFields from './components/AccountFields.vue'
Vue.component('account-fields', AccountFields)

import MailBox from './components/MailBox.vue'
Vue.component('my-mailbox', MailBox)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
      { 
        name: 'wall',
        path: '/', 
        component: Wall 
      },
      { 
        name: 'account',
        path: '/account', 
        component: UserAccount 
      },
      { 
        name: 'mailbox',
        path: '/mailbox', 
        component: MailBox
      }
  ]
})

// Touchez pas à ça pour l'instant on s'en fiche, ca marche on y touche pas :)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
