const wordList = {
    programming: [
        'javascript', 'python', 'java', 'typescript', 'react', 'angular', 'nodejs',
        'database', 'algorithm', 'function', 'variable', 'bootstrap', 'mongodb',
        'express', 'django', 'flask', 'jquery', 'kubernetes', 'docker', 'linux',
        'windows', 'ubuntu', 'debugging', 'framework', 'frontend', 'backend',
        'fullstack', 'developer', 'coding', 'compiler'
    ],
    animals: [
        'elephant', 'penguin', 'kangaroo', 'dolphin', 'giraffe', 'octopus',
        'cheetah', 'koala', 'panda', 'tiger', 'lion', 'zebra', 'rhinoceros',
        'hippopotamus', 'crocodile', 'platypus', 'flamingo', 'hedgehog', 'squirrel',
        'butterfly', 'penguin', 'gorilla', 'chimpanzee', 'leopard', 'hamster',
        'tortoise', 'pelican', 'seagull', 'ostrich', 'armadillo'
    ],
    countries: [
        'japan', 'brazil', 'canada', 'france', 'australia', 'egypt', 'india',
        'mexico', 'italy', 'spain', 'germany', 'thailand', 'morocco', 'portugal',
        'sweden', 'norway', 'finland', 'iceland', 'ireland', 'scotland', 'wales',
        'russia', 'china', 'vietnam', 'malaysia', 'argentina', 'chile', 'peru',
        'kenya', 'ethiopia'
    ],
    food: [
        'pizza', 'hamburger', 'spaghetti', 'sushi', 'taco', 'burrito', 'curry',
        'pancake', 'waffle', 'croissant', 'sandwich', 'lasagna', 'ravioli',
        'enchilada', 'quesadilla', 'dumpling', 'noodles', 'ramen', 'tempura',
        'risotto', 'paella', 'kebab', 'falafel', 'hummus', 'salad', 'soup',
        'steak', 'chicken', 'salmon', 'chocolate'
    ],
    sports: [
        'football', 'basketball', 'tennis', 'volleyball', 'baseball', 'cricket',
        'hockey', 'rugby', 'soccer', 'badminton', 'swimming', 'cycling', 'boxing',
        'wrestling', 'skating', 'skiing', 'surfing', 'climbing', 'diving',
        'gymnastics', 'archery', 'fencing', 'bowling', 'golf', 'karate',
        'judo', 'marathon', 'polo', 'frisbee', 'rowing'
    ],
    movies: [
        'avatar', 'titanic', 'inception', 'matrix', 'gladiator', 'alien',
        'jaws', 'ghostbusters', 'casablanca', 'frozen', 'cinderella',
        'aladdin', 'batman', 'superman', 'spiderman', 'avengers', 'terminator',
        'rocky', 'godfather', 'jurassic', 'shrek', 'transformers', 'pixar',
        'disney', 'halloween', 'twilight', 'hobbit', 'harry', 'potter', 'narnia'
    ],
    music: [
        'guitar', 'piano', 'violin', 'drums', 'saxophone', 'trumpet', 'flute',
        'clarinet', 'harmonica', 'keyboard', 'orchestra', 'concert', 'melody',
        'rhythm', 'tempo', 'jazz', 'blues', 'rock', 'pop', 'classical',
        'reggae', 'country', 'opera', 'musical', 'symphony', 'conductor',
        'band', 'choir', 'singer', 'composer'
    ],
    professions: [
        'doctor', 'teacher', 'engineer', 'lawyer', 'chef', 'artist', 'pilot',
        'architect', 'scientist', 'nurse', 'dentist', 'mechanic', 'plumber',
        'electrician', 'carpenter', 'baker', 'farmer', 'firefighter', 'police',
        'judge', 'veterinarian', 'journalist', 'photographer', 'designer',
        'programmer', 'accountant', 'actor', 'writer', 'dancer', 'musician'
    ],
    technology: [
        'computer', 'smartphone', 'tablet', 'laptop', 'internet', 'wifi',
        'bluetooth', 'software', 'hardware', 'processor', 'memory', 'screen',
        'keyboard', 'mouse', 'printer', 'camera', 'speaker', 'microphone',
        'battery', 'charger', 'router', 'server', 'browser', 'application',
        'website', 'email', 'password', 'cybersecurity', 'cloud', 'network'
    ],
    science: [
        'chemistry', 'physics', 'biology', 'astronomy', 'geology', 'evolution',
        'gravity', 'molecule', 'atom', 'electron', 'proton', 'neutron', 'cell',
        'planet', 'star', 'galaxy', 'universe', 'ecosystem', 'climate', 'weather',
        'energy', 'matter', 'reaction', 'hypothesis', 'theory', 'experiment',
        'laboratory', 'research', 'discovery', 'innovation'
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