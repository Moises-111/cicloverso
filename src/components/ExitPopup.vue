<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const hasShown = ref(false)
const email = ref('')

const handleMouseLeave = (e: MouseEvent) => {
  // Detectar si el cursor sale por la parte superior de la ventana
  if (e.clientY <= 0 && !hasShown.value) {
    isVisible.value = true
    hasShown.value = true
  }
}

const closePopup = () => {
  isVisible.value = false
}

const subscribe = () => {
  if (email.value) {
    // Aquí iría la lógica real de suscripción
    alert(`¡Gracias por suscribirte con ${email.value}!`)
    closePopup()
  }
}

onMounted(() => {
  // Añadir listener para detectar intención de salida
  document.addEventListener('mouseleave', handleMouseLeave)
  
  // Por si acaso, también mostrar después de 30 segundos si no han salido
  setTimeout(() => {
    if (!hasShown.value) {
      isVisible.value = true
      hasShown.value = true
    }
  }, 30000)
})

onUnmounted(() => {
  document.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isVisible" class="popup-overlay" @click.self="closePopup">
      <div class="popup-content" role="dialog" aria-labelledby="popup-title" aria-modal="true">
        <button class="close-btn" @click="closePopup" aria-label="Cerrar popup">&times;</button>
        
        <div class="popup-body">
          <h2 id="popup-title">¡No te vayas sin tu descuento!</h2>
          <p>Suscríbete a nuestro boletín y recibe un <strong>10% de descuento</strong> en tu primera bicicleta.</p>
          
          <form @submit.prevent="subscribe" class="subscribe-form">
            <label for="email-input" class="sr-only">Correo electrónico</label>
            <input 
              type="email" 
              id="email-input" 
              v-model="email" 
              placeholder="Tu correo electrónico" 
              required
            />
            <button type="submit" class="btn btn-accent">¡Quiero mi descuento!</button>
          </form>
          
          <button class="no-thanks" @click="closePopup">No gracias, prefiero pagar precio completo</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 1rem;
}

.popup-content {
  background-color: white;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.4s ease-out;
  overflow: hidden;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #999;
  cursor: pointer;
  transition: color 0.2s;
  z-index: 10;
}

.close-btn:hover {
  color: var(--color-secondary);
}

.popup-body {
  padding: 3rem 2rem;
  text-align: center;
}

.popup-body h2 {
  color: var(--color-primary);
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.popup-body p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
}

.subscribe-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.subscribe-form input {
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
}

.subscribe-form input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(0, 82, 204, 0.2);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.no-thanks {
  background: none;
  border: none;
  color: #888;
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s;
}

.no-thanks:hover {
  color: #555;
}
</style>
