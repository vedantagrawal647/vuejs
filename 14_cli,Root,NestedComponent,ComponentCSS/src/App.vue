<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>

    import Ninjas from './Ninjas.vue'

    export default {
      components:{
        'ninjas':Ninjas
      },
      data () {
        return {
          title: 'List of ninjas'
        }
      }
    }
</script>

<style>

  h1{
    color:purple;
  }


</style>
