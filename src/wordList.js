const wordList = {
    programming: [
        'javascript',
        'python',
        'java',
        'typescript',
        'react',
        'angular',
        'nodejs',
        'database',
        'algorithm',
        'function'
    ],
    animals: [
        'elephant',
        'penguin',
        'kangaroo',
        'dolphin',
        'giraffe',
        'octopus',
        'cheetah',
        'koala',
        'panda',
        'tiger'
    ],
    countries: [
        'japan',
        'brazil',
        'canada',
        'france',
        'australia',
        'egypt',
        'india',
        'mexico',
        'italy',
        'spain'
    ],
    fruits: [
        'apple',
        'banana',
        'orange',
        'mango',
        'grape',
        'kiwi',
        'pineapple',
        'strawberry',
        'blueberry',
        'watermelon'
    ]
};

function getRandomWord(category) {
    const categories = Object.keys(wordList);
    const selectedCategory = category || categories[Math.floor(Math.random() * categories.length)];
    const words = wordList[selectedCategory];
    return {
        word: words[Math.floor(Math.random() * words.length)],
        category: selectedCategory
    };
}

module.exports = {
    wordList,
    getRandomWord
};