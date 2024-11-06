const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Bạn có thể bắt đầu học lái xe 😊');
} else {
    const yearsLeft = 18 - year;
    console.log(
        `Bạn còn quá trẻ. Hãy chờ ${yearsLeft} năm để lấy bằng lái xe 😢`,
    );
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
