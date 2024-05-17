<script setup>

 defineProps({
  text: {
    type: String,
  },
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  color: {
   type: String,
  }
});

</script>

<template>
  <v-alert
   :type="type"
   :icon="'$' + color"
   :title="title"
   :text="text"
   :color="color"
 ></v-alert>
</template>
