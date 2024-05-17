<script setup>
import { onMounted, reactive, ref } from "vue";
import { FormKit } from "@formkit/vue";
import { useRouter, useRoute } from "vue-router";
import ClienteService from "../../services/ClienteService";

const router = useRouter();
const route = useRoute();

const { id } = route.params;

const formData = reactive({});

onMounted(() => {
  ClienteService.obtenerCliente(id)
    .then(({ data }) => {
      Object.assign(formData, data); 
    })
    .catch((error) => console.log(error));
});

const handleSubmit = (data) => {
  ClienteService.actualizarCliente(id, data)
    .then(() => router.push({ name: "admin-clientes" }))
    .catch((error) => console.log(error));
};
</script>

<template>
  <div>
    <h1 class="text-h4 text-center">Editar Cliente</h1>

    <div>
      <div class="form">
        <FormKit
          type="form"
          submit-label="Guardar Cambios"
          incomplete-message="No se pudo enviar, revisa los mensajes"
          @submit="handleSubmit"
          :value="formData"
        >
          <FormKit
            type="text"
            label="Nombre"
            name="nombre"
            placeholder="Nombre de Cliente"
            validation="required"
            :validation-messages="{
              required: 'El Nombre del Cliente es Obligatorio',
            }"
            v-model="formData.nombre"
          />

          <FormKit
            type="text"
            label="Apellido"
            name="apellido"
            placeholder="Apellido de Cliente"
            validation="required"
            :validation-messages="{
              required: 'El Apellido del Cliente es Obligatorio',
            }"
            v-model="formData.apellido"
          />

          <FormKit
            type="text"
            label="Email"
            name="email"
            placeholder="Email de Cliente"
            validation="required|email"
            :validation-messages="{
              required: 'El Email del Cliente es Obligatorio',
              email: 'Coloca un email válido',
            }"
            v-model="formData.email"
          />

          <FormKit
            type="text"
            label="Teléfono"
            name="telefono"
            placeholder="Teléfono: XXX-XXX-XXXX"
            validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{ matches: 'El Formato no es válido' }"
            v-model="formData.telefono"
          />

          <FormKit
            type="text"
            name="empresa"
            label="Empresa"
            placeholder="Empresa de Cliente"
            v-model="formData.empresa"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 50%;
  margin: auto;
  margin-top: 30px;
}

.formkit-messages {
  max-width: 50%;
  margin: auto;
}
</style>