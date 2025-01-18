class HangmanGame {
    constructor(word, category, difficulty = 'medium') {
        this.word = word.toLowerCase();
        this.category = category;
        this.difficulty = difficulty;
        this.guessedLetters = new Set();
        
        // Adjust max attempts based on difficulty
        switch(difficulty) {
            case 'easy':
                this.maxAttempts = 9; // More forgiving, with better progression
                break;
            case 'hard':
                this.maxAttempts = 5; // More challenging
                break;
            default: // medium or random
                this.maxAttempts = 6;
        }
        
        this.attempts = 0;
        this.hangmanStates = [
            `
  +---+
      |
      |
      |
      |
      |
=========`,
            `
  +---+
  O   |
      |
      |
      |
      |
=========`,
            `
  +---+
  O   |
  |   |
      |
      |
      |
=========`,
            `
  +---+
  O   |
 /|   |
      |
      |
      |
=========`,
            `
  +---+
  O   |
 /|\\  |
      |
      |
      |
=========`,
            `
  +---+
  O   |
 /|\\  |
 /    |
      |
      |
=========`,
            `
  +---+
  O   |
 /|\\  |
 / \\  |
      |
      |
=========`,
            `
  +---+
  O   |
 /|\\  |
 / \\  |
/     |
      |
=========`,
            `
  +---+
  O   |
 /|\\  |
 / \\  |
/   \\ |
      |
=========`,
            `
  +---+
  O   |
 /|\\  |
 / \\  |
/ | \\ |
      |
=========`  // New final state for easy mode - feet spread with center line
        ];
    }

    makeGuess(letter) {
        letter = letter.toLowerCase();
        if (this.guessedLetters.has(letter)) {
            return {
                status: 'repeat',
                message: '\x1b[33mYou already guessed this letter!\x1b[0m'
            };
        }
        
        this.guessedLetters.add(letter);
        
        if (!this.word.includes(letter)) {
            this.attempts++;
            let attemptsLeft = this.maxAttempts - this.attempts;
            let message = '\x1b[31mWrong guess!';
            
            if (attemptsLeft <= 2) {
                message += ` Be careful! Only ${attemptsLeft} attempts remaining!`;
            } else {
                message += ` ${attemptsLeft} attempts remaining.`;
            }
            
            return {
                status: 'wrong',
                message: message + '\x1b[0m'
            };
        }
        
        return {
            status: 'correct',
            message: '\x1b[32mGood guess!\x1b[0m'
        };
    }

    getDisplayWord() {
        return this.word
            .split('')
            .map(letter => this.guessedLetters.has(letter) ? letter : '_')
            .join(' ');
    }

    getHangman() {
        return this.hangmanStates[Math.min(this.attempts, this.hangmanStates.length - 1)];
    }

    getGuessedLetters() {
        return Array.from(this.guessedLetters)
            .sort()
            .join(', ');
    }

    isGameOver() {
        return this.isWon() || this.attempts >= this.maxAttempts;
    }

    isWon() {
        return this.word
            .split('')
            .every(letter => this.guessedLetters.has(letter));
    }

    getGameState() {
        return {
            display: this.getDisplayWord(),
            hangman: this.getHangman(),
            guessed: this.getGuessedLetters(),
            attempts: this.attempts,
            remaining: this.maxAttempts - this.attempts,
            category: this.category,
            difficulty: this.difficulty,
            isOver: this.isGameOver(),
            isWon: this.isWon()
        };
    }
}

module.exports = HangmanGame;