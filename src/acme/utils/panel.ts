import { ref, onMounted, onUnmounted, toValue, Ref, computed } from 'vue'

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

    onMounted(() => {
        toValue(target)!.addEventListener('pointerdown', start)
        toValue(target)!.addEventListener('pointerenter', enter)
        toValue(target)!.addEventListener('pointerleave', leave)
        window.addEventListener('pointermove', move)
        window.addEventListener('pointerup', end)
        console.log('mounted')
    })

    onUnmounted(() => {
        // toValue(target)!.removeEventListener('pointerdown', start)
        // toValue(target)!.removeEventListener('pointerenter', enter)
        // toValue(target)!.removeEventListener('pointerleave', leave)
        window.removeEventListener('pointermove', move)
        window.removeEventListener('pointerup', end)
        console.log('unmounted')
    })

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


