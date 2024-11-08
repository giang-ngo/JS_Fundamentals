// Instructions
// Steven cần một máy tính tiền boa rất đơn giản cho bất cứ khi nào anh ấy đi ăn ở nhà hàng. Ở đất nước anh ấy, thông thường là boa 15% nếu giá trị hóa đơn từ 50 đến 300. Nếu giá trị khác nhau, tiền boa là 20%.

// Your tasks:

// 1.Tính tiền boa, tùy thuộc vào giá trị hóa đơn. Tạo một biến được gọi tip cho mục đích này. Không được phép sử dụng if...else câu lệnh (nếu dễ hơn, bạn có thể bắt đầu bằng một if...else câu lệnh, sau đó thử chuyển đổi thành toán tử ba ngôi).

// 2.In ra màn hình console một chuỗi chứa bill giá trị, dấu tip, và giá trị cuối cùng (bill + tip)
// Ví dụ: The bill was 275, the tip was 41.25, and the total value 316.25.

// TEST DATA: Kiểm tra với bill các giá trị khác nhau: 275, 40 và 430

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${
        bill + tip
    }`,
);

// const bills = [275, 40, 430];
// const calcTip = (bill) =>
//     bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// for (let index = 0; index < bills.length; index++) {
//     console.log(
//         `The bill was ${bills[index]}, the tip was ${calcTip(
//             bills[index],
//         )}, and the total value ${bills[index] + calcTip(bills[index])}.`,
//     );
// }
