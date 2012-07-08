//////////////////////////////////////////////////////////////////////////////////////
// Game

// game modes
var GAME_PACMAN = 0;
var GAME_MSPACMAN = 1;
var GAME_COOKIE = 2;

// current game mode
var gameMode = GAME_PACMAN;

// current level, lives, and score
var level = 1;
var extraLives = 0;
var highScore = 0;
var score = 0;

var savedExtraLives = {};
var savedHighScore = {};
var savedScore = {};

var saveGame = function(t) {
    savedExtraLives[t] = extraLives;
    savedHighScore[t] = highScore;
    savedScore[t] = score;
};

var loadGame = function(t) {
    extraLives = savedExtraLives[t];
    highScore = savedHighScore[t];
    score = savedScore[t];
};

// TODO: have a high score for each game type

var addScore = function(p) {
    if (score < 10000 && score+p >= 10000)
        extraLives++;
    score += p;
    if (score > highScore)
        highScore = score;
};
