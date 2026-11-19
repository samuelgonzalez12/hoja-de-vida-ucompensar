document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    if (form && feedback) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            const metodo = document.getElementById("metodo").value;

            feedback.textContent = `Solicitud preparada con método ${metodo} para ${nombre}. (En un entorno estático de GitHub Pages, el envío real requiere un backend o servicio de formularios).`;
        });
    }
});