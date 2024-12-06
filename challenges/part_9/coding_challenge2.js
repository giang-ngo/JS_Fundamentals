// Coding Challenge #2

/*
1. Tái tạo thử thách 1, nhưng lần này sử dụng một lớp ES6 (ES6 class);
2. Thêm một **getter** tên là 'speedUS' để trả về tốc độ hiện tại tính bằng dặm/giờ (mi/h) (bằng cách chia cho 1.6);
3. Thêm một **setter** tên là 'speedUS' để thiết lập tốc độ hiện tại tính bằng dặm/giờ (mi/h) (nhưng chuyển đổi về km/h trước khi lưu, bằng cách nhân giá trị nhập vào với 1.6);
4. Tạo một xe mới và thử nghiệm các phương thức `accelerate` và `brake`, cũng như các getter và setter.

DATA CAR 1: 'Ford' going at 120 km/h

*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
