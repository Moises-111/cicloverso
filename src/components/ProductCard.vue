<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '../data/products'

const props = defineProps<{
  product: Product
}>()

const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0
  }).format(price)
}
</script>

<template>
  <article class="product-card">
    <div class="product-image-wrapper" v-if="product.image_url && !imageError">
      <img 
        :src="product.image_url" 
        :alt="`Bicicleta ${product.name} - Categoría ${product.disciplina}`"
        loading="lazy"
        class="product-image"
        @error="handleImageError"
      />
      <div class="product-badges">
        <span class="badge category-badge">{{ product.disciplina }}</span>
        <span class="badge level-badge">{{ product.gama }}</span>
      </div>
    </div>
    <div class="product-image-wrapper no-image" v-else>
      <div class="no-image-placeholder">
        <span>Imagen no disponible</span>
      </div>
      <div class="product-badges">
        <span class="badge category-badge">{{ product.disciplina }}</span>
        <span class="badge level-badge">{{ product.gama }}</span>
      </div>
    </div>
    <div class="product-content">
      <div class="product-brand">{{ product.marca }}</div>
      <h3 class="product-title">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      
      <div class="product-specs">
        <span class="spec-item" v-if="product.peso_bici_kg">⚖️ {{ product.peso_bici_kg }} kg</span>
        <span class="spec-item" v-if="product.material_cuadro">🚲 {{ product.material_cuadro }}</span>
        <span class="spec-item" v-if="product.valoracion_media">⭐ {{ product.valoracion_media }}</span>
      </div>

      <div class="product-footer">
        <div class="price-container">
          <span class="product-price" v-if="product.discountedPrice">{{ formatPrice(product.discountedPrice) }}</span>
          <span class="product-price" v-else-if="product.retailPrice">{{ formatPrice(product.retailPrice) }}</span>
        </div>
        <div class="actions">
          <router-link 
            :to="{ name: 'product-detail', params: { id: product.id } }" 
            class="btn btn-secondary"
          >
            Ver Detalles
          </router-link>
          <a 
            v-if="product.affiliate_link"
            :href="product.affiliate_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-primary" 
            :aria-label="`Ver ${product.name} en Amazon`"
          >
            Ver en Amazon
          </a>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  background: var(--color-background);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.product-image-wrapper {
  position: relative;
  padding-top: 66.66%; /* Aspect ratio 3:2 */
  overflow: hidden;
  background-color: #f0f0f0;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-badges {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 2;
}

.badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.category-badge {
  background-color: var(--color-primary);
  color: white;
}

.level-badge {
  background-color: var(--color-secondary);
  color: white;
}

.product-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-brand {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #888;
  margin-bottom: 0.25rem;
}

.product-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-secondary);
}

.product-specs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: #555;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.no-image {
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.no-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-size: 0.9rem;
  font-style: italic;
}

.price-container {
  display: flex;
  flex-direction: column;
}

.product-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  gap: 1rem;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-accent);
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  text-decoration: none;
  text-align: center;
}

.btn-secondary {
  background-color: #e2e8f0;
  color: #4a5568;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.btn-secondary:hover {
  background-color: #cbd5e0;
}
</style>
