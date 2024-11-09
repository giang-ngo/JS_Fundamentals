// Nhớ là chúng ta sẽ sử dụng 'use strict' trong tất cả các đoạn code bây giờ!
'use strict';

// PROBLEM:
// Chúng tôi làm việc cho một công ty chế tạo nhiệt kế cho nhà thông minh. Nhiệm vụ gần đây nhất của chúng tôi là: "Cho một mảng nhiệt độ trong một ngày, tính toán biên độ nhiệt độ. Lưu ý rằng đôi khi có thể có lỗi cảm biến."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Hiểu vấn đề
// - Biên độ nhiệt là gì? Answer: sự chênh lệch giữa nhiệt độ cao nhất và thấp nhất
// - Làm thế nào để tính nhiệt độ tối đa và tối thiểu?
// - Lỗi cảm biến là gì? Và cần xử lý thế nào?

// 2) Chia nhỏ thành các vấn đề con
// - Làm thế nào để bỏ qua lỗi?
// - Tìm giá trị tối đa trong mảng nhiệt độ
// - Tìm giá trị tối thiểu trong mảng nhiệt độ
// - Trừ giá trị tối thiểu khỏi giá trị tối đa (biên độ) và trả về kết quả

const calcTempAmplitude = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
    for (let index = 0; index < temps.length; index++) {
        const curTemp = temps[index];
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) {
            max = curTemp;
        }
        if (curTemp < min) {
            min = curTemp;
        }
    }
    return max - min;
};

console.log(calcTempAmplitude(temperatures, [3, 5, 10, 100]));

const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
console.log(arr1.concat(arr2));

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celsius:')),
    };
    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
};

console.log(measureKelvin());
