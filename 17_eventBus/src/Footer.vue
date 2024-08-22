<template>
  <footer>
    <p>{{copyright}} {{title}}</p>
  </footer>
</template>

<script>

  import {bus} from './main';

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
    },
    created(){
      bus.$on('titleChanged',(data) => {
        this.title = data;
      })
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
