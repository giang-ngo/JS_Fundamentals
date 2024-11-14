const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // mở cửa 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // Hàm orderDelivery với các giá trị mặc định cho các tham số
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} 
            and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

// Gọi hàm orderDelivery với các tham số cụ thể
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

// Gọi hàm orderDelivery với một số tham số mặc định
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
});

// Destructuring các thuộc tính từ đối tượng restaurant
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Đổi tên thuộc tính khi destructuring
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Giá trị mặc định trong destructuring
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Thay đổi giá trị của biến
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Gán giá trị mới cho a và b từ đối tượng obj
({ a, b } = obj);
console.log(a, b);

// Destructuring đối tượng lồng nhau
const {
    fri: { open: o, close: c },
} = openingHours;

console.log(o, c);
