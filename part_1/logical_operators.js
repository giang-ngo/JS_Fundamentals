const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Bạn có thể lái xe');
// } else {
//     console.log('Ai đó nên lái xe...');
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Bạn có thể lái xe');
} else {
    console.log('Ai đó nên lái xe...');
}
