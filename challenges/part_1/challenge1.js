// Instructions
// Mark và John đang cố gắng so sánh chỉ số BMI (Chỉ số khối cơ thể) của họ, được tính bằng công thức: BMI = mass / (height * height)(khối lượng tính bằng kg và chiều cao tính bằng mét).

// Your task

// 1.Lưu trữ khối lượng và chiều cao của Mark và John trong các biến được gọi là massMark, heightMark, massJohnvà heightJohn.

// 2.Tính chỉ số BMI của cả hai người bằng công thức và lưu trữ kết quả trong hai biến có tên là BMIMark và BMIJohn.

// 3.Ghi giá trị của BMIMark và BMIJohn vào bảng điều khiển.

// 4.BONUS: Tạo một biến boolean markHigherBMI chứa thông tin về việc Mark có BMI cao hơn John hay không. Ghi vào bảng điều khiển

// TEST DATA: Marks nặng 78 kg và cao 1,69 m. John nặng 92 kg và cao 1,95 m.

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const markHigherBMI = heightMark > heightJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
