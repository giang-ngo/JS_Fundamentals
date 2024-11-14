// Coding Challenge #1

/*
Chúng ta đang xây dựng một ứng dụng cá cược bóng đá

Giả sử chúng ta nhận dữ liệu từ một dịch vụ web về một trận đấu nhất định (bên dưới). 
Trong thử thách này, chúng ta sẽ làm việc với dữ liệu đó. Dưới đây là các nhiệm vụ của bạn:

1. Tạo một mảng cầu thủ cho mỗi đội (biến 'players1' và 'players2').

2. Cầu thủ đầu tiên trong bất kỳ mảng cầu thủ nào là thủ môn, và những cầu thủ còn lại là cầu thủ trên sân. 
Đối với Bayern Munich (đội 1), tạo một biến ('gk') chứa tên của thủ môn, và một mảng ('fieldPlayers') chứa 10 cầu thủ 
trên sân còn lại.

3. Tạo một mảng 'allPlayers' chứa tất cả các cầu thủ của cả hai đội (22 cầu thủ).

4. Trong trận đấu, Bayern Munich (đội 1) đã sử dụng 3 cầu thủ dự bị. Vì vậy, hãy tạo một mảng mới ('players1Final') 
chứa tất cả các cầu thủ ban đầu của đội 1, cộng thêm 'Thiago', 'Coutinho' và 'Perisic'.

5. Dựa trên đối tượng game.odds, tạo một biến cho mỗi tỷ lệ cược (gọi là 'team1', 'draw' và 'team2').

6. Viết một hàm ('printGoals') nhận một số lượng tùy ý tên cầu thủ (KHÔNG phải mảng) và in từng tên cầu thủ ra console, cùng với tổng số bàn thắng đã được ghi (số lượng tên cầu thủ được truyền vào).

7. Đội có tỷ lệ cược thấp hơn có khả năng chiến thắng cao hơn. In ra console đội nào có khả năng thắng cao hơn, 
mà KHÔNG sử dụng câu lệnh if/else hoặc toán tử điều kiện (ternary operator).

TEST DATA FOR 6: Sử dụng các cầu thủ 'Davies', 'Muller', 'Lewandowski' và 'Kimmich'. Sau đó, gọi lại hàm với các cầu thủ từ game.scored.😃

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
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
const {
    odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = (...players) => {
    console.log(...players);
    console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);
// 7
team1 < team2 && console.log('Team 1 có khả năng chiến thắng cao hơn');

team1 > team2 && console.log('Team 2 có khả năng chiến thắng cao hơn');
