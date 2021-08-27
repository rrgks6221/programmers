function solution(numbers, hand) {
    let answer = "";
    let leftHandNumber = 10;
    let rightHandNumber = 10;
    for (let currentNumber of numbers) {
        if (currentNumber % 3 === 1) {
            leftHandNumber = currentNumber;
            answer += "L";
        } else if (currentNumber % 3 === 0 && currentNumber !== 0) {
            rightHandNumber = currentNumber - 2;
            answer += "R";
        } else {
            if (currentNumber === 0) currentNumber = 9;
            let rightMove = (parseInt(Math.abs(currentNumber - rightHandNumber) / 3)) + (Math.abs(currentNumber - rightHandNumber) % 3)
            let leftMove = (parseInt(Math.abs(currentNumber - leftHandNumber) / 3)) + (Math.abs(currentNumber - leftHandNumber) % 3)
            console.log(currentNumber, leftMove, rightMove)
            if (leftMove === rightMove) {
                if (hand === "right") {
                    answer += "R";
                    rightHandNumber = currentNumber;
                } else {
                    answer += "L";
                    leftHandNumber = currentNumber;
                }
            } else if (leftMove > rightMove) {
                answer += "R";
                rightHandNumber = currentNumber;
            } else {
                answer += "L";
                leftHandNumber = currentNumber;
            }
        }
    }
    return answer;
}