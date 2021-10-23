let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (target, number) => Math.abs(target - number);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    const userAbsDistance = getAbsoluteDistance(targetNumber, userGuess);
    const computerAbsDistance = getAbsoluteDistance(targetNumber, computerGuess);

    return userAbsDistance <= computerAbsDistance;
}

const updateScore = winner => {
    if (winner === 'human')
        humanScore++;
    else if (winner === 'computer')
        computerScore++
}

const advanceRound = () => {
    currentRoundNumber++;
}