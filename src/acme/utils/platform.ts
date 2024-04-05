import { platform } from '@tauri-apps/plugin-os';
import { ref } from 'vue';

const temp = ref<string | null>(null)

export function usePlatform() {
    if (!temp.value) {
        platform()
            .then((currentPlatform) => temp.value = currentPlatform);
    }

    return {
        platform: temp.value
    }
}
