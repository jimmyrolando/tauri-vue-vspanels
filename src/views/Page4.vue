<script setup lang="ts">
import Layout4 from '../layouts/Layout4.vue'
import navigation from './nav.vue'
</script>

<template>
    <Layout4>
        <template #right>
            <navigation style="margin-top: 30px;" msg="Simple Layout with 2 static panels" />
        </template>
    </Layout4>
</template>
