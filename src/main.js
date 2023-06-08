import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import { Button, Dialog, Notification, MessageBox, Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './vuex/store'
Vue.component(Button.name, Button);
Vue.component(Dialog.name, Dialog);
Vue.prototype.$notify = Notification;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message=Message
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
// console.log(listStore)
new Vue({
  render: h => h(App),
  router:router,
  store,
}).$mount('#app')
