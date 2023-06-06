<template>
  <div class="houseList">
    <div v-for="(item,index) in [1,2,3,4]">
      <Card :content="item"></Card>
    </div>

    <div>{{title}}</div>
    <div>{{data}}</div>
    <div>{{message}}</div>
    <div class="houseListItem">
      {{message2}}
      {{message3}}
    </div>
    <div>
      <el-button @click="clickHandle">加入</el-button>
      <el-button @click="clickTap">给父组件传值</el-button>
      <el-button @click="sentList">给父组件传值2</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {computed, watch, reactive, Ref, ref, toRef, watchEffect, onMounted} from 'vue'
import Card from './Card.vue'

defineProps<{
  title:string,
  data:number[]
}>()
let message = reactive({
  nav:{
    bar:{
      name:0
    }
  }
})

watch(message, (newVal, oldVal) => {
  console.log('新的值----', newVal);
  console.log('旧的值----', oldVal);
})

const clickHandle =() => {
  console.log("加一")
  message.nav.bar.name += 1;
  message2.value = message2.value + "333";
}

let message3 = ref<string>('11')
let message2 = ref<string>('11')
watchEffect(() => {
  // console.log('message3', message3.value);
  console.log('message2', message2.value);

  message3.value = message2.value + "44";
})

onMounted(() => {
  console.log("挂在了")
})

const emit = defineEmits(['on-click','getPhotoList'])

//如果用了ts可以这样两种方式
// const emit = defineEmits<{
//     (e: "on-click", name: string): void
// }>()
const clickTap = () => {
  emit('on-click', [1,2,3])
}

const sentList = () => {
    emit('getPhotoList', ['222222',2,3])
}
</script>
<style scoped lang="less">
.houseList {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 8rem;
  background-color: #747bff;
  .houseListItem {
    background-color: cornflowerblue;
  }
}
</style>
