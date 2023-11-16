<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true,
    },
    term: {
        type: String,
        required: true,
    }
})
</script>


<template>
    <li><span class="font-semibold">{{ title }}: </span>{{ term }}</li>
</template>