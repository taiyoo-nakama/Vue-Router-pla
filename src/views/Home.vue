<template>
  <div id="home">
    <router-link :to="`dynamic-route-matching/${userId}`">DynamicRouteMatching.vueへ
      </router-link>
      </div>
</template>

<script>
export default {
  data(){
    return{
      userId:'1c10db36-a600-ad36-dc46-da001fc3cc13'
    }
  }
}
</script>
