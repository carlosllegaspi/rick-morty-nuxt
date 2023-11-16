<script setup lang="ts">
import type { PropType } from 'vue';
import { bgColorMap } from '~/src/constants';
import type { Character } from '~/src/types';



const props = defineProps({
  character: {
    type: Object as PropType<Character>,
    required: true
  }
})


const { character } = props

const link = `/character/${character.id}`

</script>

<template>
    <NuxtLink :to="link">
        <div class="p-3 hover:p-5" :class="bgColorMap[character.status]">
            <img :src="character.image" :alt="character.name" />
            <h2 class="text-xl font-semibold pt-2">{{ character.name }}</h2>
            <p class="pt-2 text-sm">Última ubicación conocida: 
                <span class="italic">{{ character.location.name }}</span>
            </p>
        </div>
    </NuxtLink>
</template>