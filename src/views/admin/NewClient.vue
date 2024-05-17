<script setup>
import { FormKit } from "@formkit/vue";
import { useRouter } from "vue-router";
import axios from "axios";
import ClienteService from "../../services/ClienteService";

const router = useRouter();

const handleSubmit = (data) => {
  data.estado = 1;
  ClienteService.agregarCliente(data)
    .then((response) => {
      router.push({ name: "admin-clientes" });
    })
    .catch((error) => console.log(error));
};
</script>

<template>
  <div>
    <h1 class="text-h4 text-center">Agregar Cliente</h1>

    <div>
      <div class="form">
        <FormKit
          type="form"
          submit-label="Agregar Cliente"
          incomplete-message="No se pudo enviar, revisa los mensajes"
          @submit="handleSubmit"
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
          />

          <FormKit
            type="text"
            label="Teléfono"
            name="telefono"
            placeholder="Teléfono: XXX-XXX-XXXX"
            validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{ matches: 'El Formato no es válido' }"
          />

          <FormKit
            type="text"
            name="empresa"
            label="Empresa"
            placeholder="Empresa de Cliente"
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