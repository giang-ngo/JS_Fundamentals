// Coding Challenge #4

/*
1. Tạo lại thử thách #3, nhưng lần này sử dụng các lớp ES6: 
tạo một lớp con có tên ‘EVCL’ từ lớp cha ‘CarCl’.

2. Làm cho thuộc tính 'charge' (mức sạc) trở thành thuộc tính riêng tư.

3. Triển khai khả năng liên kết chuỗi (chaining) các phương thức 
‘accelerate’ (tăng tốc) và ‘chargeBattery’ (sạc pin) của lớp này, 
đồng thời cập nhật phương thức 'brake' (phanh) trong lớp CarCl. 
Hãy thử nghiệm với việc liên kết chuỗi!

DATA CAR 1: ‘Rivian' going at 120 km/h, with a charge
of 23%

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
        return this;
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
            `${this.make} đang chạy ở tốc độ ${
                this.speed
            } km/h, với mức pin còn ${this.#charge}%`,
        );
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian
    .accelerate()
    .accelerate()
    .chargeBattery()
    .chargeBattery(50)
    .brake()
    .accelerate();

console.log(rivian.speedUS);
