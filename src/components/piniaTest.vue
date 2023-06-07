<template>
    <div>
        <el-button @click="Add">+</el-button>
        <el-button @click="dispatchTest" >批量修改</el-button>
        <el-button @click="dispatchFunc" >函数修改</el-button>
        <el-button @click="addAction" >action修改</el-button>
        <el-button @click="stateReset" >重置数据</el-button>
        <el-button @click="setUserProfile" >异步获取用户数据</el-button>
        <div>
            current:{{Test.current}}
        </div>
        <div>
            age:{{Test.age}}
        </div>
        <div>
            counter:{{Test.counter}}
        </div>

        <div>
            User:{{Test.user}}
        </div>
        <div>
            getters:{{Test.newName}}
        </div>
        <div>
            函数执行：{{getHandle()}}
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

const getHandle = () => {
    console.log(Test)
    return Test.newName

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

const addAction = () => {
    Test.randomizeCounter()
}

const stateReset = () => {
    Test.$reset();
}


const setUserProfile = () => {
    Test.getUserProfile();
}
// 订阅变化
Test.$subscribe((args,state)=>{
    console.log("订阅状态变化")
    console.log(args,state);

})

</script>
<style scoped>

</style>
