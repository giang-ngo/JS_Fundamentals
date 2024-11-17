// Coding Challenge #2

/*
Đây là một thử thách về tư duy nhiều hơn là một thử thách lập trình. 🤓

Hãy lấy hàm IIFE (Immediately Invoked Function Expression) dưới đây và, 
ở cuối hàm, gắn một *event listener* để thay đổi màu của phần tử `h1` 
('header') thành màu xanh dương mỗi khi phần tử `BODY` được nhấn. 
KHÔNG chọn lại phần tử `h1`!

*/
(() => {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', () => {
        header.style.color = 'blue';
    });
})();
