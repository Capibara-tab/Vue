<template>
  <h1>Hello World!</h1>
  <p> { contador } </p>
  <button> @click="incrementar()"</button>
  <button>@click="decrementar()"</button>
</template>

<script>
import { ref } from 'vue';
const contador = ref(0);
const incrementar = () => {
  contador.value++;
};
const decrementar = () => {
  contadpr.value--;
};

</script

<style>
p {
  color : red;
}
</style>