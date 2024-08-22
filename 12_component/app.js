
// var data ={
//     name:'yoshi'
// }


Vue.component('greeting',{
    template:'<p>Hey there I am a reusable component {{name}} . <button v-on:click="changeName">Change Name</button> </p>',
    data:function(){
        //return data;
        return {
            name:'Yoshi'
        }
    },
    methods:{
        changeName:function(){
            this.name='Mario';
        }
    }
})


 new Vue({
    el: '#vue-app-one',
    
    
});

 new Vue({
    el: '#vue-app-two',
       
});

