import {defineStore} from 'pinia'
import {Names} from '../storeNameSpace'


type User = {
    current:number,
    age:number,
    counter:number
}
const login = ():Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {

            resolve({current:200,age:40,counter:90})
        },2000)
    })
}


export const useTestStore = defineStore(Names.Test, {
    state: () => {
        return {
            current: 1,
            age: 12,
            counter: 0,
            user:<User>{}
        }
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters: {
        newName(state):string {
            console.log(state)
            this.counter = this.current * 4;
            return "getter+" + this.current;
        },
        newCurrent:(state):number => {
            return state.current * 8;

        }
    },
    //可以操作异步 和 同步提交state
    actions: {
        increment() {
            this.counter++
        },
        randomizeCounter() {
            this.counter = Math.round(100 * Math.random())
        },
        async getUserProfile () {
            console.log("获取当前state")
            console.log(this.$state)
            this.user = await login();
        }

    }
})