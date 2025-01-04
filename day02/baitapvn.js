// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3
function printProduct(product) {
    console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
}
printProduct(products[3]);
// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
function calculateTotal(products) {
    let total = 0;
    for (let product of products) {
        total += product.price * product.count;
    }
    return total;
}
console.log(calculateTotal(products));
// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
function findProductsByBrand(products, brand) {
    let result = [];
    for (let product of products) {
        if (product.brand === brand) {
            result.push(product);
        }
    }
    return result;
}

// 4. Tìm các sản phẩm có giá > 20000000
function findProductsByPrice(products, price) {
    let result = [];
    for (let product of products) {
        if (product.price > price) {
            result.push(product);
        }
    }
    return result;
}
console.log(findProductsByPrice(products, 20000000));
// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
function findProductsByName(products, name) {
    let result = [];
    for (let product of products) {
        if (product.name.toLowerCase().includes(name.toLowerCase())) {
            result.push(product);
        }
    }
    return result;
}
console.log(findProductsByName(products, "pro"));
// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
function addProduct(products, product) {
    products.push(product);
}
addProduct(products, {
    name: "Samsung Galaxy S21",
    price: 15000000,
    brand: "Samsung",
    count: 2,
});
console.log(products);
// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
function removeProductsByBrand(products, brand) {
    let result = [];
    for (let product of products) {
        if (product.brand !== brand) {
            result.push(product);
        }
    }
    return result;
}
console.log(removeProductsByBrand(products, "Samsung"));
// 8. Sắp xếp giỏ hàng theo price tăng dần
function sortProductsByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
}
console.log(sortProductsByPrice(products));
// 9. Sắp xếp giỏ hàng theo count giảm dần
function sortProductsByCount(products) {
    return products.sort((a, b) => b.count - a.count);
}
console.log(sortProductsByCount(products));
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
function getTwoProducts(products) {
    return products.slice(0, 2);
}
console.log(getTwoProducts(products));