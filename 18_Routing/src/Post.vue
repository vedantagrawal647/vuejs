<template>
  <div>
    <h1>{{$route.params.slug}}</h1>
    <h1>{{slug}}</h1>
  </div>
</template>

<script>
export default {
  props:['slug']  
}
</script>

<style scoped>
  h1{
    color:blue;
  }
</style>
