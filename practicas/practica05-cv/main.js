document.addEventListener('DOMContentLoaded', () => {
    // Animación para progress-bar-value (Dominio de Tecnologías)
    document.querySelectorAll('.progress-bar-value').forEach(bar => {
        let target = bar.getAttribute('data-value') || "0";
        bar.style.width = '0%';
        
        // Ejecutar animación con un pequeño retraso
        setTimeout(() => {
            bar.style.width = target + '%';
        }, 400);
    });
});