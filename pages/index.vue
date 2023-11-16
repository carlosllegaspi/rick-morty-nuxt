<template>
    <nuxt-child :key="$route.query.page">
        <CharacterList />
    </nuxt-child>
</template>