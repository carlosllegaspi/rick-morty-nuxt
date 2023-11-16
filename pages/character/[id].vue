<script setup lang="ts">
import { bgColorMap, API_BASE_URL } from '~/src/constants';
import type { Character } from '~/src/types';

const statusMap = {
    'Alive': 'Vivo',
    'Dead': 'Muerto',
    'unknown': 'Desconocido',
}

const genderMap = {
    'Male': 'Hombre',
    'Female': 'Mujer',
    'unknown': 'Desconocido',
}


const { params: { id } } = useRoute()

const url = `${API_BASE_URL}/character/${id}`

const { data } = useFetch<Character>(url)

</script>


<template>
    <div v-if="!data">Cargando...</div>
    <div v-else>
        <div>
            <NuxtLink to="/" class="flex items-center pb-5 hover:font-bold"><span class="pr-2 text-2xl">&lt;</span>Volver a la lista</NuxtLink>
        </div>
        <div class="p-5" :class="bgColorMap[data.status]">
            <div class="flex flex-col md:flex-row">
                <div class="basis-1/4">
                    <img :src="data.image" :alt="data.name">
                </div>
                <div class="basis-3/4 pt-10 md:pt-0 md:pl-10">
                    <h2 class="text-3xl font-semibold">{{ data.name }}</h2>
                    <div class="pt-5">
                        <ul>
                            <ItemList title="Estado" :term="statusMap[data.status]" />
                            <ItemList title="Número de episodios" :term="data.episode.length.toFixed()" />
                            <ItemList title="Género" :term="genderMap[data.gender]" />
                            <ItemList title="Especie" :term="data.species" />
                            <ItemList v-if="data.type" title="Tipo" :term="data.type" />
                            <ItemList title="Origen" :term="data.origin.name" />
                            <ItemList title="Última localización conocida" :term="data.location.name" />
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <p class="pt-5 italic text-sm text-right">Creado el {{ new Date(data.created).toLocaleDateString() }}</p>
            </div>
        </div>
    </div>
</template>