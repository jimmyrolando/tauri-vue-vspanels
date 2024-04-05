<script setup lang="ts">
</script>
<template>
    <div class="scrollable-element">
        <div class="split-view-container">
            <slot></slot>
        </div>
    </div>
</template>
<style>
.scrollable-element {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.split-view-container {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
}
</style>