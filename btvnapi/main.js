const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
    try {
        // Gọi API để lấy danh sách giống loài
        let res = await axios.get("https://dog.ceo/api/breeds/list/all");

        // Sau khi có data thì hiển thị kết quả trên giao diện
        renderBreed(res.data.message);
    } catch (error) {
        console.error("Error fetching breed list:", error);
    }
}

function renderBreed(breeds) {
    // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM

    // Cách 1: Sử dụng for ... in
    // Cách 2 : Lấy ra danh sách keys của objec (Object.keys) => Duyệt mảng
    // Xóa các option cũ (nếu có)
    select.innerHTML = "";


    for (let breed in breeds) {
        const option = document.createElement("option");
        option.value = breed;
        option.textContent = breed;
        select.appendChild(option);
    }
}
// Khi nhấn nút "Fetch", lấy ảnh random từ giống loài đã chọn
btn.addEventListener("click", async () => {
    const selectedBreed = select.value;

    if (selectedBreed) {
        try {
            const res = await axios.get(
                `https://dog.ceo/api/breed/${selectedBreed}/images/random`
            );

            // Hiển thị ảnh vào thẻ img
            image.src = res.data.message;
        } catch (error) {
            console.error("Error fetching dog image:", error);
        }
    } else {
        alert("Please select a breed!");
    }
});
getBreedList()
