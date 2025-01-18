# Enhanced Hangman Game

A colorful command-line implementation of the classic Hangman game with multiple categories and ASCII art.

## Features

- Multiple word categories (Programming, Animals, Countries, Fruits)
- ASCII art representation of the hangman
- Colorful command-line interface
- Track of guessed letters
- Game statistics
- Play again option

## How to Play

1. Make sure you have Node.js installed on your system
2. Clone this repository
3. Navigate to the project directory
4. Run the game:

```bash
node src/game.js
```

## Game Rules

1. The game randomly selects a word from the chosen category
2. You have 6 attempts to guess the word
3. Enter one letter at a time
4. The game shows:
   - The hangman state
   - The word with revealed letters
   - Already guessed letters
   - Remaining attempts
5. Win by guessing the word before the hangman is complete!

## Project Structure

- `src/game.js`: Main game loop and user interface
- `src/hangman.js`: Hangman game logic and state management
- `src/wordList.js`: Word categories and random word selection

## Color Legend

- 🔵 Blue: Titles and headers
- 💚 Green: Correct guesses and winning messages
- 🔴 Red: Wrong guesses and game over messages
- 💛 Yellow: Warnings and notifications
- 🔰 Cyan: Category display

Enjoy the game! Feel free to contribute by adding more words or features.