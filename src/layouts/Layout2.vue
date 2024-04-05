<script setup lang="ts">
import { useWindow, usePlatform } from '../acme'

const { platform } = usePlatform()
const { width, height } = useWindow()

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
                    <GridBranchNode class="horizontal">
                        <SplitViewContainer>

                            <SplitViewView :style="{ left: '0px', width: `60px` }">
                                <PanelContainer class="visible" style="background-color: rgb(153, 153, 153);">
                                </PanelContainer>
                            </SplitViewView>

                            <SplitViewView :style="{ left: `60px`, width: `250px` }">
                                <PanelContainer class="visible" style="background-color: rgb(225, 225, 225);">
                                </PanelContainer>
                            </SplitViewView>

                            <SplitViewView :style="{ left: `310px`, right: `0px` }">
                                <PanelContainer class="visible" style="background-color: rgb(237, 236, 234);">
                                    <slot name="right"></slot>
                                </PanelContainer>
                            </SplitViewView>

                        </SplitViewContainer>
                    </GridBranchNode>
                </SplitViewView>
            </SplitViewContainer>
        </GridBranchNode>
    </MainContainer>
</template>