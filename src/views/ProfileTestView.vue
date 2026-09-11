<script setup lang="ts">
import { ref, computed } from 'vue'
import { products } from '@/data/products'
import type { Product } from '@/data/products'

// Tipos
interface Question {
  id: number
  title: string
  options: Option[]
}

interface Option {
  id: string
  icon: string
  text: string
  value: any
}

// Estado del test
const currentStep = ref(0)
const answers = ref<Record<number, any>>({})
const isAnimating = ref(false)
const showResults = ref(false)
const fallbackMessage = ref('')

// Preguntas
const questions: Question[] = [
  {
    id: 1,
    title: '¿Dónde vas a usar tu bici principalmente?',
    options: [
      { id: 'q1_1', icon: '🏙️', text: 'Por la ciudad — calles, carril bici, semáforos', value: 'ciudad' },
      { id: 'q1_2', icon: '🌲', text: 'Por el monte — senderos, caminos de tierra, trail', value: 'montaña' },
      { id: 'q1_3', icon: '🗺️', text: 'Un poco de todo — ciudad y naturaleza', value: 'mixto' }
    ]
  },
  {
    id: 2,
    title: '¿Cuánto sueles pedalear en un día?',
    options: [
      { id: 'q2_1', icon: '⚡', text: 'Trayectos cortos, menos de 20 km', value: 30 },
      { id: 'q2_2', icon: '🚴', text: 'Rutas medias, entre 20 y 60 km', value: 55 },
      { id: 'q2_3', icon: '🏔️', text: 'Rutas largas, más de 60 km', value: 90 }
    ]
  },
  {
    id: 3,
    title: '¿Cómo son los caminos por los que te mueves?',
    options: [
      { id: 'q3_1', icon: '🟢', text: 'Llano, sin apenas desnivel', value: 0 },
      { id: 'q3_2', icon: '🟡', text: 'Alguna cuesta puntual', value: 350 },
      { id: 'q3_3', icon: '🔴', text: 'Muchas cuestas o desnivel importante', value: 500 }
    ]
  },
  {
    id: 4,
    title: '¿Cuánto pesas aproximadamente?',
    options: [
      { id: 'q4_1', icon: '🪶', text: 'Menos de 80 kg', value: 79 },
      { id: 'q4_2', icon: '⚖️', text: 'Entre 80 y 100 kg', value: 99 },
      { id: 'q4_3', icon: '🏋️', text: 'Más de 100 kg', value: 110 }
    ]
  },
  {
    id: 5,
    title: '¿Qué valoras más en tu bicicleta?',
    options: [
      { id: 'q5_1', icon: '😌', text: 'Que sea cómoda y fácil de usar', value: 'comodidad' },
      { id: 'q5_2', icon: '💪', text: 'Que tenga potencia y buen rendimiento', value: 'rendimiento' },
      { id: 'q5_3', icon: '🔋', text: 'Que llegue lejos sin recargar (o autonomía en general)', value: 'autonomia' },
      { id: 'q5_4', icon: '💰', text: 'La mejor relación calidad-precio', value: 'calidad_precio' }
    ]
  },
  {
    id: 6,
    title: '¿Cuál es tu presupuesto?',
    options: [
      { id: 'q6_1', icon: '💚', text: 'Menos de 800€ — quiero algo práctico y económico', value: 'entrada' },
      { id: 'q6_2', icon: '💛', text: 'Entre 800€ y 1.500€ — buena relación calidad-precio', value: 'media' },
      { id: 'q6_3', icon: '🏆', text: 'Más de 1.500€ — quiero lo mejor sin mirar el precio', value: 'alta' }
    ]
  }
]

// Navegación
const selectOption = (questionId: number, value: any) => {
  if (isAnimating.value) return
  
  answers.value[questionId] = value
  
  if (currentStep.value < questions.length - 1) {
    isAnimating.value = true
    setTimeout(() => {
      currentStep.value++
      isAnimating.value = false
    }, 300)
  } else {
    calculateResults()
  }
}

const goBack = () => {
  if (currentStep.value > 0 && !isAnimating.value) {
    isAnimating.value = true
    setTimeout(() => {
      currentStep.value--
      isAnimating.value = false
    }, 300)
  }
}

const resetTest = () => {
  currentStep.value = 0
  answers.value = {}
  showResults.value = false
  fallbackMessage.value = ''
  recommendedProducts.value = []
}

// Resultados
const recommendedProducts = ref<{ product: Product, score: number }[]>([])

const calculateResults = () => {
  const p1_uso = answers.value[1]
  const p2_autonomia = answers.value[2]
  const p3_potencia = answers.value[3]
  const p4_peso = answers.value[4]
  const p5_prioridad = answers.value[5]
  const p6_gama = answers.value[6]

  const getFilteredAndScored = (relaxGama = false, relaxAutonomia = false) => {
    let filtered = products.filter(p => {
      // Filtro 1: Uso
      let passUso = false
      if (p1_uso === 'ciudad') {
        passUso = ['urbana', 'ruta', 'electrica'].includes(p.category || '')
      } else if (p1_uso === 'montaña') {
        passUso = ['montana', 'electrica'].includes(p.category || '')
      } else {
        passUso = true // mixto acepta todo
      }
      if (!passUso) return false

      // Filtro 2: Autonomía
      if (!relaxAutonomia && p.autonomia_km !== undefined) {
        if (p.autonomia_km < p2_autonomia) return false
      }

      // Filtro 3: Potencia
      if (p.potencia_w !== undefined) {
        if (p.potencia_w < p3_potencia) return false
      }

      // Filtro 4: Peso (asumimos 120kg max para todas si no está definido)
      const pesoMax = 120
      if (p4_peso >= pesoMax) return false

      // Filtro 5: Precio (Gama)
      if (!relaxGama && p.gama !== p6_gama) return false

      return true
    })

    // Puntuación
    return filtered.map(p => {
      let score = 0

      // Autonomía (hasta 20 pts)
      const auto = p.autonomia_km || 0
      score += Math.min((auto / 90) * 20, 20)

      // Potencia (hasta 15 pts)
      const pot = p.potencia_w || 0
      score += Math.min((pot / 500) * 15, 15)

      // Prioridad (hasta 30 pts)
      let prioScore = 0
      if (p5_prioridad === 'comodidad') prioScore = (p.score_comodidad / 10) * 30
      else if (p5_prioridad === 'rendimiento') prioScore = (p.score_rendimiento / 10) * 30
      else if (p5_prioridad === 'autonomia') prioScore = Math.min((auto / 90) * 30, 30)
      else if (p5_prioridad === 'calidad_precio') prioScore = (p.score_calidad_precio / 10) * 30
      score += prioScore

      // Resto de scores (hasta 20 pts)
      const avgScore = (p.score_rendimiento + p.score_comodidad + p.score_durabilidad + p.score_calidad_precio + p.score_peso + p.score_versatilidad) / 6
      score += (avgScore / 10) * 20

      // Garantía (hasta 5 pts)
      score += Math.min((p.garantia_años / 2) * 5, 5)

      // Valoración (hasta 10 pts)
      score += ((p.valoracion_media || 0) / 5) * 10

      return { product: p, score: Math.round(score) }
    }).sort((a, b) => b.score - a.score)
  }

  let results = getFilteredAndScored(false, false)
  fallbackMessage.value = ''

  if (results.length === 0) {
    results = getFilteredAndScored(true, false)
    if (results.length > 0) {
      fallbackMessage.value = 'No encontramos opciones exactas en tu presupuesto, pero estas son las mejores alternativas.'
    } else {
      results = getFilteredAndScored(true, true)
      if (results.length > 0) {
        fallbackMessage.value = 'Hemos ajustado los filtros de presupuesto y autonomía para mostrarte las mejores opciones disponibles.'
      } else {
        // Si aún no hay, mostrar las mejores puntuadas en general
        results = products.map(p => ({ product: p, score: 50 })).slice(0, 2)
        fallbackMessage.value = 'Mostrando las opciones más populares de nuestro catálogo.'
      }
    }
  }

  recommendedProducts.value = results.slice(0, 2)
  showResults.value = true
}

// Perfil Ciclista
const userProfile = computed(() => {
  const p1 = answers.value[1]
  const p2 = answers.value[2]
  const p3 = answers.value[3]
  const p5 = answers.value[5]
  const p6 = answers.value[6]

  if (p1 === 'ciudad' && p2 <= 55 && p3 <= 350) {
    return {
      emoji: '🏙️',
      name: 'El Commuter Urbano',
      desc: 'Eres eficiencia pura. Tu bici en CicloVerso es una herramienta, no un capricho: quieres moverte sin complicaciones, aparcar fácil y olvidarte del resto.'
    }
  }
  if (p1 === 'mixto' && p2 === 90 && p5 === 'autonomia') {
    return {
      emoji: '🌿',
      name: 'El Explorador de Ruta',
      desc: 'Para ti pedalear es una experiencia total. Buscas modelos que aguanten el día entero y te lleven lejos, por asfalto o por camino, sin límites.'
    }
  }
  if (p1 === 'montaña' && p3 === 500 && p5 === 'rendimiento') {
    return {
      emoji: '🏔️',
      name: 'El Trail Rider',
      desc: 'Eres del tipo que busca la ruta más desafiante. Necesitas potencia de sobra, agarre y una bicicleta que responda tan firme como tú.'
    }
  }
  if (p1 === 'ciudad' && p5 === 'calidad_precio' && (p6 === 'entrada' || p6 === 'media')) {
    return {
      emoji: '⚡',
      name: 'El Velocista Eficiente',
      desc: 'Sabes lo que quieres y optimizas cada euro. Buscas la opción más inteligente del catálogo de CicloVerso, práctica y directa al grano.'
    }
  }
  if (p6 === 'alta' && (p5 === 'rendimiento' || p5 === 'autonomia')) {
    return {
      emoji: '🏆',
      name: 'El Enthusiast',
      desc: 'No te conformas con cualquier especificación. Investigas, comparas y eliges lo mejor que existe en su categoría para exprimir cada salida.'
    }
  }
  if (p5 === 'comodidad' && p3 === 0 && p2 === 30) {
    return {
      emoji: '🧘',
      name: 'El Ciclista Tranquilo',
      desc: 'Disfrutas del trayecto sin prisa. Valoras el confort por encima de todo y prefieres una postura relajada y pedaleo suave.'
    }
  }
  
  // Default profile
  return {
    emoji: '🚴',
    name: 'El Ciclista Versátil',
    desc: 'Te adaptas a cualquier situación. Buscas un equilibrio perfecto entre rendimiento, comodidad y diversión en cada pedaleo.'
  }
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0
  }).format(price)
}
</script>

<template>
  <div class="profile-test-page">
    <div class="container">
      
      <!-- Test View -->
      <div v-if="!showResults" class="test-container">
        <div class="progress-bar">
          <div class="progress-text">Pregunta {{ currentStep + 1 }} de {{ questions.length }}</div>
          <div class="progress-track">
            <div class="progress-fill" :style="{ width: `${((currentStep + 1) / questions.length) * 100}%` }"></div>
          </div>
        </div>

        <button v-if="currentStep > 0" @click="goBack" class="btn-back">
          ← Anterior
        </button>

        <div class="question-wrapper">
          <transition name="slide" mode="out-in">
            <div :key="currentStep" class="question-block">
              <h2 class="question-title">{{ questions[currentStep].title }}</h2>
              
              <div class="options-grid">
                <button 
                  v-for="option in questions[currentStep].options" 
                  :key="option.id"
                  class="option-btn"
                  @click="selectOption(questions[currentStep].id, option.value)"
                >
                  <span class="option-icon">{{ option.icon }}</span>
                  <span class="option-text">{{ option.text }}</span>
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- Results View -->
      <div v-else class="results-container">
        
        <!-- Bloque 1: Perfil -->
        <div class="profile-block">
          <div class="profile-emoji">{{ userProfile.emoji }}</div>
          <h2 class="profile-name">{{ userProfile.name }}</h2>
          <p class="profile-desc">{{ userProfile.desc }}</p>
        </div>

        <div v-if="fallbackMessage" class="fallback-message">
          {{ fallbackMessage }}
        </div>

        <!-- Bloque 2: Recomendaciones -->
        <div class="recommendations">
          <div v-for="(item, index) in recommendedProducts" :key="item.product.id" class="product-card-result">
            <h3 v-if="index === 1" class="secondary-title">También podría interesarte en CicloVerso:</h3>
            
            <div class="card-content">
              <div class="card-image">
                <img :src="item.product.image_url" :alt="item.product.name">
              </div>
              
              <div class="card-details">
                <h4 class="product-name"><strong>{{ item.product.marca }}</strong> {{ item.product.name }}</h4>
                <p class="product-desc">{{ item.product.destacado_editorial || item.product.description }}</p>
                
                <div class="price-block">
                  <span class="discounted-price">{{ formatPrice(item.product.discountedPrice || item.product.retailPrice || 0) }}</span>
                  <span v-if="item.product.discountedPrice && item.product.retailPrice" class="retail-price">{{ formatPrice(item.product.retailPrice) }}</span>
                </div>

                <div v-if="item.product.valoracion_media" class="rating">
                  ⭐ {{ item.product.valoracion_media }} <span class="reviews">({{ item.product.resenas_cantidad || 0 }} reseñas)</span>
                </div>

                <div class="pills">
                  <span class="pill">{{ item.product.disciplina }}</span>
                  <span class="pill">{{ item.product.gama }}</span>
                  <span v-if="item.product.autonomia_km" class="pill">{{ item.product.autonomia_km }} km</span>
                  <span v-if="item.product.potencia_w" class="pill">{{ item.product.potencia_w }}W</span>
                </div>

                <div class="compatibility-bar">
                  <div class="comp-text">Tu puntuación: {{ item.score }}/100</div>
                  <div class="comp-track">
                    <div class="comp-fill" :style="{ width: `${Math.min(item.score, 100)}%` }"></div>
                  </div>
                </div>

                <div class="action-buttons">
                  <a :href="item.product.affiliate_link" target="_blank" class="btn-amazon">🛒 Comprar en Amazon</a>
                  <router-link :to="`/product/${item.product.id}`" class="btn-details">🔗 Ver ficha completa</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bloque 3: Repetir -->
        <div class="repeat-block">
          <button @click="resetTest" class="btn-repeat">↩ Repetir el test</button>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-test-page {
  background-color: #f9f9f9;
  min-height: calc(100vh - 80px);
  padding: 2rem 0;
  color: #111111;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Test Styles */
.test-container {
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.progress-bar {
  margin-bottom: 2rem;
}

.progress-text {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  text-align: center;
  font-weight: 600;
}

.progress-track {
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #00E676;
  transition: width 0.3s ease;
}

.btn-back {
  background: none;
  border: none;
  color: #666;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  display: inline-block;
}

.btn-back:hover {
  color: #111;
}

.question-block {
  text-align: center;
}

.question-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #111;
}

.options-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.option-btn {
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 2px solid #eee;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 64px;
  text-align: left;
}

.option-btn:hover {
  border-color: #00E676;
  box-shadow: 0 4px 12px rgba(0, 230, 118, 0.15);
}

.option-icon {
  font-size: 2rem;
  margin-right: 1.5rem;
}

.option-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Results Styles */
.results-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-block {
  background: #ffffff;
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.profile-emoji {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.profile-name {
  color: #00E676;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.profile-desc {
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.fallback-message {
  background: #fff3cd;
  color: #856404;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
}

.product-card-result {
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-bottom: 1.5rem;
}

.secondary-title {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.card-content {
  display: flex;
  gap: 2rem;
}

.card-image {
  flex: 0 0 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.card-details {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 1.4rem;
  color: #111;
  margin-bottom: 0.5rem;
}

.product-desc {
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.price-block {
  margin-bottom: 1rem;
}

.discounted-price {
  font-size: 1.8rem;
  font-weight: 800;
  color: #00E676;
  margin-right: 1rem;
}

.retail-price {
  font-size: 1.2rem;
  color: #999;
  text-decoration: line-through;
}

.rating {
  margin-bottom: 1rem;
  font-weight: 600;
  color: #333;
}

.reviews {
  color: #666;
  font-weight: 400;
  font-size: 0.9rem;
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.pill {
  background: #f0f0f0;
  color: #333;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: capitalize;
}

.compatibility-bar {
  margin-bottom: 1.5rem;
}

.comp-text {
  font-weight: 700;
  color: #00E676;
  margin-bottom: 0.5rem;
}

.comp-track {
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.comp-fill {
  height: 100%;
  background: #00E676;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.btn-amazon, .btn-details {
  flex: 1;
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-amazon {
  background: #FF9900;
  color: #ffffff;
}

.btn-amazon:hover {
  background: #000000;
}

.btn-details {
  background: #333333;
  color: #ffffff;
}

.btn-details:hover {
  background: #111111;
}

.repeat-block {
  text-align: center;
  margin-top: 1rem;
}

.btn-repeat {
  background: none;
  border: 2px solid #00E676;
  color: #00E676;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-repeat:hover {
  background: #00E676;
  color: #ffffff;
}

/* Responsive */
@media (max-width: 768px) {
  .card-content {
    flex-direction: column;
  }
  
  .card-image {
    flex: 0 0 200px;
    height: 200px;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}
</style>
