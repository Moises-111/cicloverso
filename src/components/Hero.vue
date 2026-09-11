<script setup lang="ts">
// Hero component
</script>

<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="hero-title">Domina cada terreno, conquista cada ruta</h1>
      <p class="hero-subtitle">
        Descubre el catálogo más completo de bicicletas para todos los niveles. 
        Desde el asfalto de la ciudad hasta los senderos más salvajes, en CicloVerso 
        tenemos la máquina perfecta para tu próxima aventura.
      </p>
      <div class="hero-actions">
        <a href="#catalogo" class="btn btn-accent">Explorar Catálogo</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65); /* Overlay oscuro para legibilidad */
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 800px;
  text-align: center;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 400;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

.hero-actions .btn {
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
