// Coding Challenge #1

/*
Julia và Kate đang thực hiện một nghiên cứu về những chú chó. Vì vậy, mỗi người đã hỏi 5 chủ sở hữu chó về tuổi của chú chó của họ và lưu dữ liệu này vào một mảng (mỗi người một mảng).

Hiện tại, họ chỉ quan tâm đến việc biết một con chó là trưởng thành hay chó con. Một con chó được coi là trưởng thành nếu nó ít nhất 3 tuổi, và là chó con nếu nó ít hơn 3 tuổi.

Hãy tạo một hàm tên là checkDogs, hàm này nhận vào 2 mảng chứa tuổi của các chú chó (dogsJulia và dogsKate), và thực hiện các yêu cầu sau:

Julia phát hiện rằng những người chủ của con chó đầu tiên và hai con cuối cùng thực ra nuôi mèo, không phải chó! Vì vậy, hãy tạo một bản sao nông (shallow copy) từ mảng của Julia, và loại bỏ tuổi của những con mèo khỏi bản sao đó (bởi vì việc thay đổi trực tiếp các tham số của hàm là không tốt).

Tạo một mảng mới kết hợp cả dữ liệu đã được chỉnh sửa của Julia và dữ liệu của Kate.

Đối với từng con chó còn lại, hãy in ra console liệu nó là chó trưởng thành hay chó con:

Nếu là chó trưởng thành: "Dog number 1 is an adult, and is 5 years old"
Nếu là chó con: "Dog number 2 is still a puppy 🐶"
Chạy hàm với cả hai bộ dữ liệu kiểm tra.


TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]  
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]  

*/

const dogsJulia = [3, 5, 2, 12, 7];
const dogsJulia2 = [9, 16, 6, 8, 3];

const dogsKate = [4, 1, 15, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDog = (dogsJulia, dogsKate) => {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    // dogsJuliaCorrected.splice(1,3);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    dogs.forEach((age, index) => {
        if (age >= 3) {
            console.log(
                `Dog number ${index + 1} is an adult, and is ${age} years old`,
            );
        } else {
            console.log(`Dog number ${index + 1} is still a puppy 🐶`);
        }
    });
};

checkDog(dogsJulia, dogsKate);
console.log('--------------------------------');
checkDog(dogsJulia2, dogsKate2);
