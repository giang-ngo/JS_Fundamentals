// Coding Challenge #2

/*
Hãy tiếp tục với ứng dụng cá cược bóng đá của chúng ta!

1. Duyệt qua mảng game.scored và in tên của từng cầu thủ ra console, kèm theo số thứ tự bàn thắng (Ví dụ: "Bàn thắng 1: Lewandowski")

2. Sử dụng một vòng lặp để tính trung bình tỷ lệ cược và hiển thị kết quả lên console (Chúng ta đã học cách tính trung bình, bạn có thể kiểm tra lại nếu không nhớ)

3. In 3 tỷ lệ cược ra console, nhưng với định dạng đẹp, chính xác như sau:
        Tỷ lệ thắng Bayern Munich: 1.33
        Tỷ lệ hòa: 3.25
        Tỷ lệ thắng Borussia Dortmund: 6.5
Lấy tên đội từ đối tượng game, đừng mã hóa trực tiếp chúng (ngoại trừ "hòa"). GỢI Ý: Lưu ý cách tỷ lệ cược và đối tượng game có cùng tên thuộc tính 😉

BONUS: Tạo một đối tượng có tên là 'scorers' chứa tên của các cầu thủ ghi bàn làm thuộc tính, và số bàn thắng làm giá trị. Trong trò chơi này, nó sẽ trông như sau:
{
  Gnabry: 1,
  Hummels: 1,
  Lewandowski: 2
}

*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnabry',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1
for (const [i, player] of game.scored.entries()) {
    console.log(`Bàn thắng ${i + 1}: ${player}`);
}

//2
const odds = Object.values(game.odds);
let avg = 0;
for (const odd of Object.values(game.odds)) {
    avg += odd;
}
avg /= odds.length;
console.log(avg);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
    console.log(team);
    const teamStr = team === 'x' ? 'hòa' : `thắng ${game[team]}`;
    console.log(`Tỷ lệ ${teamStr}: ${odd}`);
}

// Bonus
const scorers = {};
for (const player of game.scored) {
    scorers[player] = (scorers[player] || 0) + 1;
}
console.log(scorers);
