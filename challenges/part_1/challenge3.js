// Instructions
// Có hai đội thể dục dụng cụ: Cá heo và Koala. Họ thi đấu với nhau 3 lần. Người chiến thắng có điểm trung bình cao nhất sẽ giành được cúp!

// Your tasks:

// 1. Tính điểm trung bình cho mỗi đội, sử dụng dữ liệu kiểm tra được đưa vào bên dưới. Điểm trung bình của Dolphins nên được gán cho scoreDolphins biến và điểm trung bình của Koalas nên được gán cho scoreKoalas biến.

// 2. So sánh điểm trung bình của các đội để xác định người chiến thắng trong cuộc thi và in ra bảng điều khiển:
// "Dolphins win the trophy"nếu Dolphins thắng, hoặc
// "Koalas win the trophy"nếu Koalas thắng, hoặc
// "Both win the trophy"nếu điểm trung bình của họ bằng nhau.

// TEST DATA:  Cá heo đạt 96, 108 và 89 điểm. Gấu túi đạt 88, 91 và 110 điểm.

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy');
} else if (scoreDolphins < scoreKoalas) {
    console.log('Koalas win the trophy');
} else {
    console.log('Both win the trophy');
}
