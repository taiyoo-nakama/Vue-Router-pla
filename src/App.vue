<template>
  <div id="app">
    <router-link @click="topPage">トップページ</router-link>
    <router-link @click="userListPage">ユーザー一覧ページ</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods:{
    topPage(){
      this.$router.push({name:'Home'});
    },
    userListPage(){
      this.$router.push({name:'UserList'});
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
