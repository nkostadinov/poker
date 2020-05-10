<template>
    <div class="card mx-1">
        <div class="card-header">
            <img class="rounded-circle player-image border shadow" :src="player.data.picture.data.url">
            <div style="margin-left: 3rem"> {{player.playerName}}</div>
        </div>
        <div>coins: {{player.chips}}</div>

        <div class="d-flex">
            <div
                    v-for="card in player.cards"
                    :key="card"
                    class="playing-card"
                    style="width: 50px;"
            >
                <img :src="'/images/cards/' + card + '.svg'" width="90px">
            </div>
        </div>

        <div v-if="turn && me">
            <button @click="$emit('play', 'call')" class="btn btn-primary">Call</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "PokerPlayer",
    props: {
      player: Object,
      dealer: Boolean,
      turn: Boolean,
      me: Boolean
    }
  }
</script>

<style scoped>
    .card {
        margin-top: 2rem;
        width: 15rem;
    }

    .player-image {
        position: absolute;
        top: -1rem;
        left: 0.5rem;
    }
</style>