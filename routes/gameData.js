var poker = require('../poker/engine');

const remapPlayer = (player, data) => {
  return {
    playerName: player.playerName,
    chips: player.chips,
    folded: player.folded,
    allIn: player.allIn,
    cards: player.cards,
    data: player.data,
    ...data
  }
}

module.exports = {
  games: [],
  players: [],
  io: null,

  getGamedata () {
    let res = this.games.map(game => {
      let current_game = game.table.game
      return {
        ...game,
        table: game.table.table = {
          smallBlind: game.table.smallBlind,
          bigBlind: game.table.bigBlind,
          minPlayers: game.table.minPlayers,
          maxPlayers: game.table.maxPlayers,

          players: [
            ...game.table.players.map(player => remapPlayer(player, { onTable: true })),
            ...game.table.playersToAdd.map(player => remapPlayer(player, { onTable: false })),
          ],

          dealer: game.table.dealer,
          minBuyIn: game.table.minBuyIn,
          maxBuyIn: game.table.maxBuyIn,
          game: { ...current_game, dealer:game.table.dealer, current_player: game.table.currentPlayer, deck: false }
        }
      }
    })

    return res;
  },

  addGame (data) {
    let g = this.games.find(x => x.name === data.name)
    if (!g) {
      let table = new poker.Table(data.blind, data.blind * 2, 2, data.max_players, 20, 2000)
      this.games.push({...data, table})
    }
    this.io.emit('games', this.getGamedata())
    return this.getGamedata()
  },
  joinTable (table, user) {
    let game = this.games.find(x => x.name === table)
    if (game) {
      let p = game.table.players.find(p => p.playerName === user.name)
      if (!p) {
        game.table.AddPlayer(user.name, 1000, user)
        console.info(user.name, 'is joining', game.name)
        this.io.emit('games', this.getGamedata())
      }
      return this.getGamedata()
    }
    return null
  },
  start () {
    let game = this.games[0]
    console.log(game)
    game.table.startGame()
    return this.getGamedata();
  },
  play () {
    if(this.games.length) {
      let current_game = this.games[0]
      const current_player = current_game.table.players[current_game.table.currentPlayer]
      current_player.Call()
      this.io.emit('games', this.getGamedata())
    }
  }
}