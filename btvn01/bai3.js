function translate(countryCode) {
    switch (countryCode.toUpperCase()) {
        case 'VN':
            return "Xin chào";
        case 'EN':
            return "Hello";
        case 'FR':
            return "Bonjour";
        default:
            return "Country code not supported";
    }
}


console.log(translate('VN')); // Output: Xin chào
console.log(translate('EN')); // Output: Hello
console.log(translate('FR')); // Output: Bonjour
