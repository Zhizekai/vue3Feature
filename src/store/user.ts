import { defineStore } from 'pinia'
import {Names} from '../storeNameSpace'

export const useTestStore = defineStore(Names.Test, {
    state:()=>{
        return {
            current:1,
            age:12
        }
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters:{

    },
    //可以操作异步 和 同步提交state
    actions:{

    }
})