//Coding Challenge #2

/*
Hãy quay lại nghiên cứu của Julia và Kate về chó.
Lần này, họ muốn chuyển đổi tuổi của chó sang tuổi
con người và tính tuổi trung bình của những con chó
trong nghiên cứu của họ.

Tạo một hàm 'calcAverageHumanAge', hàm này nhận vào
một mảng tuổi của chó ('ages') và thực hiện các bước
sau theo thứ tự:

1. Tính tuổi của chó theo năm con người bằng công thức
   sau: nếu chó <= 2 tuổi, humanAge = 2 * dogAge. Nếu chó > 2 tuổi,
   humanAge = 16 + dogAge * 4.
2. Loại bỏ tất cả những con chó có tuổi con người
   nhỏ hơn 18 (tức là chỉ giữ lại những con chó có tuổi con người
   từ 18 trở lên).
3. Tính tuổi trung bình của tất cả những con chó trưởng thành
4. Chạy hàm với cả hai bộ dữ liệu thử nghiệm.

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

const ages = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
    const adults = humanAges.filter((age) => age >= 18);
    console.log(humanAges);
    console.log(adults);

    // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

    const average = adults.reduce(
        (acc, age, i, arr) => acc + age / arr.length,
        0,
    );
    return average;
};
const avg1 = calcAverageHumanAge(ages);
const avg2 = calcAverageHumanAge(ages2);

console.log(avg1, avg2);
