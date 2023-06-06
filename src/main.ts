import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/Card.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPinia} from 'pinia'
const store = createPinia()

const app = createApp(App)
app.component('Card',Card);
app.use(store);
app.use(ElementPlus)
app.config.globalProperties.$http = () => {
    console.log("全局函数")
}

app.config.globalProperties.$COSUrl = "全局url"



// 声明要扩充@vue/runtime-core包的声明.
// 这里扩充"ComponentCustomProperties"接口, 因为他是vue3中实例的属性的类型.
declare module 'vue' {
    export interface ComponentCustomProperties {
        $COSUrl: string
    }
}
app.mount('#app')


