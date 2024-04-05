<script setup lang="ts">
import { ref } from 'vue';
import { useWindow, usePanel, UsePanelOptions, usePlatform } from '../acme'
const { width, height } = useWindow()

const handler = ref<HTMLElement | null>(null)

const options: UsePanelOptions = {
    iniSize: 300,
    minSize: 150,
    maxSize: 500,
    reverse: true,
    axis: 'y',
    autoHidden: false
}
const { size, isHovering, isDragging, isMin, isMax } = usePanel(handler, options)

const { platform } = usePlatform()

const titleBarHeight = platform == 'macos' ? 28 : 0

</script>

<template>
    <MainContainer :style="{ width: `${width}px`, height: `${height}px` }">
        <GridBranchNode class="vertical">
            <SplitViewContainer>
                <SplitViewView :style="{ top: '0px', height: `${titleBarHeight}px` }">
                    <slot name="titlebar"></slot>
                </SplitViewView>
                <SplitViewView :style="{ top: `${titleBarHeight}px`, height: `${height - titleBarHeight}px` }">
                    <GridBranchNode class="vertical">
                        <div class="sash-container">
                            <div ref="handler" class="sash horizontal"
                                :class="{ 'active': isDragging, 'hover': isHovering, 'minimum': isMin, 'maximum': isMax }"
                                :style="{ top: `${height - size - 2}px` }">
                            </div>
                        </div>
                        <SplitViewContainer>
                            <SplitViewView :style="{ top: '0px', height: `${height - size}px` }">
                                <PanelContainer class="visible" style="background-color: rgb(63, 189, 147);">
                                    <slot name="panelup"></slot>
                                </PanelContainer>
                            </SplitViewView>
                            <SplitViewView :style="{ top: `${height - size}px`, height: `${size}px` }">
                                <PanelContainer class="visible"
                                    style="background-color: rgb(102, 179, 194); border-top: 1px solid rgb(131, 203, 217);">
                                    <slot name="paneldown"></slot>
                                </PanelContainer>
                            </SplitViewView>
                        </SplitViewContainer>
                    </GridBranchNode>
                </SplitViewView>
            </SplitViewContainer>
        </GridBranchNode>
    </MainContainer>
</template>

<style></style>