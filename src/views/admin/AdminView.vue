<script setup>
import { onMounted, ref, computed } from "vue";
import axios from "../../api/axios";
import Cliente from "../../components/Cliente.vue";
import Alerts from "../../components/Alerts.vue";
import ClienteService from "../../services/ClienteService";

const clientes = ref([]);

onMounted(() => {
  ClienteService.obtenerClientes()
    .then(({ data }) => (clientes.value = data))
    .catch((error) => console.log("Hubo un error"));
});

const existenClientes = computed(() => {
  return clientes.value.length > 0;
});

const actualizarEstado = ({ id, estado }) => {
  ClienteService.cambiarEstado(id, { estado: !estado })
    .then(() => {
      const i = clientes.value.findIndex((cliente) => cliente.id === id);
      clientes.value[i].estado = !estado;
    })
    .catch((error) => console.log(error));
};

const eliminarCliente = (id) => {
  ClienteService.eliminarCliente(id)
    .then(() => {
      clientes.value = clientes.value.filter((cliente) => cliente.id !== id);
    })
    .catch((error) => console.log(error));
};
</script>

<template>
  <h1 class="text-h4 text-center">Ver Cliente</h1>

  <div v-if="existenClientes">
    <div class="my-2">
      <v-card flat max-width="800" class="mx-auto my-10">
        <v-table fixed-header>
          <thead>
            <tr>
              <th scope="col" class="text-left text-gray-600">Nombre</th>
              <th scope="col" class="text-left text-gray-600">Empresa</th>
              <th scope="col" class="text-left text-gray-600">Estado</th>
              <th scope="col" class="text-left text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <Cliente
              v-for="cliente in clientes"
              :key="cliente.id"
              :cliente="cliente"
              @actualizar-estado="actualizarEstado"
              @eliminar-cliente="eliminarCliente"
            />
          </tbody>
        </v-table>
      </v-card>
    </div>
  </div>

  <div class="vacio" v-else>
    <Alerts
      title="Error!"
      text="No hay registros"
      type="error"
      color="error"
      class="my-5"
    />
  </div>
</template>

<style scoped>
.vacio {
  width: 400px;
  margin: auto;
  margin-top: 20px;
}
</style>