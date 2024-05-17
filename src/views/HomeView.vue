<script setup lang="ts">
</script>

<template>
  <div class="home">
    <div>
      <p>Prueba tecnica</p>
      <p>Ambar Ballen</p>

      <div class="credentials">
        <p class="login">Recuerda iniciar sesion</p>
        <span><strong>Usuario:</strong> correo@prueba.com</span>
        <span><strong>Contraseña:</strong> Prueba111 </span>
      </div>
      
    </div>
    <img src="../assets/background.jpg" alt="">
  </div>
</template>

<style scoped>
.home{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
  align-items: center;
}

p{
  font-size: 3rem;
  text-align: center;
}

.login{
  font-size: 20px;
  margin-bottom: 20px;
}

.credentials{
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
}

img{
    width: 100%;
  }
</style>


