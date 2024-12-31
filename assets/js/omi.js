const scriptMapping = {
    "a": "𑲏", "b": "𑱲", "c": "𑱶", "d": "𑲀", "e": "𑲳", "f": "𑲵",
    "g": "𑱴", "h": "𑲎", "i": "𑲱", "j": "𑱸", "k": "𑱲", "l": "𑲊",
    "m": "𑲁", "n": "𑱽", "o": "𑲴", "p": "𑱾", "q": "𑱴", "r": "𑲊",
    "s": "𑲍", "t": "𑱺", "u": "𑲲", "v": "𑲶", "w": "𑲅", "x": "𑲆",
    "y": "𑲇", "z": "𑲆", " ": " "
};

const ipaMapping = {
    "a": "ɑ", "b": "buh", "c": "ʧ", "d": "dia", "e": "ɛ", "f": "fou", 
    "g": "ɡa", "h": "hu", "i": "ie", "j": "ʤ", "k": "kuh", "l": "li", 
    "m": "ma", "n": "nyi", "o": "op", "p": "pl", "q": "qa", "r": "ru", 
    "s": "sk", "t": "tl", "u": "ui", "v": "vn", "w": "wp", "x": "ʃ", 
    "y": "jh", "z": "ze", " ": " "
};

const numberMapping = {
    "0": { "character": "〇", "pronunciation": "líng" }, // Chinese numeral for 0
    "1": { "character": "一", "pronunciation": "yī" }, // Chinese numeral for 1
    "2": { "character": "二", "pronunciation": "èr" }, // Chinese numeral for 2
    "3": { "character": "三", "pronunciation": "sān" }, // Chinese numeral for 3
    "4": { "character": "四", "pronunciation": "sì" }, // Chinese numeral for 4
    "5": { "character": "五", "pronunciation": "wǔ" }, // Chinese numeral for 5
    "6": { "character": "六", "pronunciation": "liù" }, // Chinese numeral for 6
    "7": { "character": "七", "pronunciation": "qī" }, // Chinese numeral for 7
    "8": { "character": "八", "pronunciation": "bā" }, // Chinese numeral for 8
    "9": { "character": "九", "pronunciation": "jiǔ" }  // Chinese numeral for 9
};

function translateSentence() {
    const input = document.getElementById('inputSentence').value.toLowerCase();
    let translatedSentence = "";
    let pronunciation = "";

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (scriptMapping[char]) {
            translatedSentence += scriptMapping[char];
            pronunciation += ipaMapping[char] + " ";
        } else if (numberMapping[char]) {
            translatedSentence += numberMapping[char].character;
            pronunciation += numberMapping[char].pronunciation + " ";
        } else {
            translatedSentence += char; // Leave unrecognized characters as they are
            pronunciation += char + " ";
        }
    }

    document.getElementById('translatedSentence').textContent = translatedSentence;
    document.getElementById('pronunciation').textContent = pronunciation.trim();
}

