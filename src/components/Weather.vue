<template>
{{ weatherStore.temperatura }};
</template>

<script setup>
import { useWeatherStore} from '../componsables/useWeather.js';
import { onMounted } from 'vue';
import { useWeatherStore} from '../stores/weatherStore.js';

const weatherStore = useWeatherStore();

onMounted(async () => {
    useWeather();
})
</script>

<style scoped>

</style>