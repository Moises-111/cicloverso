<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ExitPopup from './components/ExitPopup.vue'
</script>

<template>
  <Header />
  
  <RouterView />
  
  <Footer />
  
  <ExitPopup />
</template>

<style>
/* Los estilos globales están en src/assets/main.css */
</style>
