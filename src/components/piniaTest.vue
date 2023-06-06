<template>
    <div>
        <el-button @click="Add">+</el-button>
        <el-button @click="dispatchTest" >批量修改</el-button>
        <el-button @click="dispatchFunc" >函数修改</el-button>
        <div>
            {{Test.current}}
        </div>
        <div>
            {{Test.age}}
        </div>
    </div>
</template>
<script setup lang="ts">
import {computed, reactive, Ref, ref, toRef} from 'vue'
import {useTestStore} from '../store/user.ts'
import {storeToRefs} from "pinia";

const Test = useTestStore()

const {current,age} = storeToRefs(Test)
const Add = () => {
    Test.current++

    console.log(current,age)
}



const dispatchTest = () => {
    Test.$patch({
        current:200,
        age:300
    })
}

const dispatchFunc = () => {
  Test.$patch((state) => {
      state.current++;
      state.age = 400
  })
}

</script>
<style scoped>

</style>
