
import { onMounted, onUnmounted } from 'vue'
import { watchPostEffect, toValue } from 'vue'

export function useEventListener1(target: any, event: string, callback: Function) {
    // if you want, you can also make this
    // support selector strings as target
    onMounted(() => target.addEventListener(event, callback))
    onUnmounted(() => target.removeEventListener(event, callback))
}

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

    // const stop = () => {
    //     stopWatch()
    //     cleanup()
    // }

    // return stop
}