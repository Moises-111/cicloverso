<script setup lang="ts">
// Footer component
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-container">
      <div class="footer-brand">
        <span class="logo-text">Ciclo<span class="logo-accent">Verso</span></span>
        <p class="brand-description">
          Tu tienda especializada en bicicletas de todas las gamas y disciplinas. 
          Pasión por el ciclismo en cada pedalada.
        </p>
      </div>
      
      <div class="footer-links">
        <div class="link-group">
          <h3>Navegación</h3>
          <ul>
            <li><a href="#catalogo">Catálogo</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
          </ul>
        </div>
        
        <div class="link-group">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Envíos y Devoluciones</a></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} CicloVerso. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--color-secondary);
  color: var(--color-text-light);
  padding-top: 4rem;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
}

.logo-text {
  font-size: 2rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.5px;
  display: inline-block;
  margin-bottom: 1rem;
}

.logo-accent {
  color: var(--color-primary);
}

.brand-description {
  color: #aaa;
  line-height: 1.6;
}

.footer-links {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
}

.link-group h3 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.link-group h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30px;
  height: 2px;
  background-color: var(--color-accent);
}

.link-group ul {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.link-group a {
  color: #aaa;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  background-color: #1a1a1a;
  padding: 1.5rem 0;
  text-align: center;
  color: #888;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }
  
  .footer-links {
    gap: 2rem;
  }
}
</style>
