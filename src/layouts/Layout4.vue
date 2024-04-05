<script setup lang="ts">
import { useWindow, usePlatform } from '../acme'
import SplitViewView from '../acme/components/SplitViewView.vue';

const { platform } = usePlatform()
const { width, height } = useWindow()

</script>
<template>
    <MainContainer :style="{ width: `${width}px`, height: `${height}px` }">
        <GridBranchNode class="horizontal">
            <SplitViewContainer>
                <div data-tauri-drag-region v-if="platform == 'macos'"
                    style="top: 0; left: 0; display: block; position: absolute; width: 100%; height: 30px; background-color: transparent; z-index: 40;">
                </div>

                <SplitViewView :style="{ left: '0px', width: `216px` }">
                    <PanelContainer class="visible" style="background-color: rgb(225, 225, 225);">
                        <slot name="left"></slot>
                    </PanelContainer>
                </SplitViewView>
                <SplitViewView :style="{ left: '216px', width: `${width - 216}px` }">
                    <PanelContainer class="visible" style="background-color: rgb(237, 236, 234);">
                        <slot name="right"></slot>
                    </PanelContainer>
                </SplitViewView>
            </SplitViewContainer>
        </GridBranchNode>
    </MainContainer>
</template>