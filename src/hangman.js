class HangmanGame {
    constructor(word, category) {
        this.word = word.toLowerCase();
        this.category = category;
        this.guessedLetters = new Set();
        this.maxAttempts = 6;
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
=========`
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
            return {
                status: 'wrong',
                message: `\x1b[31mWrong guess! ${this.maxAttempts - this.attempts} attempts remaining.\x1b[0m`
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
        return this.hangmanStates[this.attempts];
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
            isOver: this.isGameOver(),
            isWon: this.isWon()
        };
    }
}

module.exports = HangmanGame;