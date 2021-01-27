<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">     
       <strong class="is-size-4">Strzelnica</strong>      
    </a>
  </div>
  <div id="navbar" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/about" class="navbar-item">Kontakt</router-link>
      <router-link to="/my-profile" class="navbar-item"><a v-if="isAuthenticated"><strong>Mój profil</strong></a></router-link>
    </div>
<div class="navbar-end">
  <div class="navbar-item">
    <div class="buttons">
      <div >
        <!-- show login when not authenticated -->
        <router-link to="/Login" class="navbar-item"><a v-if="!isAuthenticated" class="button is-dark"><strong>Zaloguj</strong></a></router-link>
        <router-link to="/" class="navbar-item"><a class="button is-dark" v-if="isAuthenticated" @click="onLogout"><strong>Wyloguj</strong></a></router-link>
        <!-- show logout when authenticated -->
        <!-- <router-link to="/signup" class="navbar-item"><a v-if="!isAuthenticated" class="button is-dark"><strong>Zarejestruj</strong></a></router-link>-->
      </div>
    </div>
  </div>
</div>
  </div>
</nav>
</template>
<script>
export default {
  name: 'Nav',
  computed: {
    isAuthenticated(){
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    onLogout(){
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }  
  }
#navigationBarList{
    display: inline-block;
    margin: 0;
    background-color: black;    
    font-size: 25px;
    color: red;
}
#navigationBarList li{
    display: inline;
    width: 100px;
    margin-right: 20px;
}
#element2{
    display: inline;
    float: right;
    font-size: 25px;
    background-color: red;
} 
</style>