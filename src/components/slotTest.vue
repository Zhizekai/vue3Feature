<template>
  <div>
    <div>子组件预留的插槽</div>
    <div>{{COSUrl}}</div>

    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import {ComponentInternalInstance, computed, getCurrentInstance, onMounted, reactive, Ref, ref, toRef} from 'vue'
// const { appContext } = <ComponentInternalInstance>getCurrentInstance()


const app = getCurrentInstance()
const COSUrl:any = app?.appContext.config.globalProperties.$COSUrl
onMounted(() => {
  console.log(app?.appContext.config.globalProperties.$COSUrl)
  // console.log(app?.pr)
})
</script>
<style scoped>

</style>
