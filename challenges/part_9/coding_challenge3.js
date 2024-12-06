// Coding Challenge #3

/*
1. Sử dụng một hàm constructor để triển khai một
Xe Điện (Electric Car - gọi là EV) như một lớp con (CHILD "class") của Car.
Ngoài hãng xe (make) và tốc độ hiện tại (current speed), EV cũng có
thuộc tính mức pin hiện tại tính theo % ('charge' property);

2. Triển khai phương thức ‘chargeBattery’, phương thức này nhận một
tham số ‘chargeTo’ và đặt mức pin hiện tại của xe thành giá trị
‘chargeTo’;

3. Triển khai phương thức ‘accelerate’, phương thức này sẽ
tăng tốc xe thêm 20 km/h, và giảm mức pin đi 1%. Sau đó log một
thông báo như sau: ‘Tesla đang chạy ở tốc độ 140 km/h, với mức pin còn 22%’;

4. Tạo một đối tượng xe điện và thử nghiệm với các phương thức
‘accelerate’, ‘brake’ (phanh) và ‘chargeBattery’ (sạc lên 90%).
Chú ý điều gì xảy ra khi gọi phương thức ‘accelerate’! GỢI Ý: Hãy xem lại
định nghĩa về tính đa hình (polymorphism) 😉

DATA CAR 1: ‘Tesla’ going at 120 km/h, with a charge
of 23%

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

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(
        `${this.make} đang chạy ở tốc độ ${this.speed} km/h, với mức pin còn ${this.charge}%`,
    );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
