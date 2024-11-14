// Coding Challenge #4
/*
Viết một chương trình nhận một danh sách các tên biến được viết theo định dạng underscore_case và chuyển chúng sang định dạng camelCase.

Dữ liệu đầu vào sẽ đến từ một ô textarea được chèn vào trong DOM (xem mã dưới đây), và chuyển đổi sẽ diễn ra khi nút được nhấn.

DỮ LIỆU KIỂM TRA NÀY (dán vào ô textarea)
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

NÊN TẠO RA KẾT QUẢ NÀY (5 lần console.log riêng biệt)
underscoreCase          ✅
firstName               ✅✅
someVariable            ✅✅✅
calculateAge            ✅✅✅✅
delayedDeparture        ✅✅✅✅✅

GỢI Ý 1: Hãy nhớ ký tự nào xác định một dòng mới trong textarea. 🤔

GỢI Ý 2: Giải pháp chỉ cần hoạt động với các biến được tạo từ 2 từ, như a_b.

GỢI Ý 3: Bắt đầu mà không cần lo lắng về các ký hiệu ✅. Hãy xử lý chúng chỉ sau khi bạn đã làm xong phần chuyển đổi tên biến. 😉

GỢI Ý 4: Thử thách này cố tình khó, vì vậy hãy bắt đầu xem giải pháp nếu bạn bị kẹt. Sau đó dừng lại và tiếp tục!

Sau đó, thử nghiệm với dữ liệu của riêng bạn!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', () => {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(rows);

    for (const [i, value] of rows.entries()) {
        const [first, second] = value.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase(),
        )}`;
        console.log(`${output.padEnd(30, ' ')}${'✅'.repeat(i + 1)}`);
    }
});
