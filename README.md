# 🖼️ Buscador de Imágenes

Buscador de Imágenes es una aplicación web desarrollada con **React**, **TypeScript**, **Vite** y **Zustand**, que permite buscar imágenes utilizando la API de Unsplash. El usuario puede ingresar una consulta, navegar entre los resultados paginados y ver detalles de cada imagen encontrada.

## ✨ Características

- 🔍 Búsqueda de imágenes en Unsplash por palabra clave.
- 🖼️ Visualización de resultados en una cuadrícula responsiva.
- 📄 Paginación avanzada para navegar entre los resultados.
- 🗂️ Manejo de estado global con Zustand.
- ✅ Validación de formularios con React Hook Form.
- 🎨 Estilos modernos con TailwindCSS.

## 🚀 Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/buscador-imagenes.git
   cd buscador-imagenes
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API de Unsplash:
   ```
   VITE_UNSPLASH_API='TU_API_KEY'
   ```

4. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

## 📦 Scripts disponibles

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Compila la aplicación para producción.
- `npm run preview` — Previsualiza la aplicación de producción.
- `npm run lint` — Ejecuta ESLint para analizar el código.

## 🗂️ Estructura del proyecto

```
src/
  components/      # Componentes reutilizables (Formulario, Resultado, Pagination, etc.)
  store/           # Estado global con Zustand
  types/           # Tipos TypeScript
  assets/          # Imágenes y recursos estáticos
  App.tsx          # Componente principal
  main.tsx         # Punto de entrada de la app
  index.css        # Estilos globales (TailwindCSS)
```

## 🛠️ Tecnologías utilizadas

- [⚛️ React](https://react.dev/)
- [🟦 TypeScript](https://www.typescriptlang.org/)
- [⚡ Vite](https://vitejs.dev/)
- [🐻 Zustand](https://zustand-demo.pmnd.rs/)
- [📝 React Hook Form](https://react-hook-form.com/)
- [💨 TailwindCSS](https://tailwindcss.com/)
- [📷 Unsplash API](https://unsplash.com/developers)

## 📄 Licencia

MIT

---

> Proyecto realizado como práctica de consumo de APIs y manejo de