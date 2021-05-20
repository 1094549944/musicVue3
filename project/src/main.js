import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'

// 引入全局样式文件
import '@/assets/scss/index.scss'
createApp(App).use(Vant).mount('#app')
