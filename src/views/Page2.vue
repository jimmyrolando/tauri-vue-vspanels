<script setup lang="ts">
import Layout2 from '../layouts/Layout2.vue'
import navigation from './nav.vue'

</script>

<template>
    <Layout2>
        <template #titlebar>
            <div data-tauri-drag-region
                style="top: 0; left: 0; display: block; position: absolute; width: 100%; height: 100%; background-color: rgb(243, 243, 243);">
            </div>
        </template>
        <template #right>
            <navigation msg="static layout" />
        </template>
    </Layout2>
</template>
