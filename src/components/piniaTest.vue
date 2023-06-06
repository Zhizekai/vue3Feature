<template>
    <div>
        <el-button @click="Add">+</el-button>
        <el-button @click="dispatchTest" >批量修改</el-button>
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
const Test = useTestStore()
const Add = () => {
    Test.current++
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
