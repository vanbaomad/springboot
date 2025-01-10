// Lấy các phần tử cần thao tác
const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("toggle-btn");
const toggleIcon = document.getElementById("toggle-icon");
const icon = toggleIcon.querySelector("i");

// Xử lý sự kiện khi bấm nút "Show/Hide"
toggleBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleBtn.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleBtn.textContent = "Show";
    }
});

// Xử lý sự kiện khi bấm icon
toggleIcon.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});
