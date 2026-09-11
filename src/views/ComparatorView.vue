<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { products, type Product } from '@/data/products'

const route = useRoute()
const router = useRouter()

// State
const selectedIds = ref<string[]>([])
const searchQueries = ref<string[]>(['', ''])
const showDropdown = ref<boolean[]>([false, false])

// Initialize from URL
onMounted(() => {
  const ids = []
  if (route.query.m1) ids.push(route.query.m1 as string)
  if (route.query.m2) ids.push(route.query.m2 as string)
  if (route.query.m3) ids.push(route.query.m3 as string)
  if (route.query.m4) ids.push(route.query.m4 as string)
  
  selectedIds.value = ids
  
  // Initialize search queries and dropdowns based on selected ids
  searchQueries.value = []
  showDropdown.value = []
  for (let i = 0; i < Math.max(2, ids.length); i++) {
    if (i < ids.length) {
      const p = products.find(p => p.id === ids[i])
      searchQueries.value.push(p ? p.name : '')
    } else {
      searchQueries.value.push('')
    }
    showDropdown.value.push(false)
  }
  
  updateChart()
})

// Watch for URL changes
watch(() => route.query, (newQuery) => {
  const ids = []
  if (newQuery.m1) ids.push(newQuery.m1 as string)
  if (newQuery.m2) ids.push(newQuery.m2 as string)
  if (newQuery.m3) ids.push(newQuery.m3 as string)
  if (newQuery.m4) ids.push(newQuery.m4 as string)
  
  if (JSON.stringify(ids) !== JSON.stringify(selectedIds.value)) {
    selectedIds.value = ids
    updateChart()
  }
}, { deep: true })

// Update URL when selection changes
const updateUrl = () => {
  const query: Record<string, string> = {}
  selectedIds.value.forEach((id, index) => {
    query[`m${index + 1}`] = id
  })
  router.replace({ query })
  updateChart()
}

// Computed
const selectedProducts = computed(() => {
  return selectedIds.value.map(id => products.find(p => p.id === id)).filter(Boolean) as Product[]
})

const availableProducts = computed(() => {
  return products.filter(p => !selectedIds.value.includes(p.id))
})

const getFilteredProducts = (query: string) => {
  if (!query) return availableProducts.value
  const lowerQuery = query.toLowerCase()
  return availableProducts.value.filter(p => p.name.toLowerCase().includes(lowerQuery))
}

// Actions
const selectProduct = (index: number, product: Product) => {
  if (index < selectedIds.value.length) {
    selectedIds.value[index] = product.id
  } else {
    selectedIds.value.push(product.id)
  }
  searchQueries.value[index] = product.name
  showDropdown.value[index] = false
  updateUrl()
}

const removeProduct = (index: number) => {
  selectedIds.value.splice(index, 1)
  searchQueries.value.splice(index, 1)
  showDropdown.value.splice(index, 1)
  
  // Ensure at least 2 fields
  while (searchQueries.value.length < 2) {
    searchQueries.value.push('')
    showDropdown.value.push(false)
  }
  
  updateUrl()
}

const addField = () => {
  if (searchQueries.value.length < 4) {
    searchQueries.value.push('')
    showDropdown.value.push(false)
  }
}

const canAddField = computed(() => {
  return searchQueries.value.length < 4 && selectedIds.value.length === searchQueries.value.length
})

// Click outside to close dropdowns
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target.closest('.search-field')) {
      showDropdown.value = showDropdown.value.map(() => false)
    }
  })
})

// Chart.js
let chartInstance: any = null
const chartCanvas = ref<HTMLCanvasElement | null>(null)

const chartColors = [
  { bg: 'rgba(0, 230, 118, 0.2)', border: '#00E676' },
  { bg: 'rgba(66, 153, 225, 0.2)', border: '#4299e1' },
  { bg: 'rgba(237, 137, 54, 0.2)', border: '#ed8936' },
  { bg: 'rgba(159, 122, 234, 0.2)', border: '#9f7aea' }
]

const updateChart = async () => {
  await nextTick()
  if (!chartCanvas.value || selectedProducts.value.length < 2) return
  
  if (chartInstance) {
    chartInstance.destroy()
  }
  
  const ctx = chartCanvas.value.getContext('2d')
  if (!ctx) return
  
  // @ts-ignore
  chartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Rendimiento', 'Comodidad', 'Durabilidad', 'Calidad/Precio', 'Peso', 'Versatilidad'],
      datasets: selectedProducts.value.map((p, i) => ({
        label: p.name,
        data: [
          p.score_rendimiento,
          p.score_comodidad,
          p.score_durabilidad,
          p.score_calidad_precio,
          p.score_peso,
          p.score_versatilidad
        ],
        backgroundColor: chartColors[i % chartColors.length].bg,
        borderColor: chartColors[i % chartColors.length].border,
        pointBackgroundColor: chartColors[i % chartColors.length].border,
        borderWidth: 2
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: { stepSize: 2 },
          grid: { color: '#e2e8f0' },
          angleLines: { color: '#e2e8f0' },
          pointLabels: { font: { size: 12, weight: 'bold' }, color: '#4a5568' }
        }
      },
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  })
}

// Helpers for highlighting
const getHighest = (field: keyof Product) => {
  const values = selectedProducts.value.map(p => p[field] as number).filter(v => v !== undefined && !isNaN(v))
  return values.length ? Math.max(...values) : -1
}

const getLowest = (field: keyof Product) => {
  const values = selectedProducts.value.map(p => p[field] as number).filter(v => v !== undefined && !isNaN(v))
  return values.length ? Math.min(...values) : -1
}

const isHighest = (product: Product, field: keyof Product) => {
  const val = product[field] as number
  return val !== undefined && val === getHighest(field)
}

const isLowest = (product: Product, field: keyof Product) => {
  const val = product[field] as number
  return val !== undefined && val === getLowest(field)
}

const formatDiscount = (retail?: number, discounted?: number) => {
  if (!retail || !discounted || retail <= discounted) return null
  return Math.round(((retail - discounted) / retail) * 100)
}
</script>

<template>
  <div class="comparator-page">
    <div class="container">
      <h1 class="page-title">Comparador de Bicicletas</h1>
      
      <!-- Buscador -->
      <div class="search-section">
        <div class="search-fields">
          <div v-for="(query, index) in searchQueries" :key="index" class="search-field">
            <div class="input-wrapper">
              <input 
                type="text" 
                v-model="searchQueries[index]"
                @focus="showDropdown[index] = true"
                @input="showDropdown[index] = true"
                placeholder="Buscar modelo..."
                class="search-input"
              />
              <button v-if="selectedIds[index] || searchQueries[index]" @click="removeProduct(index)" class="clear-btn">✕</button>
            </div>
            
            <div v-if="showDropdown[index]" class="dropdown">
              <div 
                v-for="product in getFilteredProducts(searchQueries[index])" 
                :key="product.id"
                @click="selectProduct(index, product)"
                class="dropdown-item"
              >
                <img :src="product.image_url" :alt="product.name" class="dropdown-img" />
                <div class="dropdown-info">
                  <div class="dropdown-name">{{ product.name }}</div>
                  <div class="dropdown-brand">{{ product.marca }}</div>
                </div>
              </div>
              <div v-if="getFilteredProducts(searchQueries[index]).length === 0" class="dropdown-empty">
                No hay resultados
              </div>
            </div>
          </div>
          
          <button v-if="canAddField" @click="addField" class="add-model-btn">
            ＋ Añadir modelo
          </button>
        </div>
      </div>
      
      <!-- Tabla de Comparación -->
      <div v-if="selectedProducts.length >= 2" class="comparison-table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th class="sticky-col"></th>
              <th v-for="product in selectedProducts" :key="product.id" class="product-col">
                <div class="product-header">
                  <div class="img-container">
                    <img :src="product.image_url || 'https://via.placeholder.com/120'" :alt="product.name" />
                  </div>
                  <div class="product-name">{{ product.name }}</div>
                  <div class="product-brand">{{ product.marca }}</div>
                  <div v-if="product.isFeatured" class="badge-featured">DESTACADO</div>
                  <a :href="product.affiliate_link || '#'" target="_blank" class="btn-buy">Comprar</a>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Precio -->
            <tr class="section-row"><td :colspan="selectedProducts.length + 1">Precio</td></tr>
            <tr>
              <td class="sticky-col"><span class="icon">💰</span> Precio actual</td>
              <td v-for="product in selectedProducts" :key="product.id">
                <div class="price-current">${{ product.discountedPrice?.toLocaleString() || product.retailPrice?.toLocaleString() || '—' }}</div>
                <div v-if="product.discountedPrice && product.retailPrice && product.discountedPrice < product.retailPrice" class="price-original">
                  ${{ product.retailPrice.toLocaleString() }}
                  <span class="discount-badge">-{{ formatDiscount(product.retailPrice, product.discountedPrice) }}%</span>
                </div>
              </td>
            </tr>
            
            <!-- Valoración -->
            <tr class="section-row"><td :colspan="selectedProducts.length + 1">Valoración de compradores</td></tr>
            <tr>
              <td class="sticky-col"><span class="icon">⭐</span> Puntuación</td>
              <td v-for="product in selectedProducts" :key="product.id">
                <div v-if="product.valoracion_media" class="rating">
                  <span class="stars">★ {{ product.valoracion_media }}</span>
                  <span class="reviews" v-if="product.resenas_cantidad">({{ product.resenas_cantidad }})</span>
                </div>
                <div v-else class="empty-val">—</div>
              </td>
            </tr>
            
            <!-- Especificaciones -->
            <tr class="section-row"><td :colspan="selectedProducts.length + 1">Especificaciones técnicas</td></tr>
            <tr>
              <td class="sticky-col"><span class="icon">🔋</span> Autonomía</td>
              <td v-for="product in selectedProducts" :key="product.id" :class="{ 'highlight-green': isHighest(product, 'autonomia_km') }">
                {{ product.autonomia_km ? product.autonomia_km + ' km' : '—' }}
              </td>
            </tr>
            <tr>
              <td class="sticky-col"><span class="icon">⚡</span> Potencia del motor</td>
              <td v-for="product in selectedProducts" :key="product.id" :class="{ 'highlight-green': isHighest(product, 'potencia_w') }">
                {{ product.potencia_w ? product.potencia_w + ' W' : '—' }}
              </td>
            </tr>
            <tr>
              <td class="sticky-col"><span class="icon">🏎️</span> Velocidad máxima</td>
              <td v-for="product in selectedProducts" :key="product.id" :class="{ 'highlight-green': isHighest(product, 'velocidad_max_kmh') }">
                {{ product.velocidad_max_kmh ? product.velocidad_max_kmh + ' km/h' : '—' }}
              </td>
            </tr>
            <tr>
              <td class="sticky-col"><span class="icon">🪫</span> Capacidad batería</td>
              <td v-for="product in selectedProducts" :key="product.id" :class="{ 'highlight-green': isHighest(product, 'capacidad_bateria_wh') }">
                {{ product.capacidad_bateria_wh ? product.capacidad_bateria_wh + ' Wh' : '—' }}
              </td>
            </tr>
            <tr>
              <td class="sticky-col"><span class="icon">⏱️</span> Tiempo de carga</td>
              <td v-for="product in selectedProducts" :key="product.id" :class="{ 'highlight-green': isLowest(product, 'tiempo_carga_h') }">
                {{ product.tiempo_carga_h ? product.tiempo_carga_h + ' h' : '—' }}
              </td>
            </tr>
            <tr>
              <td class="sticky-col"><span class="icon">⚙️</span> Tipo de motor/transmisión</td>
              <td v-for="product in selectedProducts" :key="product.id">
                {{ product.tipo_motor || '—' }}
              </td>
            </tr>
            <tr>
              <td class="sticky-col"><span class="icon">🚵</span> Modalidad</td>
              <td v-for="product in selectedProducts" :key="product.id" style="text-transform: capitalize;">
                {{ product.disciplina || '—' }}
              </td>
            </tr>
            <tr>
              <td class="sticky-col"><span class="icon">⚖️</span> Peso de la bici</td>
              <td v-for="product in selectedProducts" :key="product.id" :class="{ 'highlight-green': isLowest(product, 'peso_bici_kg') }">
                {{ product.peso_bici_kg ? product.peso_bici_kg + ' kg' : '—' }}
              </td>
            </tr>
            <tr>
              <td class="sticky-col"><span class="icon">🔢</span> Número de marchas</td>
              <td v-for="product in selectedProducts" :key="product.id" :class="{ 'highlight-green': isHighest(product, 'num_marchas') }">
                {{ product.num_marchas || '—' }}
              </td>
            </tr>
            <tr>
              <td class="sticky-col"><span class="icon">📐</span> Talla de cuadro</td>
              <td v-for="product in selectedProducts" :key="product.id">
                {{ product.talla_cuadro || '—' }}
              </td>
            </tr>
            <tr>
              <td class="sticky-col"><span class="icon">🛡️</span> Garantía</td>
              <td v-for="product in selectedProducts" :key="product.id" :class="{ 'highlight-green': isHighest(product, 'garantia_años') }">
                {{ product.garantia_años ? product.garantia_años + ' años' : '—' }}
              </td>
            </tr>
            
            <!-- Puntuaciones -->
            <tr class="section-row"><td :colspan="selectedProducts.length + 1">Puntuaciones</td></tr>
            <tr>
              <td :colspan="selectedProducts.length + 1" class="chart-cell">
                <div class="chart-container">
                  <canvas ref="chartCanvas"></canvas>
                </div>
              </td>
            </tr>
            <tr v-for="score in [
              { key: 'score_rendimiento', label: 'Rendimiento' },
              { key: 'score_comodidad', label: 'Comodidad' },
              { key: 'score_durabilidad', label: 'Durabilidad' },
              { key: 'score_calidad_precio', label: 'Calidad/Precio' },
              { key: 'score_peso', label: 'Peso' },
              { key: 'score_versatilidad', label: 'Versatilidad' }
            ]" :key="score.key">
              <td class="sticky-col">{{ score.label }}</td>
              <td v-for="product in selectedProducts" :key="product.id">
                <div class="score-bar-container">
                  <div class="score-val" :class="{ 'highlight-green': isHighest(product, score.key as keyof Product) }">
                    {{ product[score.key as keyof Product] }}/10
                  </div>
                  <div class="bar-bg">
                    <div class="bar-fill" :style="{ width: `${(product[score.key as keyof Product] as number) * 10}%` }"></div>
                  </div>
                </div>
              </td>
            </tr>
            
            <!-- Perfil -->
            <tr class="section-row"><td :colspan="selectedProducts.length + 1">Perfil del ciclista</td></tr>
            <tr>
              <td class="sticky-col"><span class="icon">👤</span> Ideal para</td>
              <td v-for="product in selectedProducts" :key="product.id" class="text-cell">
                {{ product.ideal_para || '—' }}
              </td>
            </tr>
            
            <!-- Pros y Contras -->
            <tr class="section-row"><td :colspan="selectedProducts.length + 1">Pros y contras</td></tr>
            <tr>
              <td class="sticky-col"><span class="icon">✅</span> Pros</td>
              <td v-for="product in selectedProducts" :key="product.id" class="text-cell">
                <ul class="pro-con-list">
                  <li v-for="(pro, i) in (product.pros || '').split('|')" :key="i" v-show="pro">
                    <span class="check">✓</span> {{ pro }}
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td class="sticky-col"><span class="icon">❌</span> Contras</td>
              <td v-for="product in selectedProducts" :key="product.id" class="text-cell">
                <ul class="pro-con-list">
                  <li v-for="(con, i) in (product.contras || '').split('|')" :key="i" v-show="con">
                    <span class="cross">✕</span> {{ con }}
                  </li>
                </ul>
              </td>
            </tr>
            
            <!-- CTA Final -->
            <tr>
              <td class="sticky-col"></td>
              <td v-for="product in selectedProducts" :key="product.id">
                <a :href="product.affiliate_link || '#'" target="_blank" class="btn-buy btn-buy-large">Comprar ahora</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div v-else class="empty-state">
        <p>Selecciona al menos 2 modelos para comenzar la comparación.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comparator-page {
  background-color: #f8fafc;
  min-height: 100vh;
  padding: 2rem 0;
  color: #1a202c;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
}

/* Buscador */
.search-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
}

.search-fields {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
}

.search-field {
  position: relative;
  flex: 1;
  min-width: 250px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: #00E676;
  box-shadow: 0 0 0 3px rgba(0, 230, 118, 0.1);
}

.clear-btn {
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  color: #a0aec0;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem;
}

.clear-btn:hover {
  color: #4a5568;
}

.add-model-btn {
  padding: 0.75rem 1.5rem;
  background: white;
  border: 1px dashed #cbd5e0;
  border-radius: 8px;
  color: #4a5568;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.add-model-btn:hover {
  border-color: #00E676;
  color: #00E676;
  background: #f0fdf4;
}

/* Dropdown */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-height: 300px;
  overflow-y: auto;
  z-index: 50;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  cursor: pointer;
  border-bottom: 1px solid #edf2f7;
  transition: background-color 0.2s;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background-color: #f7fafc;
}

.dropdown-img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 1rem;
}

.dropdown-name {
  font-weight: 600;
  font-size: 0.9rem;
}

.dropdown-brand {
  font-size: 0.8rem;
  color: #718096;
}

.dropdown-empty {
  padding: 1rem;
  text-align: center;
  color: #718096;
}

/* Tabla */
.comparison-table-wrapper {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.comparison-table th,
.comparison-table td {
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #edf2f7;
  border-right: 1px solid #edf2f7;
  vertical-align: top;
}

.comparison-table th:last-child,
.comparison-table td:last-child {
  border-right: none;
}

.sticky-col {
  position: sticky;
  left: 0;
  background: white;
  z-index: 10;
  width: 200px;
  min-width: 200px;
  font-weight: 600;
  color: #4a5568;
  box-shadow: 2px 0 5px rgba(0,0,0,0.02);
}

.product-col {
  min-width: 250px;
  width: 250px;
}

.section-row td {
  background-color: #f7fafc;
  font-weight: 700;
  color: #2d3748;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  padding: 1rem;
}

/* Cabecera Producto */
.product-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.img-container {
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.product-name {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.product-brand {
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.badge-featured {
  background-color: #00E676;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.btn-buy {
  background-color: #FF9900;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  transition: background-color 0.2s;
  display: inline-block;
  width: 100%;
  text-align: center;
}

.btn-buy:hover {
  background-color: #000000;
}

.btn-buy-large {
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
}

/* Celdas */
.icon {
  margin-right: 0.5rem;
}

.empty-val {
  color: #a0aec0;
}

.highlight-green {
  color: #00E676;
  font-weight: 700;
}

.price-current {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00E676;
}

.price-original {
  color: #a0aec0;
  text-decoration: line-through;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.discount-badge {
  background-color: #e53e3e;
  color: white;
  text-decoration: none;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stars {
  color: #ecc94b;
  font-weight: 700;
}

.reviews {
  color: #718096;
  font-size: 0.85rem;
}

/* Chart */
.chart-cell {
  padding: 2rem !important;
  background: white;
}

.chart-container {
  height: 400px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.score-bar-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.score-val {
  font-weight: 600;
}

.bar-bg {
  height: 8px;
  background-color: #edf2f7;
  border-radius: 4px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background-color: #cbd5e0;
}

.highlight-green + .bar-bg .bar-fill {
  background-color: #00E676;
}

/* Text cells */
.text-cell {
  font-size: 0.95rem;
  line-height: 1.5;
}

.pro-con-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pro-con-list li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.check {
  color: #00E676;
  font-weight: bold;
}

.cross {
  color: #e53e3e;
  font-weight: bold;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  color: #718096;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .search-field {
    min-width: 100%;
  }
  
  .add-model-btn {
    width: 100%;
  }
}
</style>
