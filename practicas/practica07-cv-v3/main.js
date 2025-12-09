document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".bar-base span");

    bars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        setTimeout(() => {
            bar.style.width = width;
        }, 500); 
    });
});