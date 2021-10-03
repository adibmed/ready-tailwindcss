import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'  
import '@fortawesome/fontawesome-free/js/all.js' 

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/monokai-sublime.css'

import { plugin as VueTippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'

const app = 
createApp(App);

app
.use(router)
.use(VueHighlightJS)
.use(VueTippy,{
    directive: 'tippy'
})
.mount('#app')

