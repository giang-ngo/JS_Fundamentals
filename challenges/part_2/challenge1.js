// Instructions
// Quay lại với hai đội thể dục dụng cụ, Dolphins và Koalas! Có một môn thể dục dụng cụ mới, hoạt động theo cách khác.
// Mỗi đội thi đấu 3 lần, sau đó tính điểm trung bình của 3 lần (mỗi đội có một điểm trung bình).
// Một đội chỉ thắng nếu có ít nhất gấp đôi điểm trung bình của đội kia. Nếu không, không có đội nào thắng!

// Your tasks:

// 1.Tạo một hàm mũi tên calcAverage để tính điểm trung bình của 3 điểm. Hàm này phải có ba tham số và trả về một số duy nhất (điểm trung bình).
// 2.Tạo hai biến mới — scoreDolphins và scoreKoalas, rồi gán giá trị trả về từ calcAverage hàm cho chúng (bạn sẽ cần gọi hàm này và truyền điểm làm đối số).
// 3.Tạo một hàm checkWinner lấy điểm trung bình của mỗi đội làm tham số ( avgDolphins và avgKoalas), sau đó ghi lại người chiến thắng vào bảng điều khiển, cùng với điểm chiến thắng, theo quy tắc trên. Ví dụ: Koalas win (30 vs. 13)(sử dụng avgDolphins và avgKoalas thay vì các giá trị được mã hóa cứng).
// 4.Sử dụng chức năng này checkWinner để xác định người chiến thắng cho cả  DATA 1 và DATA 2.
// 5.Lần này hãy bỏ qua các lần rút thăm. Thay vào đó, hãy đăng nhập No team wins...vào bảng điều khiển nếu không có người chiến thắng.

// TEST DATA 1: Cá heo đạt 44, 23 và 71 điểm. Gấu túi đạt 65, 54 và 49 điểm.
// TEST DATA 2: Cá heo đạt 85, 54 và 41 điểm. Gấu túi đạt 23, 34 và 27 điểm.

const calcAvg = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAvg(44, 23, 71);
const scoreDolphins2 = calcAvg(85, 54, 41);
const scoreKoalas = calcAvg(65, 54, 49);
const scoreKoalas2 = calcAvg(23, 34, 27);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win 🏆(${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);
