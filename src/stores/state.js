import { defineStore } from 'pinia'

export const useStateMachine = defineStore('counter', {
    state: () => {
        return {
            running: false,
            animation: false,
        }
    }
})