<template>
    <div class="container">
        <div class="my-3 row">
            <div class=" col-2 mr-3">
                <input class="form-control" v-model="name"/>
            </div>
            <button class="btn btn-primary" @click="addGame">Add game</button>
        </div>

        <table class="table table-striped rounded">
            <thead>
            <tr>
                <th>name</th>
                <th>players</th>
                <th>blind</th>
                <th width="110px"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="game in games" :key="game.name">
                <td>{{game.name}}</td>
                <td>{{game.table.players.length}}/{{game.max_players}}</td>
                <td>{{game.blind}}</td>
                <td>
                    <button @click="joinGame(game)" class="btn btn-primary btn-sm">Join table</button>
                </td>
            </tr>
            <tr v-if="!games.length">
                <td colspan="10" class="text-center text-muted">
                    No games
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import {mapGetters, mapState} from "vuex";
  import axios from "axios";

  export default {
    name: "Lobby",
    data () {
      return {
        name: 'Poker mob'
      }
    },
    computed: {
      ...mapState(['games']),
      ...mapGetters(['current'])
    },
    methods: {
      addGame () {
        axios.post('/api/games/add', {
          name: this.name
        })
      },
      joinGame (game) {
        axios.post('/api/games/join', {
          name: game.name
        }).then(() => {
          // console.log(data)
        }).catch(e => console.log(e))
      }
    },
    watch: {
      current: {
        handler (value) {
          value && this.$router.push('/table')
        },
        immediate: true
      }
    }
  }
</script>

<style scoped lang="scss">
    .container {
        padding-top: 2rem;
    }
</style>