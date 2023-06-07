<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import ComputedHouse from "./components/computedHouse.vue";
import WatchTest from "./components/watchTest.vue";
import {reactive, ref} from "vue";
import SlotTest from "./components/slotTest.vue";
import PiniaTest from "./components/piniaTest.vue";


let state = reactive({
    currentKey: 0,
    tabList: [
        {
            name: "监听器",
            key: 0,
            url:'/'
        },
        {
            name: "计算属性",
            key: 1,
            url:'computedFeature'
        },
        {
            name: "初始",
            key: 2,
            url:'start'
        },
        {
            name: "插槽",
            key: 3,
            url:'slotFeature'
        },
        {
            name: "pinia练习",
            key: 4,
            url:'piniaTest'
        }
    ]
});

const handleClick = (e, item) => {
    state.currentKey = item.key;
}

const getList = (param) => {
    console.log(param)
}
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo"/>
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
        </a>
    </div>
    <div>
        <div>
            <!--使用 router-link 组件进行导航 -->
            <!--通过传递 `to` 来指定链接 -->
            <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
            <router-link tag="div" to="/">跳转a</router-link>
            <router-link tag="div" style="margin-left:200px" to="/register">跳转b</router-link>

        </div>
        <hr />
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
    <el-row justify="center">
        <el-col :span="20" >
            <div class="tabBar">
                <div v-for="(item,index) in state.tabList">
                    <el-button @click="handleClick(1,item)">{{ item.name }}</el-button>
                </div>
            </div>
        </el-col>

        <el-col :span="20">
            <div class="appContent">
                <watch-test v-if="state.currentKey === 0" title="kkkkkkk" :data="[1,2,3,4,6]" @on-click="getList"
                            @getPhotoList="getList"/>
                <computed-house v-if="state.currentKey === 1"/>
                <HelloWorld v-if="state.currentKey === 2" msg="Vite + Vue"/>
                <slot-test v-if="state.currentKey === 3">
                    <template v-slot>
                        <div>2132</div>
                    </template>
                </slot-test>
                <piniaTest v-if="state.currentKey === 4"/>
            </div>

        </el-col>
    </el-row>



</template>

<style scoped>
.appContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.tabBar {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 0 auto 32px;

}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
