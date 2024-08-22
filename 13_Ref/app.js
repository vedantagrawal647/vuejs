
// var data ={
//     name:'yoshi'
// }




 new Vue({
    el: '#vue-app',
    data:{
       output:'Your favourite food'
    },
    methods:{
       readRefs:function(){
        //console.log(this.$refs.input.value);
        console.log(this.$refs);
        console.log(this.$refs.innerText);
        this.output=this.$refs.input.value;
       }
    }
    
    
});

