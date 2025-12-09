document.addEventListener('DOMContentLoaded', () => {
	// Animación para progress-bar-value (skills)
	document.querySelectorAll('.progress-bar-value').forEach(bar => {
		let target = bar.getAttribute('data-value') || "0";
		bar.style.width = '0%'; // Inicialmente 0%
		setTimeout(() => {
			bar.style.width = target + '%';
		}, 400);
	});
});