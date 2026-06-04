document.addEventListener("DOMContentLoaded", () => {
    
    // Логика переключения темы
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Проверка сохранения localStorage
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeIcon.classList.replace("bi-moon", "bi-sun"); // Меняем луну на солнце
    }

    // Прослушка кнопки
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        
        // Проверка текущего состояния и обновление localStorage + иконка
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            themeIcon.classList.replace("bi-moon", "bi-sun");
        } else {
            localStorage.setItem("theme", "light");
            themeIcon.classList.replace("bi-sun", "bi-moon");
        }
    });
});