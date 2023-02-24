
// shuffle prototype
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
// gameContainer
const gameContainer = document.getElementById('gameContainer');
// word list 
const WordsList = ['بازی', 'تهران', 'زیبا', 'سردشت', 'خواننده'];

// pick random word of word list 
const PickWord = WordsList[Math.floor(Math.random() * WordsList.length)].shuffle();
localStorage.setItem('correct_word', PickWord);

function CharsBox() {
    var colors = ['red', 'blue', 'purple', 'yellow', 'orange'];
    for (const pw of PickWord) {
        gameContainer.innerHTML += `<h1 class='CharBorder' 
        style='border-color: ${colors[Math.floor(Math.random() * colors.length)]}'>${pw}</h1>`;
    }
}

function GuessWord() { 
    
}
CharsBox()