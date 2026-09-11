<script setup lang="ts">
import { ref, computed } from 'vue'
import { products } from '../data/products'
import ProductCard from './ProductCard.vue'

const selectedCategory = ref<string>('todas')
const selectedLevel = ref<string>('todos')

const categories = ['todas', 'urbana', 'ruta', 'montaña', 'gravel', 'electrica']
const levels = ['todos', 'entrada', 'media', 'alta']

const filteredProducts = computed(() => {
  return products.filter(product => {
    const matchCategory = selectedCategory.value === 'todas' || product.disciplina === selectedCategory.value
    const matchLevel = selectedLevel.value === 'todos' || product.gama === selectedLevel.value
    return matchCategory && matchLevel
  })
})
</script>

<template>
  <section id="catalogo" class="catalog-section">
    <div class="container">
      <div class="catalog-header">
        <h2>Nuestro Catálogo</h2>
        <p>Encuentra la bicicleta perfecta para tu estilo y nivel.</p>
      </div>

      <div class="filters-container">
        <div class="filter-group">
          <label for="category-filter">Categoría:</label>
          <select id="category-filter" v-model="selectedCategory" class="filter-select">
            <option v-for="cat in categories" :key="cat" :value="cat">
              {{ cat.charAt(0).toUpperCase() + cat.slice(1) }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label for="level-filter">Gama:</label>
          <select id="level-filter" v-model="selectedLevel" class="filter-select">
            <option v-for="lvl in levels" :key="lvl" :value="lvl">
              {{ lvl.charAt(0).toUpperCase() + lvl.slice(1) }}
            </option>
          </select>
        </div>
      </div>

      <div v-if="filteredProducts.length > 0" class="products-grid">
        <ProductCard 
          v-for="product in filteredProducts" 
          :key="product.id" 
          :product="product" 
        />
      </div>
      
      <div v-else class="no-results">
        <p>No encontramos bicicletas que coincidan con tus filtros.</p>
        <button class="btn btn-primary" @click="selectedCategory = 'todas'; selectedLevel = 'todos'">
          Limpiar filtros
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.catalog-section {
  padding: 5rem 0;
  background-color: #f9f9f9;
}

.catalog-header {
  text-align: center;
  margin-bottom: 3rem;
}

.catalog-header h2 {
  font-size: 2.5rem;
  color: var(--color-secondary);
  margin-bottom: 1rem;
}

.catalog-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.filters-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.filter-group label {
  font-weight: 600;
  color: var(--color-secondary);
}

.filter-select {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  min-width: 150px;
}

.filter-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(0, 82, 204, 0.2);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.no-results {
  text-align: center;
  padding: 4rem 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.no-results p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .filters-container {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .filter-group {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .filter-select {
    width: 100%;
  }
}
</style>
