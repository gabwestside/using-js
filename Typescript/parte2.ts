export {};

type Platform = "XBOX" | "PC" | "PLAYSTATION";

type RecordItem = {
  gameTitle: string;
  gamePlatform: Platform;
  genreName: string;
};

type Game = {
  id: number;
  title: string;
  platform: Platform;
};

const gameList: Game[] = [
  {
    id: 1,
    title: "The Witcher 3",
    platform: "XBOX",
  },
  {
    id: 2,
    title: "The Witcher 3",
    platform: "PLAYSTATION",
  },
  {
    id: 3,
    title: "Overwatch",
    platform: "PC",
  },
];

const recordItemList: RecordItem[] = [
  {
    gameTitle: "The Witcher 3",
    gamePlatform: "PLAYSTATION",
    genreName: "RPG",
  },
  {
    gameTitle: "The Witcher 3",
    gamePlatform: "XBOX",
    genreName: "RPG",
  },
  {
    gameTitle: "Overwatch",
    gamePlatform: "PC",
    genreName: "Shooter",
  },
  {
    gameTitle: "Overwatch",
    gamePlatform: "PC",
    genreName: "Shooter",
  },
  {
    gameTitle: "The Witcher 3",
    gamePlatform: "PLAYSTATION",
    genreName: "RPG",
  },
];

const buildBarSeries = (games: Game[], records: RecordItem[]) => {
    const mappedGames = games.map(game => {

        const filteredGames = records.filter(record => {
            return record.gameTitle === game.title && record.gamePlatform === game.platform;
        });

        return {
            x: `${game.title} | ${game.platform}`,
            y: filteredGames.length
        }
    });

    const sortedGames = mappedGames.sort((a, b) => b.y - a.y);

    return sortedGames.slice(0, 8);
}

console.log(buildBarSeries(gameList, recordItemList));