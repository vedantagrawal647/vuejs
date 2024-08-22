//create instance -- it basically to control whole part or certain part of our applicaion
new Vue({
    el: '#vue-app',
    data:{
        age:20,
        a:0,
        b:0
    },
    // methods:{
    //     addToA:function(){
    //         console.log("Add to A");
    //         return this.a + this.age;
    //     },
    //     addToB:function(){
    //         console.log("Add to B");
    //         return this.b + this.age;
    //     }
    // }
    computed:{
        addToA:function(){
            console.log("Add to A");
            return this.a + this.age;
        },
        addToB:function(){
            console.log("Add to B");
            return this.b + this.age;
        }
    }
});

//if we  updating any variable value 
//it will call again all function (that define inside method)
//weather a function contain a  variable (whose value is updated)  or not
//but in case of computed it will call again only those function
//(which define inside computed) 
//which contain a  variable (whose value is updated)  

//for example suppose if we  updating value of variable a;
//then it in case of method all function addToA or addtoB
//both call again even Only addToA contain variable whose value is upfated
//but if function define inside computed
//then only addtoA call again on updating value of variable A
