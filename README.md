# Trabajo Práctico

Este proyecto es un portafolio personal desarrollado como parte de la **Práctica Formativa Obligatoria 2 (PFO2)** para la materia de Desarrollo Front-End. Se basa en la Landing Page de la PFO1, incorporando funcionalidades interactivas con JavaScript y mejoras en diseño y estructura para optimizar la experiencia del usuario.

## Pasos para clonar el proyecto:

- Clonar mediante HTTPS (se recomienda configurar una clave SSH y clonarlo de esa manera):

```bash
git clone <https://github.com/Mbetania/pfo2.git>

```bash
git clone <git@github.com:Mbetania/pfo2.git>

## Requisitos Previos

Tener instalada la extensión **Live Server** o similar para ejecutar el proyecto en un navegador.

## Estructura del Proyecto

- `index.html` ubicado en la raíz  
- Carpeta `css/` con archivo `styles.css`  
- Carpeta `assets/images/` para recursos gráficos  
- Archivo `scripts.js` con la lógica JavaScript  
- Archivo `README.md` con descripción y checklist  

## Repositorio y Publicación

- Repositorio en GitHub creado  
- Proyecto subido al repositorio  
- Proyecto publicado en GitHub Pages  
- URL de GitHub Pages: `<https://mbetania.github.io/pfo2/>`

---

## Funcionalidades JavaScript Implementadas

Se implementaron las siguientes cinco funcionalidades con JavaScript para mejorar la interactividad:

### ✅ Validación de Formulario

- **Descripción:** Valida los campos obligatorios (Nombre, Apellido, Email) del formulario de contacto, asegurando formatos correctos (email válido, teléfono con al menos 7 dígitos). Muestra mensajes de error debajo de cada campo si hay problemas.  
- **Implementación:** JavaScript verifica los inputs al enviar el formulario y usa LocalStorage para guardar los datos temporalmente.  
- **Justificación:** Garantiza que los datos enviados sean válidos, mejorando la usabilidad y evitando envíos incompletos.

---

### 🌙☀️ Modo Oscuro/Claro

- **Descripción:** Un botón permite alternar entre modos oscuro y claro, modificando colores de fondo, texto y elementos.  
- **Implementación:** Usa una clase CSS `dark-mode` que se activa/desactiva con JavaScript, guardando la preferencia en LocalStorage.  
- **Justificación:** Mejora la accesibilidad y la comodidad visual, especialmente en entornos con poca luz.

---

### ✅ Pop-up de Confirmación de Envío

- **Descripción:** Muestra un pop-up al enviar el formulario correctamente, que se cierra tras 3 segundos o al hacer clic.  
- **Implementación:** Crea un `<div>` dinámico con JavaScript, estilizado con CSS.  
- **Justificación:** Proporciona retroalimentación inmediata, mejorando la experiencia del usuario.

---

### 🧩 Creación de Contenido Dinámico

- **Descripción:** Las tarjetas de la sección "Mis Proyectos" se generan dinámicamente desde un array en JavaScript.  
- **Implementación:** Un array de objetos define los proyectos (título, descripción, imagen), y JavaScript los renderiza en el DOM.  
- **Justificación:** Facilita la escalabilidad, permitiendo agregar proyectos sin modificar el HTML.

---

### 👁️ Ocultar/Mostrar Contenido

- **Descripción:** Un botón permite ocultar o mostrar la sección de "Habilidades".  
- **Implementación:** JavaScript alterna la propiedad `display` del contenedor de habilidades entre `flex` y `none`.  
- **Justificación:** Permite al usuario controlar el contenido visible, útil en dispositivos con pantallas pequeñas.

---

## Mejoras en Diseño y Estructura

Se realizaron las siguientes mejoras respecto a la PFO1:

### 📐 Mejor Organización con Flexbox

- **Descripción:** La sección de "Habilidades" usa Flexbox para un diseño responsivo, con columnas que se apilan ordenadamente en dispositivos móviles.  
- **Justificación:** Mejora la experiencia en diferentes tamaños de pantalla y moderniza el diseño.  
- **Impacto:** El diseño es más limpio y adaptable.

---

### 🔠 Mejor Legibilidad con Ajustes de Tipografía y Contraste

- **Descripción:** Se aumentó el contraste entre texto y fondo en ambos modos (claro/oscuro) y se ajustó el tamaño de fuente.  
- **Justificación:** Facilita la lectura para usuarios con problemas de visión y mejora la accesibilidad.  
- **Impacto:** El contenido es más claro y accesible.
