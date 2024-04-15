import { watchPostEffect, toValue } from 'vue'

export function useEventListener(target: any, event: string, callback: Function) {

    let stopListener: Function | null

    const addEvent = (el: any, event: string, listener: any) => {
        el.addEventListener(event, listener)
        return () => el.removeEventListener(event, listener)
    }

    const register = () => {
        if (stopListener) stopListener()

        stopListener = addEvent(toValue(target), event, callback)
    }

    watchPostEffect(() => {
        register()
    })
}