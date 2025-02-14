<template>
<contador></contador>
<listadetareas></listadetareas>
</template>

<script>
import Contador from './components/Contador.vue'
import Listadetareas from './components/Listadetareas.vue'

</script>
import { ref} from 'vue'
const tareas = ref([]);
const nuevatarea = ref('');
<style scoped>

</style>