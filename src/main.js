import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const app = createApp(App)
app.AOS = new AOS.init({ disable: "phone" });

app.use(AOS).mount('#app')

// createApp(App).mount('#app')


// import Vue from 'vue'
// import App from './App.vue'
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// Vue.config.productionTip = false

// new Vue({

//   created () {
//     AOS.init()
//   },

//    render: h => h(App),
// }) .$mount('#app')
