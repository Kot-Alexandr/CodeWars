

const Bubble = (num) => {

    for (j = 0; j < num.length-1; j++) {
let isCorrect = true;
        for (i = 0; i < num.length - 1-j; i++) {
            if (num[i] > num[i + 1]) {
                isCorrect=false;
                [num[i], num[i + 1]] = [num[i + 1], num[i]]
            }
        }
if (isCorrect) break
    }
}


// Метод пузырька для собеседований
// Bubble(num)
// Bubble(num1)

// const num = [41, 15, 28, 64, 75, 25, 35, 94, 57, 6, 57]

// const num1 = [25, 13, 2]    