<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router'

    const props = defineProps({
        cliente: {
            type: Object
        }
    })

    defineEmits(['actualizar-estado', 'eliminar-cliente'])

    const nombreCliente = computed(() => {
        return props.cliente.nombre + ' ' + props.cliente.apellido
    })

    const estadoCliente = computed(() => {
        return props.cliente.estado
    })

    
</script>


<template>
    <tr>
        <td>
            <p>{{ nombreCliente }}</p>
            <p>{{ cliente.email }} </p>
        </td>
        <td>
            <p>{{cliente.empresa === undefined ? 'Sin datos' : cliente.empresa}}</p>
        </td>
        <td>
           <v-btn
                :color="[estadoCliente ? 'light-green-accent-4' : 'deep-orange-darken-4']"
                width="100"
                variant="outlined"
                @click="$emit('actualizar-estado', 
                    {id: cliente.id, estado: cliente.estado})"
             >
                {{ estadoCliente ? 'Activo' : 'Inactivo' }}
           </v-btn>
        </td>
        <td class="flex-btn">
            <v-btn :to="{ name: 'admin-editar-cliente', params: { id: cliente.id } }" variant="plain" color="blue-accent-4">Editar</v-btn>

            <v-btn @click="$emit('eliminar-cliente', cliente.id)" variant="plain" color="deep-orange">Eliminar</v-btn>
        </td>
    </tr>
</template>
<style scoped>

.flex-btn{
    display: flex;
    gap: 15px;
    align-items: center;
}

</style>
