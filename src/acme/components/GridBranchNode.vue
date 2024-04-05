<script setup lang="ts">
defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <div class="grid-branch-node">
        <div class="split-view2" v-bind="$attrs">
            <slot></slot>
        </div>
    </div>
</template>
<style>
.grid-branch-node {
    width: 100%;
    height: 100%;
}

.split-view2 {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>