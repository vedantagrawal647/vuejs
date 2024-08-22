//create instance -- it basically to control whole part or certain part of our applicaion
new Vue({
    el: '#vue-app',
    data:{
        name:'',
        age:''
    },
    methods:{
        
        logName:function(){
            console.log("you enter your name");
        },
        logAge:function(){
            console.log("you enter your age");
        }
    }
});

//el which element on the page this is going to control this view instance