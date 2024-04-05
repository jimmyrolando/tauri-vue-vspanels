import { ref } from 'vue'

const showLeftPanel = ref(true)
const showRightPanel = ref(true)
const showBottomPanel = ref(true)

const bottomPanelSize = ref(300)
const leftPanelSize = ref(200)
const rightPanelSize = ref(200)

export function panelStore() {

    const togglePanel = (panel: string) => {
        switch (panel) {
            case 'left':
                showLeftPanel.value = !showLeftPanel.value
                break;
            case 'right':
                showRightPanel.value = !showRightPanel.value
                break;
            case 'bottom':
                showBottomPanel.value = !showBottomPanel.value
                break;
        }
    }

    return {
        togglePanel,
        showLeftPanel,
        leftPanelSize,
        showRightPanel,
        rightPanelSize,
        showBottomPanel,
        bottomPanelSize
    }
}