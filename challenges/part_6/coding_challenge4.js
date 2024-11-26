// Coding Challenge #4

/*
Julia và Kate vẫn đang nghiên cứu về chó, và lần này 
họ nghiên cứu xem liệu các chú chó có ăn quá nhiều hay quá ít.
Ăn quá nhiều nghĩa là khẩu phần thức ăn hiện tại của 
chó lớn hơn khẩu phần được khuyến nghị, và ăn quá ít thì ngược lại.
Ăn một lượng hợp lý nghĩa là khẩu phần hiện tại của 
chó nằm trong khoảng 10% trên và 10% dưới khẩu phần 
được khuyến nghị (xem gợi ý).

1. Lặp qua mảng chứa các đối tượng chó, và 
đối với mỗi chú chó, tính khẩu phần thức ăn được khuyến nghị 
và thêm nó vào đối tượng như một thuộc tính mới. 
KHÔNG tạo một mảng mới, chỉ cần lặp qua mảng.
Công thức: `recommendedFood = weight ** 0.75 * 28` (Kết quả 
là lượng thức ăn tính bằng gram, và cân nặng cần được 
đổi sang đơn vị kg).

2. Tìm chú chó của Sarah và ghi ra console xem 
chú chó này ăn quá nhiều hay quá ít. 
GỢI Ý: Một số chú chó có nhiều chủ, vì vậy đầu tiên bạn cần 
tìm Sarah trong mảng `owners`

3. Tạo một mảng chứa tất cả các chủ của những chú chó 
ăn quá nhiều ('ownersEatTooMuch') và một mảng chứa các chủ của những chú chó 
ăn quá ít ('ownersEatTooLittle').

4. Ghi ra console một chuỗi cho mỗi mảng được tạo 
ở bước 3, như sau: `"Matilda và Alice và Bob có chó ăn quá nhiều!"` 
và `"Sarah và John và Michael có chó ăn quá ít!"`

5. Ghi ra console xem có chú chó nào ăn 
CHÍNH XÁC lượng thức ăn được khuyến nghị hay không (chỉ cần `true` hoặc `false`).

6. Ghi ra console xem có chú chó nào ăn 
một lượng THÍCH HỢP hay không (chỉ cần `true` hoặc `false`).

7. Tạo một mảng chứa các chú chó 
đang ăn một lượng THÍCH HỢP (cố gắng tái sử dụng điều kiện đã sử dụng ở bước 6).

8. Tạo một bản sao nông (shallow copy) của mảng các chú chó 
và sắp xếp nó theo khẩu phần thức ăn được khuyến nghị theo thứ tự tăng dần 
(ghi nhớ rằng các khẩu phần nằm trong các đối tượng của mảng).

HINT: Để nằm trong khoảng 10% trên và dưới khẩu phần được khuyến nghị, điều đó nghĩa là: 
`current > (recommended * 0.90) && current < (recommended * 1.10)`. 
Cụ thể, khẩu phần hiện tại nên nằm trong khoảng từ 90% đến 110% của khẩu phần được khuyến nghị.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

*/
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2
const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
    `Sarah's dog is eating too ${
        dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
    }`,
);

// 3
const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recFood)
    .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recFood)
    .flatMap((dog) => dog.owners);

console.log(ownersEatTooLittle);

// 4
// Matilda và Alice và Bob có chó ăn quá nhiều!"`
// và `"Sarah và John và Michael có chó ăn quá ít!
console.log(`${ownersEatTooMuch.join(' và ')} có chó ăn quá nhiều!`);
console.log(`${ownersEatTooLittle.join(' và ')} có chó ăn quá ít!`);

// 5
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6
const checkEatingOkay = (dog) =>
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood;
console.log(dogs.some((dog) => checkEatingOkay(dog)));

// 7
console.log(dogs.filter(checkEatingOkay));

// 8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
