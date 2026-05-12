// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    
    // Set initial theme based on local storage or system preference
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme == "dark") {
        document.body.setAttribute("data-theme", "dark");
        if(themeToggleBtn) themeToggleBtn.innerHTML = "☀️"; // Sun icon
    } else if (currentTheme == "light") {
        document.body.setAttribute("data-theme", "light");
        if(themeToggleBtn) themeToggleBtn.innerHTML = "🌙"; // Moon icon
    } else if (prefersDarkScheme.matches) {
        document.body.setAttribute("data-theme", "dark");
        if(themeToggleBtn) themeToggleBtn.innerHTML = "☀️";
    }

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function() {
            let theme = document.body.getAttribute("data-theme");
            if (theme == "dark") {
                document.body.setAttribute("data-theme", "light");
                localStorage.setItem("theme", "light");
                themeToggleBtn.innerHTML = "🌙";
            } else {
                document.body.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
                themeToggleBtn.innerHTML = "☀️";
            }
        });
    }
});

// Modal Logic
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
        setTimeout(() => {
            modal.classList.add("show");
        }, 10);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300); // Matches CSS transition duration
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal(event.target.id);
    }
}
