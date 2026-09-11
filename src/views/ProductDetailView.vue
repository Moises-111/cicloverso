<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { products } from '@/data/products'

const route = useRoute()
const router = useRouter()

const product = computed(() => {
  const id = route.params.id as string
  return products.find(p => p.id === id)
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="product-detail-container">
    <div v-if="product" class="product-detail">
      <button @click="goBack" class="back-button">
        &larr; Volver al catálogo
      </button>

      <div class="product-header">
        <div class="product-image-container">
          <img :src="product.image_url" :alt="product.name" class="product-image" />
        </div>
        <div class="product-info">
          <div class="badges">
            <span class="badge category">{{ product.disciplina }}</span>
            <span class="badge gama">{{ product.gama }}</span>
            <span v-if="product.isFeatured" class="badge featured">Destacado</span>
          </div>
          
          <h1 class="product-title">{{ product.name }}</h1>
          <p class="product-brand">por <strong>{{ product.marca }}</strong></p>
          
          <div class="price-container">
            <span class="discounted-price">${{ product.discountedPrice?.toLocaleString() }}</span>
            <span v-if="product.retailPrice" class="retail-price">${{ product.retailPrice?.toLocaleString() }}</span>
          </div>

          <p class="product-description">{{ product.description }}</p>
          
          <div class="editorial-highlight" v-if="product.destacado_editorial">
            <p><em>"{{ product.destacado_editorial }}"</em></p>
          </div>

          <a v-if="product.affiliate_link" :href="product.affiliate_link" target="_blank" rel="noopener noreferrer" class="buy-button">
            Ver en Amazon
          </a>
          <router-link :to="`/comparador?m1=${product.id}`" class="btn-compare">
            ⚖️ Comparar este modelo
          </router-link>
        </div>
      </div>

      <div class="product-details-grid">
        <div class="specs-section">
          <h2>Especificaciones Principales</h2>
          <ul class="specs-list">
            <li><strong>Material del cuadro:</strong> {{ product.material_cuadro }}</li>
            <li><strong>Tipo de frenos:</strong> {{ product.tipo_frenos }}</li>
            <li><strong>Peso:</strong> {{ product.peso_bici_kg }} kg</li>
            <li><strong>Marchas:</strong> {{ product.num_marchas }}</li>
            <li><strong>Talla:</strong> {{ product.talla_cuadro }}</li>
            <li><strong>Garantía:</strong> {{ product.garantia_años }} años</li>
          </ul>

          <template v-if="product.disciplina === 'electrica'">
            <h3 class="mt-4">Especificaciones Eléctricas</h3>
            <ul class="specs-list">
              <li><strong>Tipo de motor:</strong> {{ product.tipo_motor }}</li>
              <li><strong>Potencia:</strong> {{ product.potencia_w }} W</li>
              <li><strong>Batería:</strong> {{ product.capacidad_bateria_wh }} Wh</li>
              <li><strong>Autonomía:</strong> {{ product.autonomia_km }} km</li>
              <li><strong>Velocidad máx:</strong> {{ product.velocidad_max_kmh }} km/h</li>
              <li><strong>Tiempo de carga:</strong> {{ product.tiempo_carga_h }} h</li>
            </ul>
          </template>
        </div>

        <div class="scores-section">
          <h2>Puntuaciones</h2>
          <div class="score-bars">
            <div class="score-item">
              <span>Rendimiento</span>
              <div class="bar-bg"><div class="bar-fill" :style="{ width: `${product.score_rendimiento * 10}%` }"></div></div>
              <span>{{ product.score_rendimiento }}/10</span>
            </div>
            <div class="score-item">
              <span>Comodidad</span>
              <div class="bar-bg"><div class="bar-fill" :style="{ width: `${product.score_comodidad * 10}%` }"></div></div>
              <span>{{ product.score_comodidad }}/10</span>
            </div>
            <div class="score-item">
              <span>Durabilidad</span>
              <div class="bar-bg"><div class="bar-fill" :style="{ width: `${product.score_durabilidad * 10}%` }"></div></div>
              <span>{{ product.score_durabilidad }}/10</span>
            </div>
            <div class="score-item">
              <span>Calidad/Precio</span>
              <div class="bar-bg"><div class="bar-fill" :style="{ width: `${product.score_calidad_precio * 10}%` }"></div></div>
              <span>{{ product.score_calidad_precio }}/10</span>
            </div>
            <div class="score-item">
              <span>Peso</span>
              <div class="bar-bg"><div class="bar-fill" :style="{ width: `${product.score_peso * 10}%` }"></div></div>
              <span>{{ product.score_peso }}/10</span>
            </div>
            <div class="score-item">
              <span>Versatilidad</span>
              <div class="bar-bg"><div class="bar-fill" :style="{ width: `${product.score_versatilidad * 10}%` }"></div></div>
              <span>{{ product.score_versatilidad }}/10</span>
            </div>
          </div>
        </div>
      </div>

      <div class="components-section" v-if="product.componentes">
        <h2>Componentes</h2>
        <div class="components-grid">
          <div class="component-group" v-if="product.componentes.estructura">
            <h3>Estructura</h3>
            <ul>
              <li v-if="product.componentes.estructura.cuadro"><strong>Cuadro:</strong> {{ product.componentes.estructura.cuadro }}</li>
              <li v-if="product.componentes.estructura.horquilla"><strong>Horquilla:</strong> {{ product.componentes.estructura.horquilla }}</li>
            </ul>
          </div>
          <div class="component-group" v-if="product.componentes.transmision">
            <h3>Transmisión</h3>
            <ul>
              <li v-if="product.componentes.transmision.desviador_trasero"><strong>Desviador:</strong> {{ product.componentes.transmision.desviador_trasero }}</li>
              <li v-if="product.componentes.transmision.mandos"><strong>Mandos:</strong> {{ product.componentes.transmision.mandos }}</li>
            </ul>
          </div>
          <div class="component-group" v-if="product.componentes.frenos">
            <h3>Frenos</h3>
            <ul>
              <li v-if="product.componentes.frenos.conjunto"><strong>Conjunto:</strong> {{ product.componentes.frenos.conjunto }}</li>
            </ul>
          </div>
          <div class="component-group" v-if="product.componentes.ruedas">
            <h3>Ruedas</h3>
            <ul>
              <li v-if="product.componentes.ruedas.llantas"><strong>Llantas:</strong> {{ product.componentes.ruedas.llantas }}</li>
              <li v-if="product.componentes.ruedas.neumaticos"><strong>Neumáticos:</strong> {{ product.componentes.ruedas.neumaticos }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="pros-cons-section">
        <div class="pros">
          <h3>Pros</h3>
          <ul>
            <li v-for="(pro, index) in product.pros.split('|')" :key="index">{{ pro }}</li>
          </ul>
        </div>
        <div class="cons">
          <h3>Contras</h3>
          <ul>
            <li v-for="(contra, index) in product.contras.split('|')" :key="index">{{ contra }}</li>
          </ul>
        </div>
      </div>

      <div class="reviews-section">
        <h2>Reseñas</h2>
        <div class="review-summary">
          <div class="rating">
            <span class="stars">★</span>
            <span class="rating-value">{{ product.valoracion_media }}</span>
            <span class="rating-count" v-if="product.resenas_cantidad">({{ product.resenas_cantidad }} reseñas)</span>
          </div>
          <p class="review-text">"{{ product.resenas_resumen }}"</p>
        </div>
      </div>

    </div>
    <div v-else class="not-found">
      <h2>Bicicleta no encontrada</h2>
      <button @click="goBack" class="back-button">Volver al catálogo</button>
    </div>
  </div>
</template>

<style scoped>
.product-detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.back-button {
  background: none;
  border: none;
  color: #4a5568;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  transition: color 0.2s;
}

.back-button:hover {
  color: #2d3748;
  text-decoration: underline;
}

.product-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.product-image-container {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.badges {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
}

.badge.category {
  background-color: #ebf4ff;
  color: #3182ce;
}

.badge.gama {
  background-color: #f0fff4;
  color: #38a169;
}

.badge.featured {
  background-color: #fffaf0;
  color: #dd6b20;
}

.product-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

.product-brand {
  font-size: 1.25rem;
  color: #718096;
  margin-bottom: 1.5rem;
}

.price-container {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.discounted-price {
  font-size: 2rem;
  font-weight: 700;
  color: #e53e3e;
}

.retail-price {
  font-size: 1.25rem;
  color: #a0aec0;
  text-decoration: line-through;
}

.product-description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.editorial-highlight {
  background-color: #f7fafc;
  border-left: 4px solid #4299e1;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 0 8px 8px 0;
}

.editorial-highlight p {
  margin: 0;
  color: #2b6cb0;
  font-size: 1.1rem;
}

.buy-button {
  display: inline-block;
  background-color: #f6ad55;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.2s;
  width: 100%;
  max-width: 300px;
}

.buy-button:hover {
  background-color: #ed8936;
}

.btn-compare {
  display: inline-block;
  background-color: transparent;
  color: #00E676;
  border: 2px solid #00E676;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s;
  width: 100%;
  max-width: 300px;
  margin-top: 1rem;
}

.btn-compare:hover {
  background-color: #00E676;
  color: white;
}

.product-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.25rem;
  color: #4a5568;
  margin-bottom: 1rem;
}

.mt-4 {
  margin-top: 1.5rem;
}

.specs-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.specs-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #edf2f7;
  display: flex;
  justify-content: space-between;
}

.specs-list li:last-child {
  border-bottom: none;
}

.score-bars {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.score-item {
  display: grid;
  grid-template-columns: 120px 1fr 40px;
  align-items: center;
  gap: 1rem;
}

.bar-bg {
  background-color: #edf2f7;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
}

.bar-fill {
  background-color: #4299e1;
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s ease-out;
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.component-group {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
}

.component-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.component-group li {
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.pros-cons-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.pros, .cons {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.pros h3 { color: #38a169; }
.cons h3 { color: #e53e3e; }

.pros ul, .cons ul {
  padding-left: 1.5rem;
}

.pros li, .cons li {
  margin-bottom: 0.5rem;
}

.review-summary {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  text-align: center;
}

.rating {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.stars {
  color: #ecc94b;
  margin-right: 0.5rem;
}

.rating-value {
  font-weight: bold;
  color: #2d3748;
}

.rating-count {
  color: #718096;
  font-size: 1rem;
  margin-left: 0.5rem;
}

.review-text {
  font-size: 1.125rem;
  font-style: italic;
  color: #4a5568;
}

.not-found {
  text-align: center;
  padding: 4rem;
}

@media (max-width: 768px) {
  .product-header,
  .product-details-grid,
  .pros-cons-section {
    grid-template-columns: 1fr;
  }
  
  .product-title {
    font-size: 2rem;
  }
}
</style>
