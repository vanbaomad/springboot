// 1. Tạo thẻ p
const paragraph = document.createElement("p");

// 2. Thiết lập id, nội dung, và thêm vào DOM
paragraph.id = "text";
paragraph.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';
document.body.appendChild(paragraph);

// 3. Đặt màu văn bản thành #777
paragraph.style.color = "#777";

// 4. Đặt kích thước phông chữ thành 2rem
paragraph.style.fontSize = "2rem";
// bai 2
const listItems = document.querySelectorAll('ul li');
listItems.forEach(item=>{  
    item.style.color = 'blue'; });  

// bai 3
// 1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const list = document.getElementById("list");

for (let i = 8; i <= 10; i++) {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${i}`;
    list.appendChild(newItem);
}

// 2. Sửa màu chữ cho thẻ <li> 1 thành màu đỏ
const firstItem = list.children[0]; // Thẻ <li> đầu tiên
firstItem.style.color = "red";

// 3. Sửa background cho thẻ <li> 3 thành màu xanh
const thirdItem = list.children[2]; // Thẻ <li> thứ 3
thirdItem.style.backgroundColor = "green";

// 4. Remove thẻ <li> 4
const fourthItem = list.children[3]; // Thẻ <li> thứ 4
list.removeChild(fourthItem);

// 5. Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước
const replacementItem = document.createElement("li");
replacementItem.textContent = "This is a replacement item";
list.insertBefore(replacementItem, list.children[3]); // Thêm tại vị trí thứ 4
