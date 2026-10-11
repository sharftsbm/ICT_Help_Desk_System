const form = document.getElementById("reportForm");

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message");

        message.textContent = `Thank you, ${name}! Your report has been submitted successfully.`;
        form.reset();
    });
}
