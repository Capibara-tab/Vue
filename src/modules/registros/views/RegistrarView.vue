<template>
    <div>
        <h2> Formulario de registro</h2>
        <Form :validation-schema="schemas" @submit="onSubmit">
            <div class="form">
                <label for="nombre"> Nombre: </label>
                <Field type="text"name="nombre" id="nombre" placeholder="Ingrese su nombre"/>
                <ErrorMessage name="nombre" ></ErrorMessage>
            </div>
            <div class="form">
                <label for="correo"> Correo:</label>
                <Field type="email" name="correo"id="correo" placeholder="Ingrese su correo"/>
                <ErrorMessage name="correo" ></ErrorMessage>
            </div>
            <div class ="form">
                <button type="submit">Registrar</button>
            </div>
        </Form>
    </div>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
import { schema} from '../schemas/ValidationSchemas.js';

const onSubmit = () => {
    console.log('Se ha enviado el formulario');
};
</script>

<style scoped> 
.form {
    margin-bottom: 10px;
}
</style>