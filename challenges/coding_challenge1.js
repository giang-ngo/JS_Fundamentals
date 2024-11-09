/*

Cho một mảng nhiệt độ tối đa dự báo,
nhiệt kế sẽ hiển thị một chuỗi với các
nhiệt độ này.

Example: [17, 21, 23] sẽ in ra "... 17°C trong 1 ngày ...
21°C trong 2 ngày ... 23°C trong 3 ngày ..."

Tạo một hàm 'printForecast' nhận vào một
mảng 'arr' và in ra một chuỗi như trên
trong console.

TEST DATA 1:[17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

*/
const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
    let str = '';
    for (let i = 1; i <= arr.length; i++) {
        str += `... ${arr[i - 1]}°C trong ${i} ngày`;
    }
    console.log(str);
};
printForecast(temps1);
printForecast(temps2);
