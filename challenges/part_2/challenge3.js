// Instructions
// Chúng ta hãy quay lại với việc Mark và John so sánh chỉ số BMI của họ!

// Lần này, chúng ta hãy sử dụng các vật thể để thực hiện phép tính! Hãy nhớ: BMI = mass / (height * height)(khối lượng tính bằng kg và chiều cao tính bằng mét).

// Your tasks:

// 1.Đối với mỗi đối tượng, hãy tạo một đối tượng có các thuộc tính cho tên đầy đủ, khối lượng và chiều cao của chúng (Mark Miller và John Smith). Đặt tên cho các đối tượng này là mark và john, và các thuộc tính của chúng chính xác là fullName, mass và height.

// 2.Tạo một calcBMI phương thức trên mỗi đối tượng để tính BMI (phương thức giống nhau trên cả hai đối tượng). Gán giá trị BMI cho một thuộc tính và trả về giá trị đó từ phương thức.

// 3.Đăng nhập vào bảng điều khiển để biết ai có BMI cao hơn, cùng với tên đầy đủ và BMI tương ứng. Ví dụ: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks nặng 78 kg và cao 1,69 m. John nặng 92 kg và cao 1,95 m.
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};
// gọi để tạo ra thuộc tính bmi
john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(
        `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`,
    );
} else if (mark.bmi < john.bmi) {
    console.log(
        `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`,
    );
}
