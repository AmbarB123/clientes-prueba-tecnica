<script setup lang="ts">

import { useForm, useField} from 'vee-validate'
import { loginSchema as validationSchema } from "../validation/loginShema";
import { useAuthStore } from "../stores/auth";
import Alerts from "../components/Alerts.vue";


const {handleSubmit} = useForm( {validationSchema} ) 
const auth = useAuthStore()

const email = useField('email')
const password = useField('password')

const submit = handleSubmit((values:any) => auth.login(values))

</script>

<template>
   

   <v-card
      flat
      max-width="600"
      class="mx-auto my-10"
   >
      <h1 class="text-h3">Login</h1>
      <p class="text-h5">Incia sesion con tu correo</p>

      <Alerts
         v-if="auth.hasError"
         title="Error!"
         :text="auth.errorMessage"
         type="error"
         color="error"
         class="my-5"
      />

      <v-form class="mt-5">

         <v-text-field 
            type="email"
            label="E-mail"
            bg-color="blue-grey-lighten-5"
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            class="mb-3"
         />

         <v-text-field 
            type="password"
            label="Password"
            bg-color="blue-grey-lighten-5"
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            class="mb-3"
         />

         <v-btn
            block
            color="light-blue-darken-4"
            @click="submit"
         >
            Iniciar sesion
         </v-btn>
      </v-form>
   </v-card>
</template>