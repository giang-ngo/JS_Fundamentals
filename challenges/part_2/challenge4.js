// Instructions
// Hãy cải thiện máy tính tiền boa của Steven hơn nữa bằng cách sử dụng vòng lặp!

// Your tasks:

// 1.Tạo một mảng có tên là bills chứa tất cả 10 giá trị hóa đơn thử nghiệm.

// 2.Tạo mảng rỗng cho các mẹo và tổng số ( tips và totals)

// 3.Sử dụng calcTip hàm chúng tôi đã viết trước đó (có trong mã khởi động) để tính tiền boa và tổng giá trị ( bill + tip) cho mọi giá trị hóa đơn trong bills mảng. Sử dụng vòng lặp for để thực hiện 10 phép tính!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 và 52.

// BONUS:

// Viết một hàm calcAverage lấy một mảng được gọi arr là đối số. Hàm này tính toán giá trị trung bình của tất cả các số trong mảng đã cho. Đây là một thử thách KHÓ (chúng ta chưa từng làm điều này trước đây)! Sau đây là cách giải quyết nếu bạn muốn:

// 1.Đầu tiên, bạn sẽ cần cộng tất cả các giá trị trong mảng. Để thực hiện phép cộng, hãy bắt đầu bằng cách tạo một biến sum bắt đầu từ 0. Sau đó lặp qua mảng bằng vòng lặp for. Trong mỗi lần lặp, hãy thêm giá trị hiện tại vào sum biến. Theo cách này, đến cuối vòng lặp, bạn đã cộng tất cả các giá trị lại với nhau.

// 2.Để tính giá trị trung bình, hãy chia số sumbạn đã tính trước đó cho độ dài của mảng (vì đó là số phần tử).

// 3.Gọi hàm bằng totals mảng.

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let index = 0; index < bills.length; index++) {
    // tips[index] = calcTip(bills[index]);
    // totals[index] = tips[index] + bills[index];
    tips.push(calcTip(bills[index]));
    totals.push(tips[index] + bills[index]);
}

console.log(tips);
console.log(totals);

const calcAverage = (arr) => {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum / arr.length;
};

console.log(calcAverage(totals));
