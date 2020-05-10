<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
        <router-link class="navbar-brand" to="/" style="padding-right: 5rem">
            <img src="../assets/logo.png" style="position: absolute; top: 1rem" height="60" alt="">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" active-class="active" to="/lobby">
                    <a class="nav-link">Lobby <span class="sr-only">(current)</span></a>
                </router-link>
                <router-link class="nav-item" active-class="active" to="/table" v-if="current">
                    <a class="nav-link">Table <span class="sr-only">(current)</span></a>
                </router-link>
            </ul>
            <div class="navbar-text">
                <img :src="$user.picture" height="25">
                {{$user.name}}
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
      name: 'TopBar',
      computed: {
        ...mapGetters(['current'])
      },
    }
</script>