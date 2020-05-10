<template>
    <div id="app">
        <top-bar v-if="$user.id"></top-bar>
        <router-view></router-view>
    </div>
</template>

<script>
  import TopBar from "./components/TopBar";
  export default {
    name: 'App',
    components: {TopBar},
  }
</script>

<style lang="scss">
    @import "../scss/styles";
</style>
