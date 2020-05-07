<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png" width="300">
        <div style="display: flex; align-items: center;">
            <div style="margin: auto;">
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
    methods: {
      ...mapActions(['login']),
    },
  }
</script>
