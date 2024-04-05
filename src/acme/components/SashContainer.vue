<script setup lang="ts">
import { usePlatform } from '../'

const { platform } = usePlatform()

</script>
<template>
    <div class="sash-container" :class="{'mac': platform == 'macos'}">
        <slot></slot>
    </div>
</template>
<style>
:root {
    --vscode-sash-size: 4px;
    --vscode-sash-hoverBorder: #007fd4;
    --vscode-sash-hover-size: 4px;
}

.sash-container {
    height: 100%;
    position: absolute;
    width: 100%;
}

.sash-container:has(.sash.active) {
    pointer-events: auto;
    z-index: 34;
}

.sash {
    position: absolute;
    touch-action: none;
    z-index: 35;
}

.sash.disabled {
    cursor: default !important;
    pointer-events: none !important;
}

.sash:before {
    background: transparent;
    content: "";
    height: 100%;
    pointer-events: none;
    position: absolute;
    width: 100%;
}

.sash:before {
    transition: background-color .1s ease-out;
}

.sash.horizontal:before {
    height: var(--vscode-sash-hover-size);
    top: calc(50% - var(--vscode-sash-hover-size)/2);
}

.sash.vertical:before {
    width: var(--vscode-sash-hover-size);
    left: calc(50% - var(--vscode-sash-hover-size)/2);
}

.sash.active:before,
.sash.hover:before {
    background: var(--vscode-sash-hoverBorder);
}

.sash-container.mac:has(.sash.horizontal),
.sash-container.mac>.sash.horizontal {
    cursor: row-resize;
}

.sash.horizontal {
    cursor: ns-resize;
    height: var(--vscode-sash-size);
    left: 0;
    width: 100%;
}

.sash-container.mac:has(.sash.vertical),
.sash-container.mac>.sash.vertical {
    cursor: col-resize;
}

.sash.vertical {
    cursor: ew-resize;
    top: 0;
    width: var(--vscode-sash-size);
    height: 100%;
}

*:has(.sash.vertical.minimum.active),
.sash.vertical.minimum {
    cursor: e-resize;
}

*:has(.sash.vertical.maximum.active),
.sash.vertical.maximun {
    cursor: w-resize;
}

*:has(.sash.horizontal.minimum.active),
.sash.horizontal.minimum {
    cursor: n-resize;
}

*:has(.sash.horizontal.maximum.active),
.sash.horizontal.maximum {
    cursor: s-resize;
}
</style>