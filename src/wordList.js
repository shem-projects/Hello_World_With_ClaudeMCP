// Classify words by difficulty based on length and common letters
function getWordDifficulty(word) {
    const commonLetters = 'etaoinshrdlu';
    const uncommonLetters = 'jkqxzvwybfgmpc';
    let uncommonCount = 0;
    
    for (let letter of word) {
        if (uncommonLetters.includes(letter)) {
            uncommonCount++;
        }
    }
    
    if (word.length <= 5 && uncommonCount <= 1) {
        return 'easy';
    } else if (word.length >= 9 || uncommonCount >= 3) {
        return 'hard';
    } else {
        return 'medium';
    }
}

const wordList = {
    programming: [
        'javascript', 'python', 'java', 'typescript', 'react', 'angular', 'nodejs',
        'database', 'algorithm', 'function', 'variable', 'bootstrap', 'mongodb',
        'express', 'django', 'flask', 'jquery', 'kubernetes', 'docker', 'linux',
        'windows', 'ubuntu', 'debugging', 'framework', 'frontend', 'backend',
        'fullstack', 'developer', 'coding', 'compiler'
    ],
    // ... [previous categories remain the same]
};

// Create difficulty-based word lists
const wordsByDifficulty = {
    easy: {},
    medium: {},
    hard: {}
};

// Categorize all words by difficulty
for (const [category, words] of Object.entries(wordList)) {
    wordsByDifficulty.easy[category] = [];
    wordsByDifficulty.medium[category] = [];
    wordsByDifficulty.hard[category] = [];
    
    for (const word of words) {
        const difficulty = getWordDifficulty(word);
        wordsByDifficulty[difficulty][category].push(word);
    }
}

function getRandomWord(category, difficulty = 'medium') {
    const categories = Object.keys(wordList);
    const selectedCategory = category || categories[Math.floor(Math.random() * categories.length)];
    
    // Get words for the selected category and difficulty
    let availableWords;
    if (difficulty === 'random') {
        availableWords = wordList[selectedCategory];
    } else {
        availableWords = wordsByDifficulty[difficulty][selectedCategory];
        // Fallback to medium if no words available for chosen difficulty
        if (!availableWords || availableWords.length === 0) {
            availableWords = wordsByDifficulty.medium[selectedCategory];
        }
    }
    
    return {
        word: availableWords[Math.floor(Math.random() * availableWords.length)],
        category: selectedCategory
    };
}

module.exports = {
    wordList,
    wordsByDifficulty,
    getRandomWord
};