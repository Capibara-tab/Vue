<template>
<div class = "sidebar">
    <h2>Bienvenidos</h2>
    <h3>Nombre: {{ Nombre }} </h3>
    <h3>Email:{{ Email }}</h3>
    <ul>
    <li> <router-link to="/contador "> Contador  </router-link> </li>
    <li> <router-link to="/lista-de-tareas "> Lista de tareas </router-link> </li>
    <li> <router-link to="/registrar"> Registrar </router-link> </li>
</ul>
</div>

</template>

<script setup>
import { useRegistrarStore } from '../../modules/registros/stores/RegistrarStore.js';
import { ref, watch} from 'vue';
const registrarStore = useRegistrarStore();
const nombre = ref (registrarStore.nombre.value);
const email = ref (registrarStore.email.value);
watch (() => registrarStore.nombre,(newValue)=>{
    nombre.value = newValue;
})
watch (() => registrarStore.email,(newValue)=>{
    email.value = newValue;
})
</script>

<style>
.sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>