//create instance -- it basically to control whole part or certain part of our applicaion
var one = new Vue({
    el: '#vue-app-one',
    data:{
        title:'Vue App one'
    },
    methods:{

    },
    computed:{
        greet:function(){
            return 'Hello from  app one';
        }
    }
    
});

var two = new Vue({
    el: '#vue-app-two',
    data:{
        title:'Vue App two',
    },
    methods:{
        changeTitle:function(){
            one.title='Title changed'
        }
    },
    computed:{
        greet:function(){
            return 'Hello from  app two';
        }
    } 
    
});


// we can also change any instance data value from outside
two.title='Change from Outside';