// URLs estables de JSONPlaceholder
const urls = {
    users: "https://jsonplaceholder.typicode.com/users",
    posts: "https://jsonplaceholder.typicode.com/posts"
};

const contenedor = document.getElementById("resultado");

// Funciones modulares para renderizar cada tipo de dato
const renderFunctions = {
    users: (data) => {
        return data.map(u => `
            <div class="card user-card">
                <h3>${u.name} (${u.username})</h3>
                <p><b>Email:</b> ${u.email}</p>
                <p><b>Web:</b> <a href="http://${u.website}" target="_blank">${u.website}</a></p>
                <p class="description"><b>Compañía:</b> ${u.company.name}</p>
            </div>
        `).join('');
    },
    
    posts: (data) => {
        return data.slice(0, 30).map(p => `
            <div class="card post-card">
                <h3>${p.title}</h3>
                <p class="description">${p.body.slice(0, 100)}...</p>
                <p><i>ID de Usuario: ${p.userId}</i></p>
            </div>
        `).join('');
    }
};

document.getElementById("obtener").addEventListener("click", async () => {
    const tipo = document.getElementById("tipo").value;
    contenedor.innerHTML = `<p class="loading-message">Cargando ${tipo} de la API... ⏳</p>`;

    try {
        const respuesta = await fetch(urls[tipo]);
        if (!respuesta.ok) {
            throw new Error(`Error en la respuesta de la API: ${respuesta.status}`);
        }
        
        const datos = await respuesta.json();

        // Limpiar y renderizar
        contenedor.innerHTML = renderFunctions[tipo](datos);
        contenedor.classList.remove('error-state');
        contenedor.classList.add('grid-view');

    } catch (error) {
        contenedor.innerHTML = `<p class="error-message">❌ Error de conexión o formato de datos incorrecto.</p>`;
        contenedor.classList.remove('grid-view');
        contenedor.classList.add('error-state');
        console.error("Fallo en la petición FETCH:", error);
    }
});