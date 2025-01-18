const readline = require('readline');
const HangmanGame = require('./hangman');
const { getRandomWord } = require('./wordList');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function clearScreen() {
    console.clear();
}

function displayGameState(state) {
    clearScreen();
    console.log('\x1b[34m=== HANGMAN ===\x1b[0m');
    console.log(`Category: \x1b[36m${state.category}\x1b[0m`);
    console.log(state.hangman);
    console.log('\nWord:', state.display);
    console.log('\nGuessed letters:', state.guessed || 'None');
    console.log(`Attempts remaining: ${state.remaining}`);
}

async function playGame() {
    const { word, category } = getRandomWord();
    const game = new HangmanGame(word, category);

    while (!game.isGameOver()) {
        displayGameState(game.getGameState());

        const guess = await new Promise(resolve => {
            rl.question('\nEnter a letter: ', answer => resolve(answer));
        });

        if (guess.length !== 1) {
            console.log('\x1b[33mPlease enter a single letter!\x1b[0m');
            continue;
        }

        const result = game.makeGuess(guess);
        console.log(result.message);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    displayGameState(game.getGameState());

    if (game.isWon()) {
        console.log('\x1b[32m\nCongratulations! You won!\x1b[0m');
    } else {
        console.log(`\x1b[31m\nGame Over! The word was: ${word}\x1b[0m`);
    }

    rl.question('\nPlay again? (y/n): ', answer => {
        if (answer.toLowerCase() === 'y') {
            playGame();
        } else {
            console.log('Thanks for playing!');
            rl.close();
        }
    });
}

console.log('\x1b[34mWelcome to Hangman!\x1b[0m');
playGame();