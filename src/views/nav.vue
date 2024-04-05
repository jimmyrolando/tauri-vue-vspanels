<script setup lang="ts">
const props = defineProps(['msg'])
</script>

<template>
    <div class="p-2">

    <h1 class="text-2xl font-bold">{{ props.msg }}</h1>
    <RouterLink to="/page1">Vscode</RouterLink> |
    <RouterLink to="/page2">Page2</RouterLink> |
    <RouterLink to="/page3">Page3</RouterLink> | 
    <RouterLink to="/page4">Page4</RouterLink>
            
</div>
</template>