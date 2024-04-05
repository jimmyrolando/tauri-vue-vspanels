<script setup lang="ts">
</script>
<template>
    <div class="panel-container">
        <slot></slot>
    </div>
</template>
<style>
.panel-container:not(.visible) {
    display: none;
}

.panel-container {
    width: 100%;
    height: 100%;
}
</style>