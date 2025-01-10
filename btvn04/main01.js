// Lấy các phần tử cần thao tác
const counter = document.getElementById("counter");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

// Giá trị ban đầu của counter
let count = 0;

// Hàm cập nhật màu sắc dựa trên giá trị của counter
function updateColor() {
    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "#333333";
    }
}

// Xử lý sự kiện cho nút "Trừ"
prevBtn.addEventListener("click", () => {
    count -= 1;
    counter.textContent = count;
    updateColor();
});

// Xử lý sự kiện cho nút "Cộng"
nextBtn.addEventListener("click", () => {
    count += 1;
    counter.textContent = count;
    updateColor();
});
