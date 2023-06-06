<script setup lang="ts">
import {computed, reactive, Ref, ref, toRef} from 'vue'
defineProps<{ msg: string }>();

const count = ref(0);
const name:Ref = ref("zzk");
const houseList = ref([1,2,3,4]);

let message: Ref<string | number> = ref("我是message")
const changeMag = () => {
  message.value = "我不是";

  price.value = 500

}


let price = ref(0)//$0

let m = computed<string>(()=>{
  return `$` + price.value
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <div>
    <input v-model="name" type="text" />
    <div>{{ name }}</div>
    <div>{{price}}</div>
    <div>{{m}}</div>
  </div>

  <div class="card">
    <div @click="changeMag"> {{houseList.join()}}</div>
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMRddyyyy
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
