# clientes-prueba-tecnica

## Descripción

Este proyecto es una prueba técnica desarrollada utilizando Vue 3, TypeScript, Vuetify, Vee-validate, Formik, Firebase, Vuefire, Pinia y JSON Server. El objetivo del proyecto es demostrar la implementación de un sistema de autenticación y un CRUD de clientes.

## Tecnologías Utilizadas

- **Vue 3:** Framework JavaScript para construir interfaces de usuario.
- **TypeScript:** Superconjunto de JavaScript que añade tipos estáticos.
- **Vuetify:** Librería de componentes UI basada en Material Design.
- **Vee-validate:** Plugin de validación de formularios para Vue.js.
- **Formik:** Biblioteca para la gestión de formularios en React (adaptada a Vue en este proyecto).
- **Firebase:** Plataforma para el desarrollo de aplicaciones web y móviles.
- **Vuefire:** Integración de Firebase con Vue.js.
- **Pinia:** Biblioteca de gestión de estado para Vue.js.
- **JSON Server:** Servidor REST API para simular una base de datos.

## Funcionalidades

- **Autenticación de Usuarios:** Utilizando Firebase para la autenticación.
- **CRUD de Clientes:** Crear, leer, actualizar y eliminar información de clientes.
- **Formularios con Validación:** Implementación de formularios utilizando Vee-validate y Formik.

## Configuración del Proyecto

### Instalación

1. Clonar el repositorio:
    ```sh
    git clone https://github.com/AmbarB123/clientes-prueba-tecnica.git
    cd clientes-prueba-tecnica
    ```

2. Instalar las dependencias:
    npm install
    ```

### Configuración de JSON Server

Para ejecutar el JSON Server y simular una base de datos, usa el siguiente comando:

```sh
json-server --watch db.json
```

### CONFIG .env.local

VITE_FIREBASE_API_KEY = AIzaSyCKxv_Ox1qxc4YMvyiNUOAw8ZngJUygCx0
VITE_FIREBASE_AUTH_DOMAIN = vue-listado-clientes.firebaseapp.com
VITE_FIREBASE_PROJECT_ID =  vue-listado-clientes
VITE_FIREBASE_STORAGE_BUCKET =  vue-listado-clientes.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID =  962955410361
VITE_FIREBASE_APP_ID = 1:962955410361:web:cc77fb51c8931d74f11468

### Datos de prueba

Para ingresar y tener una interacción completa con la aplicación, usa las siguientes credenciales:

**Usuario:** correo@prueba.com
**Contraseña:** Prueba111 (con la primera letra en mayúscula)
