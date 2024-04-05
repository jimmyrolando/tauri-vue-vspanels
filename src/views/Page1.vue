<script setup lang="ts">
import VSCode from '../layouts/Layout1/VSCode.vue'
import navigation from './nav.vue'
</script>

<template>
    <VSCode>
        <template #main>
                <navigation msg="Vscode-like dinamic Layout" />
        </template>
    </VSCode>
</template>



