<script setup lang="ts">
import { panelStore } from './panelStore'

const { togglePanel, showBottomPanel, showLeftPanel, showRightPanel } = panelStore()

</script>
<template>
  <div style="background-color: rgb(50, 50, 51); color: rgb(204, 204, 204); --zoom-factor: 1;">
    <div class="titlebar-container">
      <div data-tauri-drag-region style="top: 0; left: 0; display: block; position: absolute; width: 100%; height: 100%;"></div>
      <div class="titlebar-left"></div>
      <div class="titlebar-center"></div>
      <div class="titltebar-right">
        <div style="display: flex; justify-content: center; position:relative;">
          <div style="height: 100%;">
            <ul
              style="gap:4px; display: flex; align-items: center; height: 100%; width: 100%; padding: 0;margin: 0 auto;">
              <li style="display: inline-block;">
                <a @click="togglePanel('left')" style="display: flex; align-items: center; width: 20px; height: 20px;">
                  <img v-show="showLeftPanel" style="height: 20px; width: 20px;"
                    src="/open-panel-filled-left-svgrepo-com.svg" />
                  <img v-show="!showLeftPanel" style="height: 20px; width: 20px;"
                    src="/open-panel-left-svgrepo-com.svg" />
                </a>
              </li>
              <li style="display: inline-block;">
                <a @click="togglePanel('bottom')"
                  style="display: flex; align-items: center; width: 20px; height: 20px;">
                  <img v-show="showBottomPanel" style="height: 20px; width: 20px;"
                    src="/open-panel-filled-bottom-svgrepo-com.svg" />
                  <img v-show="!showBottomPanel" style="height: 20px; width: 20px;"
                    src="/open-panel-bottom-svgrepo-com.svg" />
                </a>
              </li>
              <li style="display: inline-block;">
                <a @click="togglePanel('right')"
                  style="display: flex; align-items: center;  width: 20px; height: 20px;">
                  <img v-show="showRightPanel" style="height: 20px; width: 20px;"
                    src="/open-panel-filled-right-svgrepo-com.svg" />
                  <img v-show="!showRightPanel" style="height: 20px; width: 20px;"
                    src="/open-panel-right-svgrepo-com.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titlebar-container {
  line-height: 22px;
}

.titlebar-container {
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 1;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  -webkit-user-select: none;
  display: flex;
  height: 100%;
  width: 100%;
}

.titlebar-left {
  order: 0;
  width: 20%;
  flex-grow: 2;
  justify-content: flex-start;
  background-color: aliceblue;
}

.titlebar-center {
  order: 1;
  width: 60%;
  max-width: fit-content;
  min-width: 0;
  margin: 0 10px;
  justify-content: center;
  background-color: antiquewhite;
}

.titlebar-right {
  order: 2;
  width: 20%;
  min-width: min-content;
  flex-grow: 2;
  justify-content: flex-end;
  background-color: aquamarine;
}
</style>