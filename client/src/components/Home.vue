<template>
    <div>
        <img class="m-auto d-block" alt="Vue logo" src="../assets/logo.png" width="300">
        <div style="display: flex; align-items: center;">
            <div style="margin: auto;" v-if="!$user.id">
                <facebook-login
                        app-id="733546760785744"
                        @login="login"
                ></facebook-login>
            </div>
        </div>
    </div>
</template>

<script>
  import FacebookLogin from 'vue-facebook-login-component'
  import {mapActions} from "vuex";

  export default {
    name: 'Home',
    components: {
      FacebookLogin
    },
    created () {
      if(this.$user.id > 0)
        this.$router.push('/lobby')
    },
    methods: {
      ...mapActions(['login']),
    },
  }
</script>
