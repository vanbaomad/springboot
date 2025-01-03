function calculateFactorial(n) {
    if (n < 0) return "Invalid input"; // Kiểm tra số âm
    if (n === 0 || n === 1) return 1; // Giai thừa của 0 và 1 là 1
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

// Ví dụ
console.log(calculateFactorial(5)); // Output: 120
