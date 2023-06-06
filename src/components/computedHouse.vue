<template>
  <div>
    <input placeholder="请输入名称" v-model="keyWord" type="text">
    <table style="margin-top:10px;" width="500" cellspacing="0" cellpadding="0" border>
      <thead>
      <tr>
        <th>物品</th>
        <th>单价</th>
        <th>数量</th>
        <th>总价</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in searchData">
        <td align="center">{{ item.name }}</td>
        <td align="center">{{ item.price }}</td>
        <td align="center">
          <button @click="item.num > 1 ? item.num-- : null">-</button>
          <input v-model="item.num" type="number">
          <button @click="item.num < 99 ? item.num++ : null">+</button>
        </td>
        <td align="center">{{ item.price * item.num }}</td>
        <td align="center">
          <button @click="del(index)">删除</button>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="5" align="right">
          <span>总价：{{ total }}</span>
        </td>
      </tr>
      </tfoot>

    </table>
  </div>
</template>
<script setup lang="ts">
import {computed, reactive, ref} from "vue";

  let keyWord = ref<string>("");
  interface Data {
    name:string,
    price:number,
    num:number
  }

  const data = reactive<Data[]>([
    {
      name: "小满的绿帽子",
      price: 100,
      num: 1,
    },
    {
      name: "小满的红衣服",
      price: 200,
      num: 1,
    },
    {
      name: "小满的黑袜子",
      price: 300,
      num: 1,
    }
  ])


let searchData = computed(() => {
  return data.filter(item => item.name.includes(keyWord.value))
})


// computed 主要是监听别的属性，给当前属性赋值
let total = computed(() => {

  console.log(data.reduce((prev:string,next:Data) => {
    return prev + next.name;
  },""));


  return data.reduce((prev: number, next: Data) => {
    console.log(prev);
    console.log(next);
    return prev + next.num * next.price
  }, 0)
})

const del = (index: number) => {
  data.splice(index, 1)
}
</script>
<style scoped>

</style>
