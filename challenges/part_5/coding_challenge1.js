// Coding Challenge #1
/*
Let's build a simple poll app!

Một khảo sát bao gồm một câu hỏi, một mảng các tùy chọn để người dùng lựa chọn, và một mảng chứa số lượng câu trả lời cho từng tùy chọn. 

Here are your tasks:

1. Tạo một phương thức tên là `registerNewAnswer` trong đối tượng `poll`. 
   Phương thức này thực hiện 2 nhiệm vụ:
   1.1 Hiển thị một cửa sổ nhắc (prompt) để người dùng nhập số của tùy chọn họ đã chọn. 
       Cửa sổ nhắc nên có dạng sau:
       ```
       What is your favourite programming language? 
       0: JavaScript
       1: Python
       2: Rust
       3: C++
       (Nhập số của tùy chọn)
       ```
   1.2 Dựa trên số người dùng nhập, cập nhật mảng `answers`. Ví dụ, nếu người dùng nhập 3, tăng giá trị TẠI VỊ TRÍ 3 của mảng lên 1. Đảm bảo kiểm tra xem đầu vào có phải là một số hợp lệ và nằm trong phạm vi (ví dụ: câu trả lời 52 thì không hợp lý, đúng chứ?).

2. Gọi phương thức này mỗi khi người dùng nhấn nút "Answer poll" (Trả lời khảo sát).

3. Tạo một phương thức `displayResults` để hiển thị kết quả khảo sát. Phương thức này nhận một chuỗi làm tham số đầu vào (gọi là `type`), giá trị có thể là `'string'` hoặc `'array'`. 
   - Nếu `type` là `'array'`, chỉ cần hiển thị mảng kết quả như nó vốn có, sử dụng `console.log()`. Đây nên là tùy chọn mặc định.
   - Nếu `type` là `'string'`, hiển thị kết quả dưới dạng chuỗi như sau: `"Poll results are 13, 2, 4, 1"`.

4. Gọi phương thức `displayResults` sau mỗi lần gọi phương thức `registerNewAnswer`.

BONUS: Sử dụng phương thức `displayResults` để hiển thị 2 mảng dữ liệu kiểm tra. Sử dụng cả tùy chọn `'array'` và `'string'`. KHÔNG đặt các mảng này vào đối tượng `poll`! Vậy từ khóa `this` sẽ trông như thế nào trong tình huống này?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
* */

const poll = {
    question: 'What is your favorite programming language?',
    option: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // get answer
        const answer = Number(
            prompt(
                `${this.question}\n${this.option.join(
                    '\n',
                )}\n(Write option number)`,
            ),
        );
        console.log(answer);
        // register answer
        typeof answer === 'number' &&
            answer < this.answers.length &&
            this.answers[answer]++;
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
};

// poll.registerNewAnswer();
document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
