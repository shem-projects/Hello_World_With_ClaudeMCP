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
    console.log(`Difficulty: \x1b[35m${state.difficulty.toUpperCase()}\x1b[0m`);
    console.log(state.hangman);
    console.log('\nWord:', state.display);
    console.log('\nGuessed letters:', state.guessed || 'None');
    console.log(`Attempts remaining: ${state.remaining}`);
}

function askQuestion(question) {
    return new Promise(resolve => {
        rl.question(question, answer => resolve(answer));
    });
}

async function getDifficultyLevel() {
    console.log('\nDifficulty Levels:');
    console.log('1. Easy (shorter words, common letters)');
    console.log('2. Medium (average length, mixed letters)');
    console.log('3. Hard (longer words, uncommon letters)');
    console.log('4. Random (any difficulty)');
    
    const choice = await askQuestion('\nChoose difficulty (1-4): ');
    const difficultyMap = {
        '1': 'easy',
        '2': 'medium',
        '3': 'hard',
        '4': 'random'
    };
    
    return difficultyMap[choice] || 'medium';
}

async function getTwoPlayerInput() {
    clearScreen();
    console.log('\x1b[34m=== Two Player Mode ===\x1b[0m');
    console.log('\x1b[33mPlayer 1, please enter your word and category.\x1b[0m');
    console.log('Player 2, no peeking!\n');
    
    const word = await askQuestion('Enter the word to guess: ');
    const category = await askQuestion('Enter the category: ');
    
    clearScreen();
    console.log('\x1b[32mWord set! Player 2, get ready to guess!\x1b[0m');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return { word, category };
}

async function playGame(mode = 'single') {
    let word, category, difficulty = 'medium';
    
    if (mode === 'two-player') {
        const input = await getTwoPlayerInput();
        word = input.word;
        category = input.category;
        difficulty = await getDifficultyLevel(); // Let Player 1 set difficulty
    } else {
        difficulty = await getDifficultyLevel();
        const randomWord = getRandomWord(null, difficulty);
        word = randomWord.word;
        category = randomWord.category;
    }
    
    const game = new HangmanGame(word, category, difficulty);

    while (!game.isGameOver()) {
        displayGameState(game.getGameState());

        const guess = await askQuestion('\nEnter a letter: ');

        if (guess.length !== 1) {
            console.log('\x1b[33mPlease enter a single letter!\x1b[0m');
            await new Promise(resolve => setTimeout(resolve, 1000));
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

    const playAgain = await askQuestion('\nPlay again? (y/n): ');
    if (playAgain.toLowerCase() === 'y') {
        const gameMode = await askQuestion('Choose game mode (1 for single player, 2 for two players): ');
        await playGame(gameMode === '2' ? 'two-player' : 'single');
    } else {
        console.log('Thanks for playing!');
        rl.close();
    }
}

async function startGame() {
    console.log('\x1b[34mWelcome to Hangman!\x1b[0m');
    const gameMode = await askQuestion('Choose game mode (1 for single player, 2 for two players): ');
    await playGame(gameMode === '2' ? 'two-player' : 'single');
}

startGame();