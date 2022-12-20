var ownedCatAndDog = function (catYears, dogYears) {
    let ownedCatYears;
    let ownedDogYears;
    if (catYears < 15 & catYears > 0) {
        ownedCatYears = +0
    } else if (catYears >= 15 & catYears < 24) {
        ownedCatYears = 1
    } else if (catYears <= 0) {
        ownedCatYears = 0;
    } else {
        ownedCatYears = Math.floor(((catYears - 24) / 4) + 2);
    }

    if (dogYears < 15 & dogYears > 0) {
        ownedDogYears = +0
    } else if (dogYears >= 15 & dogYears < 24) {
        ownedDogYears = 1
    } else if (dogYears <= 0) {
        ownedDogYears = 0;
    } else {
        ownedDogYears = Math.floor(((dogYears - 24) / 5) + 2);
    }
    return [ownedCatYears, ownedDogYears];
}



// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

// NOTES:

// Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that