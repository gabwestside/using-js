"use strict";
exports.__esModule = true;
var gameList = [
    {
        id: 1,
        title: "The Witcher 3",
        platform: "XBOX"
    },
    {
        id: 2,
        title: "The Witcher 3",
        platform: "PLAYSTATION"
    },
    {
        id: 3,
        title: "Overwatch",
        platform: "PC"
    },
];
var recordItemList = [
    {
        gameTitle: "The Witcher 3",
        gamePlatform: "PLAYSTATION",
        genreName: "RPG"
    },
    {
        gameTitle: "The Witcher 3",
        gamePlatform: "XBOX",
        genreName: "RPG"
    },
    {
        gameTitle: "Overwatch",
        gamePlatform: "PC",
        genreName: "Shooter"
    },
    {
        gameTitle: "Overwatch",
        gamePlatform: "PC",
        genreName: "Shooter"
    },
    {
        gameTitle: "The Witcher 3",
        gamePlatform: "PLAYSTATION",
        genreName: "RPG"
    },
];
var buildBarSeries = function (games, records) {
    var mappedGames = games.map(function (game) {
        var filteredGames = records.filter(function (record) {
            return record.gameTitle === game.title && record.gamePlatform === game.platform;
        });
        return {
            x: "".concat(game.title, " | ").concat(game.platform),
            y: filteredGames.length
        };
    });
    var sortedGames = mappedGames.sort(function (a, b) { return b.y - a.y; });
    return sortedGames.slice(0, 8);
};
console.log(buildBarSeries(gameList, recordItemList));
