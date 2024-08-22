<template>
  <footer>
    <p>{{copyright}} {{title}}</p>
  </footer>
</template>

<script>
  export default {
    props:{
      title:{
        type:String
      }
    },
    data () {
      return {
        copyright:'Copyright 2017 '
      }
    }
  }
</script>

<style scoped>
    footer{
        background:grey;
        padding:6px;
    }
    p{
      color:#222;
      text-align:center;
    }
</style>
