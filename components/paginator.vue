<script setup lang="ts">
defineProps({
  actualPage: {
    type: Number,
    required: true
  },
  totalPage: {
    type: Number,
    required: true
  }
})

</script>


<template>
    <div class="flex items-center justify-center w-full">
        <NuxtLink 
          v-if="actualPage>1"
          class="pr-5 text-2xl hover:font-bold" 
          :to="{ path: '/', query: { page: actualPage - 1 } }"
          >
          &lt;
        </NuxtLink>
        <div v-else class="pr-5 text-2xl text-gray-300">
          &lt;
        </div>
        {{ actualPage }}
        /
        {{ totalPage }}
        <NuxtLink 
          v-if="actualPage<totalPage"
          class="pl-5 text-2xl hover:font-bold" 
          :to="{ path: '/', query: { page: actualPage + 1 } }">
          >
        </NuxtLink>
        <div v-else class="pl-5 text-2xl text-gray-300">
          >
        </div>
    </div>
</template>