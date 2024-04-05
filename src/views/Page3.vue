<script setup lang="ts">
import Layout3 from '../layouts/Layout3.vue';
import navigation from './nav.vue'

</script>

<template>
    <Layout3>
        <template #titlebar>
            <div data-tauri-drag-region
                style="top: 0; left: 0; display: block; position: absolute; width: 100%; height: 100%; background-color: rgb(243, 243, 243);">
            </div>
        </template>
        <template #panelup>
            <navigation msg="Simple Layout with 2 dynamic panels" />
        </template>
    </Layout3>
</template>