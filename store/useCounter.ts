import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
        this.count += 1
        },
        decrement() {
        this.count -= 1
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2
    },
    // 設定 counterStore 持久化選項
    persist: {
        key: 'counter',
        storage: persistedState.localStorage
    },
})
