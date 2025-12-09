# 🌟 Práctica 11: Explorador de API

## 🎯 Objetivo de la Práctica
El objetivo principal fue demostrar el manejo robusto de **promesas y peticiones asíncronas** en JavaScript para consumir datos de una API externa **estable** (JSONPlaceholder) y renderizarlos dinámicamente en el DOM. Se buscó:
1.  **Consumo Asíncrono Estable:** Utilizar la sintaxis `async/await` con `fetch` sobre una API confiable que garantiza la funcionalidad de la práctica.
2.  **Manejo de Errores:** Implementar una estructura `try/catch` para manejar fallos de conexión o errores en la respuesta de la API, mostrando *feedback* claro al usuario.
3.  **Modularidad de Renderizado:** Refactorizar el código utilizando un objeto de funciones (`renderFunctions`) para generar el *markup* HTML específico para cada tipo de dato (Usuarios y Posts), manteniendo la función principal de *fetch* limpia.
4.  **Diseño Profesional:** Implementar un diseño de alto contraste con un *layout* de tarjetas responsivo usando **CSS Grid**.

## 💻 Tecnologías Utilizadas
* **HTML5:** Estructura de la interfaz de consulta (selector y botón).
* **CSS3 (styles.css):** Diseño moderno (Dark Mode), uso de la fuente Oswald y *layout* responsivo con CSS Grid.
* **JavaScript (main.js):** Lógica asíncrona (`fetch`, `async/await`), manejo de errores, y renderizado dinámico de los resultados de la API.

## ⚙️ Instrucciones para Ejecutar
1.  Asegúrate de que los archivos `index.html` y `main.js` se encuentren en esta carpeta.
2.  Abre el archivo **`index.html`** en el navegador.
3.  Selecciona una opción del menú desplegable ("Usuarios" o "Publicaciones").
4.  Haz clic en el botón **"Obtener Datos"** y verifica que la información se carga correctamente desde la API estable.