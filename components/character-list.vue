<script setup lang="ts">

import { API_BASE_URL } from '~/src/constants';
import type { Character } from '~/src/types';

type APIBody = {
    results: Array<Character>
    info: {
        pages: number
    }
}

const { query: { page } } = useRoute()


const actualPage = page ? parseInt(page as string) : 1

const { data } = await useFetch<APIBody>(`${API_BASE_URL}/character?page=${actualPage}`)

</script>

<template>
    <div v-if="!data">Cargando...</div>
    <div v-else >
        <div class="pb-20 grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4">
            <CharacterCard v-for="character in data.results" :key="character.id" :character="character" />
        </div>
        <Paginator :actual-page="actualPage" :total-page="data.info.pages" />
    </div>
</template>