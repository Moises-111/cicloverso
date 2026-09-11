<script setup lang="ts">
// Header component
</script>

<template>
  <header class="site-header">
    <div class="container header-container">
      <div class="logo">
        <router-link to="/">
          <span class="logo-text">Ciclo<span class="logo-accent">Verso</span></span>
        </router-link>
      </div>
      <nav class="main-nav" aria-label="Navegación principal">
        <ul>
          <li><router-link :to="{ path: '/', hash: '#catalogo' }">Catálogo</router-link></li>
          <li><router-link to="/comparador">Comparador</router-link></li>
          <li><router-link to="/perfil-ciclista" class="highlight-link">Descubre tu perfil</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#nosotros' }">Nosotros</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background-color: var(--color-background);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-text {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--color-secondary);
  letter-spacing: -0.5px;
}

.logo-accent {
  color: var(--color-primary);
}

.main-nav ul {
  display: flex;
  gap: 2rem;
}

.main-nav a {
  font-weight: 600;
  color: var(--color-text);
  transition: color 0.3s ease;
}

.main-nav a:hover {
  color: var(--color-accent);
}

.highlight-link {
  color: var(--color-primary) !important;
  font-weight: 700 !important;
}

.highlight-link:hover {
  color: var(--color-secondary) !important;
}

@media (max-width: 768px) {
  .main-nav {
    display: none; /* Simplificado para mobile, se podría añadir un menú hamburguesa */
  }
}
</style>
