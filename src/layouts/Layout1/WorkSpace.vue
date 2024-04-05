<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWindow, usePanel, UsePanelOptions } from '../../acme'
import { panelStore } from './panelStore'
import SashContainer from '../../acme/components/SashContainer.vue';
const { showBottomPanel, bottomPanelSize } = panelStore()

const { height } = useWindow()

const handler = ref<HTMLElement | null>(null)

const options: UsePanelOptions = {
    iniSize: bottomPanelSize.value,
    minSize: 150,
    maxSize: 500,
    reverse: true,
    axis: 'y'
}
const { size, isHovering, isDragging, isMin, isMax, togglePanel } = usePanel(handler, options)

watch(size, (newSize) => {
    if (newSize > 0) {
        bottomPanelSize.value = newSize
        if (!showBottomPanel.value) showBottomPanel.value = true
    }
    if (newSize == 0) {
        showBottomPanel.value = false
    }
})

watch(showBottomPanel, (newValue) => {
    togglePanel(newValue)
})


</script>

<template>
    <GridBranchNode class="vertical">
        <SashContainer>
            <div ref="handler" class="sash horizontal"
                :class="{ 'active': isDragging, 'hover': isHovering, 'minimum': isMin, 'maximum': isMax, 'disabled': !showBottomPanel }"
                :style="{ top: `${height - size - 2}px` }">
            </div>
        </SashContainer>
        <SplitViewContainer>
            <SplitViewView :style="{ top: '0px', height: `${height - size}px` }">
                <slot name="up"></slot>
            </SplitViewView>
            <SplitViewView :style="{ top: `${height - size}px`, height: `${size}px` }">
                <slot name="down"></slot>
            </SplitViewView>
        </SplitViewContainer>
    </GridBranchNode>
</template>