<script setup lang="ts">
</script>
<template>
    <div class="split-view-view">
        <slot></slot>
    </div>
</template>
<style>
.split-view-view {
    position: absolute;
}

.split-view2.horizontal>.scrollable-element>.split-view-container>.split-view-view {
    height: 100%;
}

.split-view2.vertical>.scrollable-element>.split-view-container>.split-view-view {
    width: 100%;
}

.split-view-view.pointer-events-none {
    pointer-events: none;
}
</style>