<template>
    <div class="deck">

        <div class="container d-flex">
            <poker-player
                    v-for="player in others"
                    :key="player.name"
                    :player="player"
                    :dealer="player === dealer"
                    :turn="player === player_turn"
                    @play="play($event, player)"
            ></poker-player>
        </div>

        <div class="container">
            <div class="card-body">
                <div>{{game.roundName}}</div>
                <div>{{game.board}}</div>
            </div>
        </div>
        <div class="container d-flex align-items-center">
            <poker-player
                    :player="me"
                    :dealer="me === dealer"
                    :turn="me === player_turn"
                    :me="true"
                    @play="play($event, me)"
            ></poker-player>
        </div>

    </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import PokerPlayer from "./PokerPlayer"
  import axios from "axios"

  export default {
    name: "GameTable",
    components: {PokerPlayer},
    computed: {
      ...mapGetters(['current']),
      players () {
        if(this.current)
            return this.current.table.players
        return []
      },
      game () {
        return this.current.table.game
      },
      dealer () {
        return this.players[this.game.dealer]
      },
      player_turn () {
        return this.players[this.game.current_player]
      },
      me() {
        return this.players.filter(p => p.data.id === this.$user.id && p.data.name === this.$user.name)[0]
      },
      others() {
        return this.players.filter(p => p !== this.me)
      }
    },
    methods: {
      startGame () {
        axios.get('/api/start-game')
      },
      play($event, player) {
        console.log($event, player)
        axios.get('/api/play')
      }
    },
    watch: {
      current: {
        handler() {
          if(!this.current)
            this.$router.push('/lobby')
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss">
    @import "./scss/variables";
    .deck {
        min-height: calc(100vh - 59px);
        /*background: rgb(97, 97, 101);*/
        background: radial-gradient(circle, rgba($gray-800, 0.7) 0%, rgba($gray-800, 1) 100%);
    }
</style>