<template>
  <div>{{userId}}</div>
</template>

<script>
export default{
  data(){
    return{
      userId:this.$route.query.userId//$routeオブジェクトを利用してqueryの値を取り出せる
    }
  }
}
</script>