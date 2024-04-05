<script setup lang="ts">
import { ref, watch } from 'vue';
import { useWindow, usePanel, UsePanelOptions } from '../../acme'

import { panelStore } from './panelStore';
import SashContainer from '../../acme/components/SashContainer.vue';

const { width } = useWindow()
const { leftPanelSize, showLeftPanel, rightPanelSize, showRightPanel } = panelStore()

const left = ref<HTMLElement | null>(null)

const leftOptions: UsePanelOptions = {
    iniSize: leftPanelSize.value,
    minSize: 150,
    maxSize: 300,
    axis: 'x'
}

const { size: leftSize, isHovering: leftHover, isDragging: leftActive, isMin: leftMin, isMax: leftMax, togglePanel: leftToggle } = usePanel(left, leftOptions)

watch(leftSize, (newSize) => {
    if (newSize > 0) {
        leftPanelSize.value = newSize
        if (!showLeftPanel.value) showLeftPanel.value = true
    }
    if (newSize == 0) {
        showLeftPanel.value = false
    }
})

watch(showLeftPanel, (newValue) => {
    leftToggle(newValue)
})

const right = ref<HTMLElement | null>(null)

const rightOptions: UsePanelOptions = {
    iniSize: rightPanelSize.value,
    minSize: 150,
    maxSize: 300,
    axis: 'x',
    reverse: true
}

const { size: rightSize, isHovering: rightHover, isDragging: rightActive, isMin: rightMin, isMax: rightMax, togglePanel: rightToggle } = usePanel(right, rightOptions)

watch(rightSize, (newSize) => {
    if (newSize > 0) {
        rightPanelSize.value = newSize
        if (!showRightPanel.value) showRightPanel.value = true
    }
    if (newSize == 0) {
        showRightPanel.value = false
    }
})

watch(showRightPanel, (newValue) => {
    rightToggle(newValue)
})
</script>

<template>
    <GridBranchNode class="horizontal">
        <SashContainer>
            <div ref="left" class="sash vertical"
                :class="{ 'active': leftActive, 'hover': leftHover, 'minimum': leftMin, 'maximum': leftMax, 'disabled': !showLeftPanel }"
                :style="{ left: `${leftSize - 2}px` }">
            </div>
            <div ref="right" class="sash vertical"
                :class="{ 'active': rightActive, 'hover': rightHover, 'minimum': rightMax, 'maximum': rightMin, 'disabled': !showRightPanel }"
                :style="{ right: `${rightSize - 2}px` }">
            </div>
        </SashContainer>
        <SplitViewContainer>
            <SplitViewView :style="{ left: '0px', width: `${leftSize}px` }">
                <slot name="left"></slot>
            </SplitViewView>
            <SplitViewView :style="{ left: `${leftSize}px`, right: `${rightSize}px` }">
                <slot name="main"></slot>
            </SplitViewView>
            <SplitViewView :style="{ left: `${width - rightSize}px`, width: `${rightSize}px` }">
                <slot name="right"></slot>
            </SplitViewView>
        </SplitViewContainer>
    </GridBranchNode>
</template>