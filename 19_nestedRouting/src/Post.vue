<template>
  <div>
    <h1>Post</h1>
    <router-link to="/post/profile">Profile</router-link>
    <router-link to="/post/portfolio">Portfolio </router-link>  

    <router-view></router-view> 
  </div>
</template>

<script>
export default {
   data () {
    return {
    
    }
  }
}
</script>

<style scoped>
  h1{
    color:blue;
  }
</style>
