// Coding Challenge #1

/*
1. Sử dụng hàm khởi tạo (constructor function) để triển khai một lớp Car (ô tô). 
   Một chiếc xe sẽ có thuộc tính `make` (hãng xe) và `speed` (tốc độ). 
   Thuộc tính `speed` là tốc độ hiện tại của xe tính bằng km/h.

2. Triển khai phương thức `accelerate` để tăng tốc độ của xe thêm 10 km/h 
   và hiển thị tốc độ mới lên console.

3. Triển khai phương thức `brake` để giảm tốc độ của xe đi 5 km/h 
   và hiển thị tốc độ mới lên console.

4. Tạo 2 đối tượng xe (car object) và thử gọi các phương thức `accelerate` 
   và `brake` nhiều lần trên mỗi xe.

DATA CAR 1: ‘BMW' going at 120 km/h
DATA CAR 2: ‘Mercedes' going at 95 km/h

*/

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('‘Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
