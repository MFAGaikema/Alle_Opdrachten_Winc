const getWordLengths = function(someWords) {
    return someWords.map(words => {
        return words.length
    })
};

module.exports = getWordLengths;