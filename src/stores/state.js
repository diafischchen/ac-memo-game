import { defineStore } from 'pinia'

export const useStateMachine = defineStore('counter', {
    id: 'stateMachine',
    state: () => {
        return {
            running: false,
            animation: false,
        }
    }
})