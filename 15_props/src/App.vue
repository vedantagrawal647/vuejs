<template>
    <div>
      <app-header v-bind:title="title"></app-header>
      <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
      <hr/>
      <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
      <app-footer v-bind:title="title" ></app-footer>
    </div>
</template>

<script>

  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import Ninjas from './Ninjas.vue';

  export default {
    components:{
      'app-header':Header,
      'app-footer':Footer,
      'app-ninjas':Ninjas
    },
    data () {
      return {
        ninjas:[
            {name:'A',speciality:'Vue-components1',show:false},
            {name:'B',speciality:'Vue-components2',show:true},
            {name:'C',speciality:'Vue-components3',show:false},
            {name:'D',speciality:'Vue-components4',show:true},
            {name:'E',speciality:'Vue-components5',show:true}
        ],
        title:"Vue js"
      }
    }
  }
</script>

<style>

</style>
