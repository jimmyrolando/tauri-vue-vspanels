<script setup lang="ts">
import Layout4 from '../layouts/Layout4.vue'
import navigation from './nav.vue'
</script>

<template>
    <Layout4>
        <template #right>
            <navigation style="margin-top: 30px;" msg="simple two panels layout" />
        </template>
    </Layout4>
</template>
