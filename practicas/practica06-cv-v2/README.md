# 🌟 Práctica 06: Currículum Vitae (Versión 2 - Layout Dual)

## 🎯 Objetivo de la Práctica
El objetivo principal fue desarrollar una segunda versión del Currículum Vitae, enfocándose en un **diseño de dos columnas** (layout dual) y la **visualización dinámica de habilidades**. Se buscó:
1.  **Layout Dual:** Implementar un diseño responsivo utilizando Flexbox en CSS (`display: flex` en `main`) que permite colocar las secciones de contenido en dos columnas en pantallas grandes.
2.  **Visualización de Progreso:** Mantener la integración de JavaScript (`main.js`) para animar las barras de progreso, asociando un porcentaje de dominio a cada habilidad técnica.
3.  **Separación de Responsabilidades:** Utilizar una estructura modular con HTML para el contenido, CSS para el diseño de columnas y estilos, y JavaScript para la interactividad.

## 💻 Tecnologías Utilizadas
* **HTML5:** Para la estructura de encabezados, secciones y la tabla de educación.
* **CSS3 (styles.css):** Para la maquetación en dos columnas, diseño con variables (`:root`), y estilos de las barras de progreso.
* **JavaScript (main.js):** Para la lógica de animación de las barras de progreso (`progress-bar-value`).

## ⚙️ Instrucciones para Ejecutar
1.  Asegúrate de que los tres archivos (`index.html`, `styles.css`, `main.js`) se encuentren en esta carpeta.
2.  Abre el archivo **`index.html`** directamente en el navegador web.
3.  Observa cómo la página utiliza dos columnas para el contenido principal y cómo las barras de habilidades se animan al cargar.