<script setup lang="ts">
import VSCode from '../layouts/Layout1/VSCode.vue'
import navigation from './nav.vue'
</script>

<template>
    <VSCode>
        <template #main>
                <navigation msg="Vscode-like Layout with 3 dynamic panels" />
        </template>
    </VSCode>
</template>



