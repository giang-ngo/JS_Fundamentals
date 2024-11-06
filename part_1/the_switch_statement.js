const day = 'wednesday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to meetup');
        break;
    case 'tuesday':
        console.log('Prepare videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'sunday':
    case 'saturday':
        console.log('Enjoy the weekend 🥹');
        break;
    default:
        console.log('Not a valid day!');
        break;
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to meetup');
} else if (day === 'tuesday') {
    console.log('Prepare videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'sunday' || day === 'saturday') {
    console.log('Enjoy the weekend 🥹');
} else {
    console.log('Not a valid day!');
}
