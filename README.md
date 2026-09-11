# Cicloverso 🚲

Cicloverso es una aplicación web interactiva diseñada para ayudar a los usuarios a encontrar su bicicleta ideal. Ofrece un catálogo completo de bicicletas de diferentes disciplinas, un comparador detallado y un test de perfil ciclista para recomendaciones personalizadas.

## 🌟 Características Principales

- **Catálogo de Bicicletas**: Explora una amplia variedad de bicicletas categorizadas por disciplina (Urbana, Ruta, Montaña, Gravel, Eléctrica).
- **Detalles del Producto**: Información exhaustiva sobre cada bicicleta, incluyendo especificaciones técnicas, componentes, pros, contras y valoraciones.
- **Comparador de Bicicletas**: Herramienta para comparar lado a lado las características y especificaciones de diferentes modelos.
- **Test de Perfil Ciclista**: Un cuestionario interactivo que recomienda las mejores opciones de bicicletas basadas en las necesidades y preferencias del usuario.
- **Diseño Responsivo**: Interfaz de usuario adaptable a diferentes tamaños de pantalla.

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
- **Herramienta de Construcción**: [Vite](https://vitejs.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Enrutamiento**: [Vue Router](https://router.vuejs.org/)
- **Testing**: [Vitest](https://vitest.dev/) y [Vue Test Utils](https://test-utils.vuejs.org/)
- **Linting y Formateo**: ESLint, Prettier, Oxlint

## 📂 Estructura del Proyecto

- `src/assets/`: Estilos globales y recursos estáticos.
- `src/components/`: Componentes reutilizables de Vue (Header, Footer, ProductCard, etc.).
- `src/data/`: Datos estáticos de la aplicación (catálogo de productos en `products.ts`).
- `src/router/`: Configuración de rutas de la aplicación.
- `src/views/`: Vistas principales de la aplicación (Home, ProductDetail, Comparator, ProfileTest).

## 🚀 Configuración del Proyecto

### Requisitos Previos

Asegúrate de tener [Node.js](https://nodejs.org/) instalado (versión recomendada en `package.json`: Node >= 22.18.0 o >= 24.12.0).

### Instalación de Dependencias

```sh
npm install
```

### Compilar y Recargar en Caliente para Desarrollo

Inicia el servidor de desarrollo local:

```sh
npm run dev
```

### Verificación de Tipos, Compilación y Minificación para Producción

Construye la aplicación para producción:

```sh
npm run build
```

### Ejecutar Pruebas Unitarias con Vitest

```sh
npm run test:unit
```

### Linting y Formateo de Código

Ejecuta ESLint y Oxlint para encontrar y arreglar problemas en el código:

```sh
npm run lint
```

Formatea el código con Prettier:

```sh
npm run format
```

## 💻 Entorno de Desarrollo Recomendado

- [VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (deshabilitar Vetur).
