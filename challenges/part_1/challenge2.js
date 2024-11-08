// Instructions
// Sử dụng ví dụ BMI từ Challenge #1 và mã bạn đã viết rồi cải thiện nó:

// 1. In ra một kết quả đẹp mắt vào bảng điều khiển, cho người dùng biết ai có BMI cao hơn. Thông báo có thể là:
// "Mark's BMI is higher than John's!"hoặc "John's BMI is higher than Mark's!".

// 2. Sửa đổi các đầu ra ở trên để sử dụng các ký tự mẫu nhằm đưa các giá trị BMI vào đầu ra.
// Example:  "Mark's BMI (28.3) is higher than John's (23.9)!"hoặc "John's BMI (29.1) is higher than Mark's (27)!".

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else if (BMIMark < BMIJohn) {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
