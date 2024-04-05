import { listen, Event } from '@tauri-apps/api/event'
import { getCurrent } from '@tauri-apps/api/window'
import { ref } from 'vue'

const widthWindow = ref()
const heightWindow = ref()
const calls = ref(0)

export function useWindow() {
    //@ts-ignore
    if (window.__TAURI__ !== undefined) {

        let scaleFactor = 2

        getCurrent().scaleFactor().then(
            factor => scaleFactor = factor)

        getCurrent().innerSize().then(
            size => {
                widthWindow.value = size.toLogical(scaleFactor).width
                heightWindow.value = size.toLogical(scaleFactor).height
            }
        )

        listen('tauri://resize', (event: Event<any>): void => {
            const { width, height } = event.payload

            widthWindow.value = width / scaleFactor
            heightWindow.value = height / scaleFactor

            calls.value++
        })
    }
    else {
        function getDimensions() {
            widthWindow.value = window.innerWidth
            heightWindow.value = window.innerHeight
        }

        getDimensions();

        window.addEventListener('resize', () => {
            getDimensions()
            calls.value++
        });

    }
    return {
        width: widthWindow,
        height: heightWindow,
        calls
    }
}