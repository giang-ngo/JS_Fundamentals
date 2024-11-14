// Coding Challenge #3

/*
Tiếp tục với ứng dụng cá cược bóng đá của chúng ta! Lần này, chúng ta có một map chứa nhật ký của các sự kiện đã xảy ra trong trận đấu. Các giá trị là những sự kiện xảy ra, và các khóa là phút mà mỗi sự kiện xảy ra (một trận bóng đá có 90 phút cộng thêm một ít thời gian bù giờ).

1. Tạo một mảng 'events' chứa các sự kiện khác nhau xảy ra trong trận đấu (không có phần tử trùng lặp).
2. Sau khi trận đấu kết thúc, người ta phát hiện rằng thẻ vàng ở phút thứ 64 là không công bằng. Vì vậy, hãy xóa sự kiện này khỏi nhật ký sự kiện của trận đấu.
3. In chuỗi sau lên console: "Một sự kiện xảy ra trung bình mỗi 9 phút" (lưu ý rằng một trận đấu có 90 phút).
4. Lặp qua các sự kiện và ghi chúng lên console, đánh dấu xem nó thuộc hiệp đầu tiên hay hiệp hai (sau phút 45) của trận đấu, như sau:
   [FIRST HALF] 17: ⚽ GOAL

*/

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);

// 3
console.log(`Một sự kiện xảy ra trung bình mỗi ${90 / gameEvents.size} phút`);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`Một sự kiện xảy ra trung bình mỗi ${time / gameEvents.size} phút`);

// 4
for (const [key, value] of gameEvents) {
    const half = key > 45 ? 'SECOND' : 'FIRST';
    console.log(`[${half} HALF] ${key}: ⚽ ${value}`);
}
