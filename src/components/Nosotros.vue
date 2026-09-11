<script setup lang="ts">
// Nosotros component
</script>

<template>
  <section id="nosotros" class="nosotros-section">
    <div class="container">
      <div class="nosotros-content">
        <div class="nosotros-text">
          <h2 class="section-title">Sobre Ciclo<span class="logo-accent">Verso</span></h2>
          <p class="lead">
            Somos tu guía definitiva en el mundo del ciclismo. Nos dedicamos a analizar, comparar y recomendar 
            las mejores bicicletas y accesorios disponibles en Amazon para que tomes la mejor decisión de compra sin complicaciones.
          </p>
          
          <div class="features">
            <div class="feature">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div class="feature-text">
                <h3>Análisis Detallados</h3>
                <p>Revisamos a fondo cada producto para ofrecerte información clara, objetiva y basada en características reales.</p>
              </div>
            </div>
            
            <div class="feature">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              </div>
              <div class="feature-text">
                <h3>Comparativas Inteligentes</h3>
                <p>Te ayudamos a encontrar la bicicleta perfecta según tu perfil, necesidades y presupuesto, facilitando tu elección.</p>
              </div>
            </div>
            
            <div class="feature">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"></path></svg>
              </div>
              <div class="feature-text">
                <h3>Recomendaciones Confiables</h3>
                <p>Seleccionamos las mejores opciones y ofertas de Amazon para que realices tu compra con total seguridad y confianza.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="nosotros-image">
          <img src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Taller de bicicletas CicloVerso" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nosotros-section {
  padding: 5rem 0;
  background-color: var(--color-background-alt);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-secondary);
  margin-bottom: 1.5rem;
}

.logo-accent {
  color: var(--color-primary);
}

.lead {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--color-text);
  margin-bottom: 3rem;
}

.nosotros-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.feature {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.feature-icon {
  background-color: var(--color-primary);
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-text h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-secondary);
}

.feature-text p {
  color: var(--color-text-light);
  line-height: 1.5;
}

.nosotros-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.nosotros-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.nosotros-image:hover img {
  transform: scale(1.05);
}

@media (max-width: 992px) {
  .nosotros-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .nosotros-image {
    order: -1; /* Muestra la imagen arriba en móviles */
  }
}
</style>