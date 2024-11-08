// Instructions
// Steven muốn bạn cải thiện máy tính tiền boa của anh ấy, sử dụng các quy tắc giống như trước — boa 15% giá trị hóa đơn nếu giá trị hóa đơn từ 50 đến 300, và nếu giá trị khác nhau, tiền boa là 20%.

// Your tasks:

// 1.Viết một hàm calcTip lấy bất kỳ giá trị hóa đơn nào làm đầu vào và trả về tiền boa tương ứng, được tính toán dựa trên các quy tắc ở trên (bạn có thể kiểm tra mã từ thử thách máy tính tiền boa đầu tiên nếu cần). Sử dụng loại hàm mà bạn thích nhất. Kiểm tra hàm bằng cách sử dụng giá trị hóa đơn là 100.

// 2.Và bây giờ chúng ta hãy sử dụng mảng! Vì vậy, hãy tạo một mảng có tên là bills chứa dữ liệu thử nghiệm bên dưới.

// 3.Tạo một mảng có tên là tips chứa giá trị tiền boa cho mỗi tờ tiền, được tính toán từ hàm bạn đã tạo trước đó.

// 4.BONUS: Tạo một mảng totals chứa tổng giá trị, do đó bill + tip.

// TEST DATA: 125, 555 và 44.

const calcTip = (bill) =>
    bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills, tips, totals);
