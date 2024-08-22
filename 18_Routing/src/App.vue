<template>
  <div>
    <h1>Hello App</h1>
    
    <router-link to="/">Home </router-link>
    <router-link to="/about">About </router-link>
    <router-link :to="{name:'contact'}">Contact </router-link>
    <router-link :to="{name:'post',params:{slug:'any-post-slug'}}">Post </router-link>

    <router-view></router-view>
  </div>
</template>

<script>

    export default {
      components:{

      },
      data () {
        return {
          
        }
      }
    }
</script>

<style>

  h1{
    color:purple;
  }


</style>
