import { ref, toValue, Ref, computed } from 'vue'
import { useEventListener } from './event'

export interface UsePanelOptions {
    iniSize: number,
    minSize: number,
    maxSize: number,
    axis?: 'x' | 'y',
    reverse?: Boolean,
    autoHidden?: Boolean
}

export function usePanel(target: any, options: UsePanelOptions) {
    const {
        iniSize = 0,
        reverse = false,
        axis = 'x',
        minSize,
        maxSize,
        autoHidden = true
    } = options

    let startValue = toValue(iniSize)
    const rawSize = ref(toValue(iniSize))
    const newSize = ref(toValue(iniSize))
    const pressedDelta: Ref<undefined | number> = ref()
    const hover = ref(false)
    
    const enter = () => {
        hover.value = true
    }

    const leave = () => {
        hover.value = false
    }

    const start = (e: any) => {
        if (pressedDelta.value) return

        pressedDelta.value = (axis == 'x') ? e.clientX : e.clientY
    }

    const move = (e: any) => {
        if (!pressedDelta.value) return

        let delta = (axis == 'x') ? e.clientX : e.clientY

        delta -= pressedDelta.value

        if (reverse) delta *= -1

        rawSize.value = startValue + delta

        if (autoHidden && (rawSize.value < minSize * .6)) {
            if (newSize.value) togglePanel()
            return
        }

        if (rawSize.value <= minSize) {
            newSize.value = minSize
            return
        }

        if (rawSize.value >= maxSize) {
            newSize.value = maxSize
            return
        }

        newSize.value = rawSize.value
    }

    const end = () => {
        if (!pressedDelta.value) return

        pressedDelta.value = undefined
        startValue = newSize.value
    }

    useEventListener(target, 'pointerdown', start)
    useEventListener(target, 'pointerenter', enter)
    useEventListener(target, 'pointerleave', leave)
    useEventListener(window, 'pointermove', move)
    useEventListener(window, 'pointerup', end)

    const isDragging = computed(() => !!pressedDelta.value)

    const isHovering = computed(() => hover.value || isDragging.value)

    const togglePanel = (value?: Boolean) => {
        if (value != undefined && (value && newSize.value)) return
        if (value != undefined && (!value && !newSize.value)) return

        if (newSize.value > 0) {
            newSize.value = 0
        } else if (startValue > 0) {
            newSize.value = startValue
        } else if (startValue == 0) {
            startValue = minSize
            newSize.value = minSize
        }
    }

    const isMin = computed(() => Math.floor(newSize.value) <= minSize)

    const isMax = computed(() => Math.floor(newSize.value) >= maxSize)

    return {
        rawSize,
        size: newSize,
        isDragging,
        isHovering,
        togglePanel,
        isMin,
        isMax
    }
}


