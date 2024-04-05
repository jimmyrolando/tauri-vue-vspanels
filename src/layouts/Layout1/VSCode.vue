<script setup lang="ts">
import { useWindow } from '../../acme'

import TitleBar from './TitleBar.vue'
import WorkSpace from './WorkSpace.vue'
import MainSection from './MainSection.vue'

const { width, height } = useWindow()

const tittleBarSize = 35
const statusBarSize = 22

</script>

<template>
    <MainContainer :style="{ width: `${width}px`, height: `${height}px` }">
        <GridBranchNode class="vertical">
            <SplitViewContainer>

                <SplitViewView :style="{ top: '0px', height: `${tittleBarSize}px` }">
                    <TitleBar :style="{ width: `${width}px`, height: `${tittleBarSize}px` }" />
                </SplitViewView>

                <SplitViewView
                    :style="{ top: `${tittleBarSize}px`, height: `${height - statusBarSize - tittleBarSize}px` }">
                    <WorkSpace>
                        <template #up>
                            <MainSection>
                                <template #left>
                                    <PanelContainer class="visible" style="background-color: rgb(37, 37, 38);">
                                    </PanelContainer>
                                </template>
                                <template #main>
                                    <PanelContainer class="visible"
                                        style="background-color: rgb(30, 30, 30);  color: rgb(204, 204, 204)">
                                        <slot name="main"></slot>
                                    </PanelContainer>
                                </template>
                                <template #right>
                                    <PanelContainer class="visible" style="background-color: rgb(37, 37, 38);">
                                    </PanelContainer>
                                </template>
                            </MainSection>
                        </template>

                        <template #down>
                            <PanelContainer class="visible"
                                style="background-color: rgb(30, 30, 30); border-top: 1px solid rgb(62,62,62);">
                            </PanelContainer>
                        </template>
                    </WorkSpace>

                </SplitViewView>

                <SplitViewView :style="{ top: `${height - statusBarSize}px`, height: `${statusBarSize}px` }">
                    <PanelContainer class="visible" style="background-color: rgb(0, 122, 204);">
                    </PanelContainer>
                </SplitViewView>

            </SplitViewContainer>
        </GridBranchNode>
    </MainContainer>
</template>
